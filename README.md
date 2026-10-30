# dylanhughes.dev

Portfolio for Dylan Hughes, creative technologist and developer in Richmond, Virginia. Static HTML, CSS and JavaScript with no build step; fonts and animation libraries are self-hosted.

## Structure

- `index.html`: introduction and dot-matrix display, selected work, about, skills, experience, contact
- `work/tip-top-pinball.html`: Tip Top Pinball case study, with a before-and-after comparison
- `work/stall-brawl.html`: redirect to Work until the rethemed Stall Brawl case study is ready
- `404.html`: not-found page, served by GitHub Pages for any missing URL
- `css/site.css`: the whole design system (tokens at the top)
- `js/site.js`: navigation, clock, copy-email, comparison slider and all scroll motion
- `js/dmd.js` and `js/dmd-glyphs.js`: the 128 × 32 pinball dot-matrix display and its hand-drawn bitmap fonts
- `js/vendor/`: GSAP 3.15 with ScrollTrigger and SplitText, and Lenis 1.3 for inertial scrolling
- `fonts/`: Archivo (headlines), Instrument Sans (body), Martian Mono (labels)
- `assets/`: résumé PDF, favicon, social share image (`og.png`) and photographs
- `CNAME`, `robots.txt` and `sitemap.xml`: domain and search-engine configuration

Only original work and client work is published here. Retheme projects built on licensed properties (Zelda, Marvel, Pokémon and similar) stay out of the repository, because GitHub Pages serves every committed file, linked or not.

## Design

Brushed-aluminium greys and graphite, cabinet-black bands for work and contact, and a single plasma orange taken from the dot-matrix display. Headlines are expanded Archivo, body text is Instrument Sans, and small spec labels are Martian Mono.

The display in the hero is the signature: an attract-mode loop of four scenes (name, what I build, a game of pinball, Richmond and the local time) with plasma persistence and pixel-dissolve transitions. Visitors can pause it or step through scenes. The 404 page reuses it to show TILT.

## Adding a project

1. Copy `work/tip-top-pinball.html` to `work/<project>.html` and replace its content. Give the hero image a unique `view-transition-name` (see `.vt-tiptop` in `css/site.css`) so it morphs from the home page.
2. Add an `<article class="case">` for it in the Work section of `index.html`.
3. Add WebP and JPEG images to `assets/img/` with `width` and `height` set on every `<img>`.
4. Add the page to `sitemap.xml`.

## Motion and accessibility

All content and navigation work without JavaScript. Motion runs only when the visitor has not asked for reduced motion; otherwise the display shows still frames, smooth scrolling is off and nothing animates. Line splits wait for the fonts and are removed after each animation so text reflows normally. The display pauses when off screen or in a background tab. axe reports no WCAG 2.1 AA violations on any page.

## Local preview

Pages use root-relative paths, so serve the repository root:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

## Display text

The display uses two bitmap fonts drawn dot by dot in `js/dmd-glyphs.js`, the way pinball displays were lettered: a 5 × 7 face for small text and a 12-dot face with two-dot strokes for headline words. Each glyph is a list of rows where `#` is a lit dot. Any text made of the characters defined there can go straight into a scene in `js/dmd.js`; add a glyph to the font first if a scene needs a new character.

## Résumé updates

The PDF is the approved revised résumé, not a generated copy of site HTML. When it changes, replace `assets/dylan-hughes-resume.pdf` and align the experience, skills and education in `index.html`.

## Deployment

GitHub Pages serves the root of `main` at `https://dylanhughes.dev/`. The `CNAME` file holds the custom domain. Pushing to `main` triggers the Pages build.
