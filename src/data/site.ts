// Site-wide details shared by the header, footer and pages.
export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Areas of Care", href: "/areas-of-care" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export const phone = { label: "519-701-5740", href: "tel:+15197015740" };
export const email = "therapistkunjalbhatt@gmail.com";

// Contact form messages are delivered by FormSubmit (formsubmit.co) to this inbox.
// TODO: temporary developer inbox — replace with the client's address before launch.
// The first message sent to a new address triggers a one-time activation email that must be confirmed.
export const formRecipient = "rhtrivedi92@outlook.com";
export const formEndpoint = `https://formsubmit.co/${formRecipient}`;
export const formAjaxEndpoint = `https://formsubmit.co/ajax/${formRecipient}`;

// TODO: replace with Kunjal's Psychology Today profile URL.
export const psychologyTodayUrl = "https://www.psychologytoday.com/ca";

export const hours = [
  { days: "Monday to Friday", time: "9:00 AM to 9:00 PM" },
  { days: "Saturday", time: "9:00 AM to 5:00 PM" },
];

export const languages = ["English", "Hindi", "Gujarati"];

export const services = [
  {
    title: "Child & Youth Counselling",
    tagline: "Little hearts need support too",
    price: 120,
    blurb: "A gentle space for children and teens to feel heard and take things one step at a time.",
  },
  {
    title: "Individual Counselling",
    tagline: "A space just for you",
    price: 150,
    blurb: "One-to-one support to explore your feelings, build coping tools, and find your way forward.",
  },
  {
    title: "Couples Counselling",
    tagline: "Reconnect, one conversation at a time",
    price: 180,
    blurb: "A warm space to communicate openly, understand each other better, and work through challenges together.",
  },
];

// Shared class strings. Nothing here moves, scales or animates in: hover and focus only change colour, border or shadow.
export const container = "mx-auto w-full max-w-5xl px-5 sm:px-8";
export const eyebrow = "text-base font-bold text-brand";
export const h1 = "font-display text-5xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-6xl";
export const h2 = "font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl";
export const h3 = "font-display text-2xl font-semibold leading-snug text-ink";
// Prices, phone numbers and other figures shown large.
export const figure = "font-display font-semibold text-ink";
// Short lines (about 65 characters) and short paragraphs are easier to keep your place in.
export const prose = "max-w-[65ch] space-y-4 text-lg leading-relaxed text-body";

const button =
  "inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-ink px-7 py-3 text-center text-lg font-bold transition-all duration-300 hover:shadow-lg";
export const buttonPrimary = `${button} bg-accent text-on-accent hover:bg-accent-strong`;
export const buttonSecondary = `${button} bg-surface text-ink hover:bg-tint`;

export const card = "rounded-2xl border-2 border-line bg-surface p-6 sm:p-8";
export const cardLink = `${card} group flex flex-col transition-all duration-300 hover:border-ink hover:shadow-lg`;
export const textLink =
  "rounded font-bold text-ink underline decoration-2 underline-offset-4 transition-colors duration-300 hover:bg-accent hover:text-on-accent";
