// Receives the contact form and emails it to the practice through Resend (resend.com).
// Runs as a Vercel function, so the rest of the site stays fully static.
//
// Environment variables (Vercel project settings):
//   RESEND_API_KEY  required. API key from resend.com.
//   CONTACT_FROM    required. A sender on a domain verified in Resend, e.g. "Hope at Home website <website@hopeathome.ca>".
//   CONTACT_TO      optional. Where messages go. Defaults to the practice's own inbox.

const DEFAULT_TO = "therapistkunjalbhatt@gmail.com";

const limits = { name: 100, email: 254, phone: 40, replyBy: 40, topic: 120, message: 5000 };

const json = (body: object, status: number) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

// Visitors with JavaScript get JSON. Without it, the browser posts the form and is sent back to the page.
const respond = (wantsJson: boolean, ok: boolean, message: string, status: number) =>
  wantsJson
    ? json({ success: ok, message }, status)
    : new Response(null, {
        status: 303,
        headers: { Location: `/contact/?${ok ? "sent" : "error"}=1#form-heading` },
      });

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  const wantsJson = (request.headers.get("accept") ?? "").includes("application/json");

  let data: Record<string, unknown>;
  try {
    const type = request.headers.get("content-type") ?? "";
    data = type.includes("application/json")
      ? await request.json()
      : Object.fromEntries(await request.formData());
  } catch {
    return respond(wantsJson, false, "Could not read the message.", 400);
  }

  // Hidden field that people never see. Bots fill it in; we pretend it worked and send nothing.
  if (clean(data._honey, 200)) return respond(wantsJson, true, "Sent.", 200);

  const name = clean(data.name, limits.name);
  const email = clean(data.email, limits.email);
  const phone = clean(data.phone, limits.phone);
  const replyBy = clean(data["reply-by"], limits.replyBy);
  const topic = clean(data.topic, limits.topic);
  const message = clean(data.message, limits.message);

  const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!name || !phone || !topic || !emailLooksValid)
    return respond(wantsJson, false, "Please fill in your name, email, phone and topic.", 400);

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !from) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_FROM is not set.");
    return respond(wantsJson, false, "The form is not set up yet.", 500);
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Prefers to be contacted by: ${replyBy || "Not given"}`,
    `Support with: ${topic}`,
    "",
    message || "(No message)",
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [process.env.CONTACT_TO || DEFAULT_TO],
        reply_to: email,
        subject: "New message from the Hope at Home website",
        text,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      console.error("Contact form: Resend refused the message", response.status, await response.text());
      return respond(wantsJson, false, "The message could not be sent.", 502);
    }
  } catch (error) {
    console.error("Contact form: could not reach Resend", error);
    return respond(wantsJson, false, "The message could not be sent.", 502);
  }

  return respond(wantsJson, true, "Sent.", 200);
}
