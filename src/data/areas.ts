// Areas of care. Drives the homepage cards, /areas-of-care and /areas-of-care/[niche].
export interface Area {
  slug: string;
  title: string;
  href: string;
  /** One short line for cards and meta descriptions. */
  short: string;
  /** The client's own copy (email, October 2026), split into short paragraphs so each one holds a single idea.
   *  Only clear spelling and grammar slips were corrected. */
  paragraphs: string[];
  /** Placeholder drafts, drawn from the client's copy — to be reviewed by the client. */
  benefits: string[];
  closing: string;
}

const entries: Omit<Area, "href">[] = [
  {
    slug: "postpartum",
    title: "Postpartum",
    short: "Support while you adjust to life with your little one.",
    paragraphs: [
      "The journey into motherhood can bring beautiful moments, unexpected emotions, and new challenges.",
      "Whether you're navigating identity changes, feeling overwhelmed, or adjusting to life with your little one, you deserve support too.",
      "Let us support you as you process your feelings, build confidence, and find balance in this new chapter of life.",
    ],
    benefits: [
      "A judgment-free space to process the feelings that come with new motherhood",
      "Support while you navigate changes in identity, routine, and relationships",
      "Growing confidence in yourself as a parent",
      "Finding balance between caring for your little one and caring for yourself",
    ],
    closing: "You deserve care, too, Mama.",
  },
  {
    slug: "anxiety-depression",
    title: "Anxiety & Depression",
    short: "For when you feel overwhelmed, anxious, or unlike yourself.",
    paragraphs: [
      "Feeling overwhelmed, anxious, or unlike yourself? You don't have to face it alone.",
      "We can walk alongside you and provide a safe, compassionate space to explore your feelings, build coping tools, and find your way forward — one step at a time.",
    ],
    benefits: [
      "A safe, compassionate space to explore what you're feeling",
      "Practical coping tools you can reach for in everyday life",
      "Support that moves at your pace — one step at a time",
      "Knowing you don't have to face it alone",
    ],
    closing: "You deserve peace and brighter days.",
  },
  {
    slug: "adhd",
    title: "ADHD",
    short: "For when your thoughts are moving in a hundred directions.",
    paragraphs: [
      "When your thoughts are moving in a hundred directions, everyday life can feel overwhelming.",
      "We are here to offer a calm and supportive space to better understand your experiences and find strategies that work for you.",
      "Together, we'll focus on your strengths, build confidence, and make everyday life feel a little more manageable.",
    ],
    benefits: [
      "A calm, supportive space to better understand your experiences",
      "Strategies shaped around how you think and live",
      "A focus on your strengths, not just your struggles",
      "Everyday life that feels a little more manageable",
    ],
    closing: "Let's turn challenges into manageable steps.",
  },
  {
    slug: "couples-counselling",
    title: "Couples Counselling",
    short: "Help to find your way back to each other.",
    paragraphs: [
      "Every relationship has its ups and downs, and sometimes finding your way back to each other takes a little support.",
      "We will help you communicate openly, understand each other better, and work through challenges together.",
    ],
    benefits: [
      "A warm, judgment-free space where both of you are heard",
      "Communicating more openly with each other",
      "Understanding each other's experiences a little better",
      "Working through challenges together, in small steps",
    ],
    closing: "Small steps toward a stronger connection.",
  },
  {
    slug: "parent-coaching",
    title: "Parent Coaching",
    short: "For when parenting leaves you feeling overwhelmed or unsure.",
    paragraphs: [
      "Raising children is one of life's most rewarding journeys, but it also comes with unique challenges that can leave you feeling overwhelmed or unsure.",
      "We offer a supportive, judgment-free space to help you navigate behavioural hurdles, build practical routine strategies, and confidently manage the daily stresses of parenting.",
    ],
    benefits: [
      "A supportive, judgment-free space to talk about parenting",
      "Help with behavioural hurdles",
      "Practical routine strategies that fit your family",
      "More confidence with the daily stresses of parenting",
    ],
    closing: "A change towards a more peaceful home.",
  },
  {
    slug: "emotional-regulation",
    title: "Emotional Regulation",
    short: "For when emotions feel too intense or unpredictable.",
    paragraphs: [
      "When emotions feel too intense or unpredictable, it can be exhausting to navigate the daily highs and lows on your own.",
      "We can help you make sense of overwhelming feelings, quiet the internal noise, and build healthy ways to respond rather than react.",
    ],
    benefits: [
      "Making sense of overwhelming feelings",
      "Quieting the internal noise",
      "Healthy ways to respond rather than react",
      "Support with the daily highs and lows, so you are not on your own",
    ],
    closing: "A journey towards a more peaceful mind.",
  },
  {
    slug: "work-related-stress",
    title: "Work-Related Stress",
    short: "For when work begins to overshadow your well-being.",
    paragraphs: [
      "When the demands of your career begin to overshadow your well-being, the line between living and just surviving starts to blur.",
      "Get support in a focused, restorative environment where you can break the cycle of chronic exhaustion, establish firm professional limits, and protect your mental space.",
    ],
    benefits: [
      "A focused, restorative space away from work",
      "Breaking the cycle of chronic exhaustion",
      "Setting firm professional limits",
      "Protecting your mental space",
    ],
    closing: "A way to a more balanced life.",
  },
  {
    slug: "trauma-healing",
    title: "Trauma Healing",
    short: "For when painful past experiences still echo in your present.",
    paragraphs: [
      "When past painful experiences continue to echo in your present, it can feel like you are constantly on guard, stuck in survival mode, or disconnected from the world around you.",
      "We provide a gentle, deeply respectful environment where you can safely process old wounds, release the heavy weight of the past, and gently piece yourself back together.",
    ],
    benefits: [
      "A gentle, deeply respectful space",
      "Safely processing old wounds, at your pace",
      "Releasing the heavy weight of the past",
      "Small steps toward feeling safer and freer",
    ],
    closing: "Small steps toward a safer, freer life.",
  },
];

export const areas: Area[] = entries.map((area) => ({ ...area, href: `/areas-of-care/${area.slug}` }));
