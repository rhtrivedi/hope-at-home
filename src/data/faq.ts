// DRAFT COPY — written by the developer from facts in the client's deck. To be reviewed and corrected by the client.
// Nothing here states a policy the client has not given us (see the open questions at the bottom).
import { hours, languages, phone, services } from "./site";

const openHours = hours.map((slot) => `${slot.days}, ${slot.time}`).join(". ");
const prices = services.map((service) => `${service.title}: $${service.price}`).join(". ");

export const steps = [
  {
    title: "Reach out",
    body: "Send a message, call, or email. A sentence or two is plenty. You don't need to explain everything.",
  },
  {
    title: "We find a time",
    body: `We pick a time that suits you. We are open ${hours.map((slot) => `${slot.days}, ${slot.time}`).join(", and ")}.`,
  },
  {
    title: "We talk",
    body: "Each session is 50 minutes. You can simply be yourself, feel heard, and take things one step at a time.",
  },
];

export interface Faq {
  question: string;
  answer: string;
  link?: { label: string; href: string };
}

export const faqs: Faq[] = [
  {
    question: "What if I don't know what to say?",
    answer: "That is okay. You don't need to have the right words, or know exactly what you need. We can work it out together, at your pace.",
  },
  {
    question: "How long is a session?",
    answer: "Every session is 50 minutes.",
  },
  {
    question: "How much does it cost?",
    answer: `${prices}. Each price is for one 50-minute session.`,
  },
  {
    question: "Can I use my insurance?",
    answer:
      "Many major insurance providers cover our services. We are also registered with the Non-Insured Health Benefits (NIHB) program and the Victim Quick Response Program+ (VQRP+). Coverage varies by plan, so please check with your insurance provider first.",
    link: { label: "See the list of insurers", href: "/services/insurance" },
  },
  {
    question: "Which languages can we speak in?",
    answer: `${languages.join(", ").replace(/, ([^,]*)$/, " or $1")}. Choose the one you are most comfortable in.`,
  },
  {
    question: "When are you open?",
    answer: `${openHours}.`,
  },
  {
    question: "How do I get in touch?",
    answer: `Call ${phone.label}, send an email, or fill in the short form on the Contact page. Choose whichever feels easiest.`,
    link: { label: "Go to the Contact page", href: "/contact" },
  },
];

// Open questions for the client — add each to `faqs` once she has answered:
// - Are sessions in person, online, by phone, or a mix? Where is the office?
// - What is the cancellation or rescheduling policy?
// - How is privacy and confidentiality handled?
// - Is a doctor's referral needed?
// - How do parents arrange counselling for a child or teen?
