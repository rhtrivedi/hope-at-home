// Site-wide details shared by the header, footer and pages.
export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Niche", href: "/areas-of-care" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export const phone = { label: "519-701-5740", href: "tel:+15197015740" };
export const email = "therapistkunjalbhatt@gmail.com";

// TODO: replace with Kunjal's Psychology Today profile URL.
export const psychologyTodayUrl = "https://www.psychologytoday.com/ca";

export const hours = [
  { days: "Monday – Friday", time: "9:00 AM – 9:00 PM" },
  { days: "Saturday", time: "9:00 AM – 5:00 PM" },
];

// Unsplash placeholders — swap for the client's own photography before launch.
// Every image on the site is cropped wide: 16:9 by default, 21:9 for cinematic banners.
const ratios = { "16:9": 9 / 16, "21:9": 9 / 21 };

export const photo = (id: string, width: number, ratio: keyof typeof ratios = "16:9") =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${Math.round(width * ratios[ratio])}&q=75`;

export const services = [
  {
    title: "Child & Youth Counselling",
    tagline: "Little hearts need support too",
    price: 120,
    blurb: "A gentle space for children and teens to feel heard and take things one step at a time.",
    image: photo("1531983412531-1f49a365ffed", 960),
    alt: "A parent holding a smiling child by the sea",
  },
  {
    title: "Individual Counselling",
    tagline: "A space just for you",
    price: 150,
    blurb: "One-to-one support to explore your feelings, build coping tools, and find your way forward.",
    image: photo("1506126613408-eca07ce68773", 960),
    alt: "A person sitting calmly, looking out over trees at sunrise",
  },
  {
    title: "Couples Counselling",
    tagline: "Reconnect, one conversation at a time",
    price: 180,
    blurb: "A warm space to communicate openly, understand each other better, and work through challenges together.",
    image: photo("1474552226712-ac0f0961a954", 960),
    alt: "A couple holding hands at sunset",
  },
];

// Shared class strings.
export const card = "reveal rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg";
export const eyebrow = "text-xs font-semibold uppercase tracking-[0.2em] text-rose-600";
export const parallaxImage = "size-full scale-[1.2] object-cover";
