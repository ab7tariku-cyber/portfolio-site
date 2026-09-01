# Handoff: Design & Destiny — Abraham Tariku Portfolio Site

## Overview
A personal portfolio site for Abraham Tariku (brand/graphic/social designer, Addis Ababa). Two page types: a single-page marketing home (`Design & Destiny Landing.dc.html`) and a repeating case-study template (`Case Study.dc.html`) driven by a `?project=<slug>` query param.

## About the Design Files
The files in this bundle are **design references built as interactive HTML prototypes** — they show the intended look, layout, copy, and interaction behavior (hover states, tab filtering, theme toggle, image drop zones), but are not production code to import directly. The task is to **recreate these designs in whatever framework you choose for the real site** (plain HTML/CSS/JS, React/Next.js, Astro, etc. — there is no existing codebase constraint here), reproducing the same visual system and behavior with production-quality code, real image assets, and a proper CMS/data layer for project content instead of drag-and-drop placeholders.

## Fidelity
**High-fidelity.** Colors, type, spacing, and interaction timing below are the real, final values from the prototype — implement pixel-for-pixel.

## Global Design Tokens

**Fonts** (Google Fonts): `Montserrat` (400/500/600/700/800) for headings/UI, `Space Mono` (400/700) for uppercase labels/eyebrow text/mono accents.

**Theme**: supports dark (default) and light, toggled by a nav switch. Values:
| Token | Dark | Light |
|---|---|---|
| Background | `linear-gradient(160deg, #000 0%, #05070f 45%, #0a1730 100%)` | `linear-gradient(160deg, #fff 0%, #f2f6fd 50%, #e6eefb 100%)` |
| Text primary | `#f2f0fb` | `#0a0e1a` |
| Text secondary | `#8b93ab` | `#4a5568` |
| Nav bg | `rgba(0,0,0,0.72)` blur 14px | `rgba(255,255,255,0.78)` blur 14px |
| Divider | `rgba(255,255,255,0.1)` | `rgba(10,20,40,0.12)` |
| Card bg | `rgba(255,255,255,0.04)` | `rgba(10,20,40,0.03)` |
| Card border | `rgba(255,255,255,0.09)` | `rgba(10,20,40,0.1)` |

**Accent color**: `#7ca8ff` default (tweakable; other brand options used elsewhere: `#4f8cff`, `#8b93ab`, `#ffffff`). Accent text pairs with dark ink (`#170a2e` or `#0a0e1a`) for contrast on filled buttons/pills.

**Radii**: pills/buttons `999px`; "stadium" accent chips use an asymmetric `10px 2px 10px 2px` (or mirrored `2px 10px 2px 10px`); cards `16px`; guarantee card `24px`; case-study gallery tiles `8px`.

**Spacing**: page gutters `clamp(20px, 5vw, 64px)`; section vertical padding `clamp(48px, 8vw, 96px)`; content max-width `1160px` (`900px` for the guarantee card).

## Screens / Views

### 1. Landing Page (`Design & Destiny Landing.dc.html`)

**Nav** (sticky, blurred): wordmark "ABRAHAM.TARIKU" (accent-colored period) left; right-aligned links Work/About/How I work/Contact/Resume (opens PDF in new tab), a dark/light toggle pill switch (44×24px track, 18px dot sliding left/right), and an accent "Book a call" pill button linking to `#contact`.

**Hero** (min-height 82vh): two-column grid (1.05fr / 1fr).
- Left: eyebrow "Brand, graphic & social design — Addis Ababa" (Space Mono, uppercase, 3px letter-spacing); H1 "ABRAHAM / TARIKU" (Montserrat 700, `clamp(38px,7.4vw,84px)`, line-height 0.98, -1px letter-spacing); intro paragraph (max-width 500px); two CTA buttons ("Book a 15-min intro call" filled accent pill, "See my work" outlined pill); a stat row (3 stats: "20+ Projects delivered", "4.9/5 Client rating", "10 Day Avg turnaround") above a divider.
- Right: square photo (max 620px) in a rounded-20px frame, with a smaller accent-colored square (24px radius, 90% opacity) positioned behind/below it flush to the bottom edge (photo overlaps it). Four floating pill tags around the photo, each linking to `#work` and switching the active work tab on click: "Brand Design" (top-left), "Graphic Design" (mid-right), "Social Media" (bottom-left), "Marketing" (bottom-right) — each with a subtle independent float animation (6-7.5s ease-in-out loops).
- Decorative tile-pattern image bleeds off the top-right corner, radial-mask faded, slow drift animation.
- "Scroll" indicator bottom-center, Space Mono uppercase, bounce animation.

**Trusted-by marquee**: infinite horizontal auto-scroll (26s linear) of 6 client logos, doubled for seamless loop; logos are inverted to white in dark mode via `filter: brightness(0) invert(1)`.

**About** (`#about`): two-column grid (1.15fr/1fr).
- Left "Experience": vertical timeline — year (mono) / accent dot + connecting line / org name (bold) + role, no location. 4 entries, most recent first: Present–HALE Inclusive Network (Digital Media Head & Social Media Manager), 2024–Independent/Freelance (Brand & Graphic Designer), 2023–Great Commission Ministry Ethiopia (Digital Strategy Intern), 2022–African Holding Group (Marketing Officer).
- Right "Skills": 4 wrapping pill chips (Logo & mark design, Brand identity systems, Social media & print graphics, Signage & merchandise) — fill accent + dark text on hover. "Tools": one row, 4 items left-aligned (Ai/Ps/Id/Pr — Illustrator, Photoshop, InDesign, Premiere), each a 56×56px rounded-14px badge with 2-letter code, label centered below; on hover the badge lifts (`translateY(-4px) scale(1.06)`) and fills accent.

**Work** (`#work`): eyebrow "Selected work" + H2 "A collection of my previous work." Centered wrapping tab row — 5 tabs: **Brand Identity**, **Social Media**, **Print & Editorial**, **Brand Applications**, **Interior Design & Visualization** (active tab filled accent pill w/ dark text; inactive outlined in accent at 40% opacity). Below, a responsive 2-column grid of square (1:1) cards for the active tab's items. Each card: full-bleed image (or empty drop placeholder), on hover: image scales to 1.06, an accent multiply-wash overlay fades in, a bottom-to-top gradient darkens the base, an accent bar (52px tall) slides up from the bottom edge, and the project name lifts 4px and switches from white to dark ink. Cards for projects with `hasCaseStudy: true` link to `Case Study.dc.html?project=<slug>`; others are static (no link, default cursor).

Work items by tab:
- *Brand Identity* (has case studies): Nubia Designs (Charity), Godo Properties (Real Estate), Covenant Generation Church (Faith), LHC (Charity), HALE HRIN (Human Rights), Lencho Stone Crusher (Industrial).
- *Social Media*: Yotor Marketing, Gara Missional Bootcamp, Peace Campaign, HU Fellow Works.
- *Print & Editorial*: African Holding Group — General Assembly, Purity Magazine.
- *Brand Applications*: African Holding Group — Stationery, African Holding Group — Sales Uniform (has case study).
- *Interior Design & Visualization* (new, placeholders — no images supplied yet): Residential Living Room, Modern Kitchen Concept, Boutique Office Space, Hospitality Lounge.

**How I work / Guarantee** (`#guarantee`): bordered rounded card (accent border @35% opacity, accent tint bg @5%) — eyebrow, H2 "Every project starts risk-free.", 3 bullet rows (stadium-shaped accent icon bar + title + body): Free discovery sprint, Pay after the first concept, Unlimited revisions in scope.

**Testimonials**: eyebrow "What clients say" + H2. Auto-fit grid (min 260px) of quote cards (card bg/border, 16px radius): 3 quotes from Bethelhem G. (Nubia Designs), Yonas M. (HALE), Selam T. (HUSU) — each with a gradient avatar circle, name, role.

**Final CTA** (`#contact`): "● Currently taking new projects" pulse-dot pill, H2 "Let's see if we're a fit.", accent CTA button ("Book a 15-min intro call" → `mailto:`), email + phone links below.

**Footer**: wordmark + 3 social icon circles (Telegram, LinkedIn, Behance — inline SVGs, open in new tab); divider; email/phone/Resume links left, "Based in Addis Ababa — available worldwide" right. Decorative rotated tile-pattern bleeds off bottom-left corner.

**Scroll-reveal**: each major section fades/slides up (24px, 0.7s ease) the first time it enters viewport (IntersectionObserver, threshold 0.15), unless animations are disabled.

### 2. Case Study Page (`Case Study.dc.html`)

Single template parameterized by `?project=<slug>` (falls back to `lhc` if missing/invalid). Same nav pattern minus the full link set — just wordmark + "← All work" back link to the landing page's `#work` anchor.

- **Hero image**: full-bleed, fixed **4253:2340** aspect ratio, `object-fit: cover`, no text overlay.
- **About the brand**: eyebrow row "Brand — {name}" / "Type — {category}", H2 headline, two body paragraphs (overview1/overview2).
- **Gallery**: single full-width column, 13 slots, each also at 4253:2340 aspect ratio, 8px radius, `clamp(16px,3vw,28px)` gap between.
- **CTA band**: centered "Ready to give your brand an identity like this?" + "Let's collaborate →" button (`mailto:`).
- **Next project**: full-width image band (`clamp(280px,44vw,460px)` tall) showing the *next* project's hero image with a dark bottom gradient and centered "Next project" label + project name + arrow; links to that project's case study. Cycles through all case-study projects in list order, wrapping to the first after the last.

Project list (6 case studies, in cycle order): HALE HRIN, Lencho Stone Crusher, Nubia Designs, Godo Properties, LHC, Covenant Generation Church. (African Holding Group — Sales Uniform also has `hasCaseStudy: true` on the landing page but is not yet in the case-study `PROJECT_LIST` cycle — carry this over or reconcile when rebuilding.)

## Interactions & Behavior
- **Tab filtering**: clicking a work tab sets active category client-side; no page reload.
- **Theme toggle**: dark/light state switches all color tokens with a 0.4s ease crossfade; persists only for the session in the prototype (no localStorage) — consider persisting in the real build.
- **Hover states**: work cards (scale/overlay/accent-bar/label as described above), skill chips, tool badges, nav "Book a call"/CTA buttons (opacity 0.85 on hover), footer social icons (border+icon turn accent).
- **Marquee**: pure CSS `translateX` loop, no JS, `26s linear infinite`.
- **Scroll reveal**: IntersectionObserver per section, one-shot (unobserves after first reveal).
- **Responsive**: single `max-width: 720px` breakpoint tracked in state for potential mobile-specific behavior; most layout responsiveness comes from `clamp()` and grid `auto-fit`/`repeat(2,1fr)` — the work grid stays 2-column even on mobile per the current design (confirm with client if a 1-column mobile layout is wanted).

## State Management
- `activeTab` — current work-section filter category.
- `theme` — 'dark' | 'light'.
- `hoveredWork` / `hoveredSkill` / `hoveredTool` — hover-tracked ids for the respective hover treatments.
- `revealed` — set of section keys already animated in.
- Case-study page: `slug` derived from the URL query string on mount.

## Assets
Located in `assets/` (copied into this bundle):
- `abraham-photo.png` — hero portrait.
- `hero-nubia.jpg`, `hero-godo.jpg`, `hero-covenant.jpg`, `hero-lhc.jpg`, `hero-hale.jpg` — brand-identity work thumbnails (Lencho Stone Crusher currently has no thumbnail asset — uses the drop-placeholder).
- `work-uniform.jpg`, `uniform-detail-1/2/3.jpg` — AHG Sales Uniform work.
- `tlogo-01..06.png` — trusted-by client logos.
- `tile-pattern.png` — decorative corner pattern (hero + footer).
- `logo-wordmark.png` — unused mark, included for reference.
- `Abraham Tariku Resume.pdf` — linked from nav/footer.

Additional case-study gallery mockups and hero images the client has been dropping in via the prototype's drag-and-drop tool live in `uploads/` and in the prototype's internal image sidecar (not portable JSON — re-export/re-upload these as real files into your asset pipeline; don't rely on the sidecar format). Ask the client for the original hi-res files if available rather than re-exporting from the prototype's compressed copies (images are auto-compressed to max 1200px WebP in the prototype, which is lossier than the source).

Icons: Telegram/LinkedIn/Behance are hand-authored inline SVGs (paths included in the JS above) — fine to keep as inline SVG or swap for an icon library.

## Files
- `Design & Destiny Landing.dc.html` — home page prototype (source of truth for the above).
- `Case Study.dc.html` — case-study template prototype.
- `assets/` — image/PDF assets referenced by both pages.
