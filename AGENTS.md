## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

# Project Context

This is a modern, high-end client website built with Astro.js and Tailwind CSS.

# Design & Styling Rules

- NEVER use generic, outdated Bootstrap-style layouts.
- ALWAYS use Tailwind CSS for styling.
- Focus on stunning, modern UI/UX: generous whitespace (padding/margins), subtle border radiuses (`rounded-xl` or `rounded-2xl`), and high-contrast typography.
- Use modern layout techniques: CSS Grid, Bento-box layouts, and Flexbox.
- Add subtle micro-interactions that only change colour, border or shadow (e.g., `transition-all duration-300 hover:border-zinc-900 hover:shadow-lg`).
- Keep colors cohesive. Neutrals are zinc, surfaces are the client's sage green, and the one accent is the client's pink.
- Only use the named theme colours from `src/styles/global.css` (`bg-page`, `bg-surface`, `bg-tint`, `text-ink`, `text-body`, `text-brand`, `bg-accent`, `border-line`…), never raw palette classes like `bg-white` or `text-zinc-900`, so the light and dark themes both work.
- Fonts: `font-display` (Fraunces) for headings and large figures only; everything else stays in the default Atkinson Hyperlegible.

# Astro Rules

- Use Astro components (`.astro`) for UI structure.
- Keep scripts inside the `---` frontmatter block.
- Ensure pages are fully responsive (mobile-first approach).

# Accessibility Rules

Visitors may have ADHD, anxiety, depression or other cognitive and psychological challenges. These rules come before visual flair.

- No motion: no parallax, scroll-reveal, autoplay, carousels, sticky elements, or anything that moves, scales or follows the cursor.
- One idea per section and one main action per screen. Keep paragraphs to one or two sentences; use lists for anything longer.
- Plain words, sentence-case labels, no all-caps or italic body text. Say what a link or button does ("Opens your email app").
- Keep text at `text-lg` or larger with `leading-relaxed`, and lines to about 65 characters (`max-w-[65ch]`).
- Every interactive target is at least 44px tall (`min-h-11`+). Links are underlined; never rely on colour alone.
- Forms: visible labels above fields, hints instead of placeholders, as few required fields as possible.
- Keep layout and navigation the same on every page. Reuse the shared class strings in `src/data/site.ts`.
- All sizes in `rem` so the Reading settings (text size, spacing) keep working.
