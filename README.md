# Abraham Tariku — Portfolio Site

A personal portfolio site for Abraham Tariku (brand/graphic/social designer, Addis Ababa). Built as static HTML/CSS/JS — no build step, no framework — from the design handoff in [`design-reference/`](design-reference/).

**Live pages:**
- `index.html` — single-page marketing home
- `case-study.html?project=<slug>` — repeating case-study template, one per branding project

## Structure

```
index.html            Landing page markup
case-study.html        Case-study template (reads ?project= from the URL)
css/styles.css         All styling — theme tokens as CSS custom properties
js/data.js              Content: work items, timeline, skills, testimonials, case-study projects
js/main.js              Landing page behavior (theme toggle, tab filtering, reveal-on-scroll, marquee)
js/case-study.js        Case-study page behavior (project lookup, gallery, next-project cycle)
assets/                 Images, logos, resume PDF
design-reference/       Original design-handoff prototypes (source of truth for visual spec)
```

## Running locally

Static files — serve the folder with anything, e.g.:

```
npx serve .
# or
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Notes on fidelity vs. the design handoff

- Colors, type, spacing, and interaction timing follow `design-reference/HANDOFF.md` and the `.dc.html` prototypes pixel-for-pixel.
- Theme choice now **persists** via `localStorage` (the prototype only held it for the session).
- Work items and case studies without a supplied image asset (Lencho Stone Crusher, all Social Media / Print & Editorial / Brand Applications-minus-uniform / Interior Design items, and most case-study gallery slots) render a styled placeholder tile rather than a prototype "drop zone" — swap in real assets by adding an image path in `js/data.js`.
- The case-study "next project" cycle covers all 7 projects with `hasCaseStudy: true` (including the AHG Sales Uniform, which the original handoff doc flagged as not yet wired into the cycle — it's included here since the prototype's own code already covered it).
- No CMS/data layer yet — project content lives in `js/data.js`. Swapping in a headless CMS later means replacing that file's exports with fetched data.
