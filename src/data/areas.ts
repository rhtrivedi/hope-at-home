// Areas of care ("Niche"). Drives the homepage tiles, /areas-of-care and /areas-of-care/[niche].
export interface Area {
  slug: string;
  title: string;
  href: string;
  /** Short version for tiles and meta descriptions. */
  summary: string;
  /** Paragraphs for the detail page. The first is the client's own copy; the rest are placeholder drafts. */
  fullDescription: string[];
  /** Placeholder drafts, drawn from the client's copy — to be reviewed by the client. */
  benefits: string[];
  closing: string;
  /** Unsplash photo id — pass to photo() for a wide crop. */
  imageId: string;
  alt: string;
  /** Single word for the oversized background watermark. */
  watermark: string;
}

const entries: Omit<Area, "href">[] = [
  {
    slug: "postpartum",
    title: "Postpartum",
    summary:
      "The journey into motherhood can bring beautiful moments, unexpected emotions, and new challenges. A compassionate, judgment-free space to process your feelings, build confidence, and find balance in this new chapter.",
    fullDescription: [
      "The journey into motherhood can bring beautiful moments, unexpected emotions, and new challenges. Whether you're navigating identity changes, feeling overwhelmed, or adjusting to life with your little one, you deserve support too. We offer a compassionate, judgment-free space to help you process your feelings, build confidence, and find balance in this new chapter of life.",
      "So much attention goes to the baby that it can be easy to lose sight of yourself. Our sessions are a place to set everything down for a moment and talk honestly about how you are really doing — the joy, the exhaustion, and everything in between — at a pace that feels right for you.",
    ],
    benefits: [
      "A judgment-free space to process the feelings that come with new motherhood",
      "Support while you navigate changes in identity, routine, and relationships",
      "Growing confidence in yourself as a parent",
      "Finding balance between caring for your little one and caring for yourself",
    ],
    closing: "You deserve care, too, Mama.",
    imageId: "1555252333-9f8e92e65df9",
    alt: "A newborn's feet wrapped in a soft white blanket",
    watermark: "care",
  },
  {
    slug: "anxiety-depression",
    title: "Anxiety & Depression",
    summary:
      "Feeling overwhelmed, anxious, or unlike yourself? You don't have to face it alone. Explore your feelings, build coping tools, and find your way forward — one step at a time.",
    fullDescription: [
      "Feeling overwhelmed, anxious, or unlike yourself? You don't have to face it alone. We offer a safe, compassionate space to explore your feelings, build coping tools, and find your way forward — one step at a time.",
      "Everyone's story is different, and so is the support they need. Together we'll look at what you are carrying right now, notice what helps and what doesn't, and take things at a pace that never feels rushed.",
    ],
    benefits: [
      "A safe, compassionate space to explore what you're feeling",
      "Practical coping tools you can reach for in everyday life",
      "Support that moves at your pace — one step at a time",
      "Knowing you don't have to face it alone",
    ],
    closing: "You deserve peace and brighter days.",
    imageId: "1499209974431-9dddcece7f88",
    alt: "A person with arms open wide, facing the rising sun",
    watermark: "peace",
  },
  {
    slug: "adhd",
    title: "ADHD",
    summary:
      "When your thoughts are moving in a hundred directions, everyday life can feel overwhelming. Together we'll focus on your strengths and find strategies that work for you.",
    fullDescription: [
      "When your thoughts are moving in a hundred directions, everyday life can feel overwhelming. We are here to offer a calm and supportive space to better understand your experiences and find strategies that work for you. Together, we'll focus on your strengths, build confidence, and make everyday life feel a little more manageable.",
      "There is no single right way to do this. We'll start from what already works for you, try small changes, and keep what fits your life — without judgment along the way.",
    ],
    benefits: [
      "A calm, supportive space to better understand your experiences",
      "Strategies shaped around how you think and live",
      "A focus on your strengths, not just your struggles",
      "Everyday life that feels a little more manageable",
    ],
    closing: "Let's turn challenges into manageable steps.",
    imageId: "1545205597-3d9d02c29597",
    alt: "A small group balancing in a yoga pose on a quiet beach",
    watermark: "steps",
  },
  {
    slug: "couples-counselling",
    title: "Couples Counselling",
    summary:
      "Every relationship has its ups and downs, and sometimes finding your way back to each other takes a little support. A warm space to communicate openly and work through challenges together.",
    fullDescription: [
      "Every relationship has its ups and downs, and sometimes finding your way back to each other takes a little support. We offer a warm, judgment-free space to help you communicate openly, understand each other better, and work through challenges together.",
      "Sessions give you both room to speak and to be heard. We'll slow the conversation down, look at what sits underneath the hard moments, and practise new ways of reaching each other — one conversation at a time.",
    ],
    benefits: [
      "A warm, judgment-free space where both of you are heard",
      "Communicating more openly with each other",
      "Understanding each other's experiences a little better",
      "Working through challenges together, in small steps",
    ],
    closing: "Small steps toward a stronger connection.",
    imageId: "1544027993-37dbfe43562a",
    alt: "Two hands reaching toward each other",
    watermark: "together",
  },
];

export const areas: Area[] = entries.map((area) => ({ ...area, href: `/areas-of-care/${area.slug}` }));
