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
- Add subtle micro-interactions (e.g., `transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`).
- Keep colors cohesive. Use Tailwind's slate or zinc for neutrals, and pick one vibrant primary accent color.

# Astro Rules

- Use Astro components (`.astro`) for UI structure.
- Keep scripts inside the `---` frontmatter block.
- Ensure pages are fully responsive (mobile-first approach).
