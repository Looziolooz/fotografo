<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Design System
Always read `DESIGN.md` before making any visual or UI decisions. All font choices, colors, spacing, motion, and aesthetic direction are defined there. Do not deviate without explicit user approval.

Forbidden patterns (verified absent, do not re-introduce):
- Pure `#000` / `#fff` — use OKLCH tokens (`--text`, `--bg`, `--on-dark`).
- Em-dashes `—` in copy — use commas, colons, periods, or parentheses.
- Inter / Roboto / Poppins / Space Grotesk / system-ui as primary display/body.
- Side-stripe borders >1px, gradient text via background-clip, decorative glassmorphism.
- 3-column icon-in-colored-circle feature grids.

In QA/review mode, flag any code that doesn't match DESIGN.md.
