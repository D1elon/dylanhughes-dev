# Maintainer notes

## Files in detail

- `index.html`: introduction and dot-matrix display, selected work, about, skills, experience, contact
- `work/deadbounce.html`: Deadbounce case study, with Deadbounce's own logo animation beside its title
- `work/tip-top-pinball.html`: Tip Top Pinball case study, with a before-and-after comparison
- `work/sonic-slings.html`: Sonic Pinball Slings case study: looping films of the assembly, the box and a turntable (`assets/video/`, WebM first, each playing only while on screen, with a pause button, and held on its poster with reduced motion), renders and drawings on light plates, a list of the six versions, and the two guides (`assets/docs/`)
- `404.html`: not-found page, served by GitHub Pages for any missing URL
- `js/site.js`: navigation, clock, copy-email, comparison slider and all scroll motion. The page's intro is CSS, so it starts with the first paint and doesn't wait for the animation libraries.
- `js/pixels.js`: the page change into a case study. A short script in each case study's head draws the first frame in CSS, so the hand-over doesn't show. With reduced motion it stays an ordinary link.
- `js/vendor/`: GSAP 3.15 with ScrollTrigger and SplitText, and Lenis 1.3 for inertial scrolling
- `_config.yml`: keeps the tooling, the package files, the docs and the README out of what GitHub Pages publishes
- `CNAME`, `robots.txt` and `sitemap.xml`: domain and search-engine configuration

## Design tokens

All of them are at the top of `css/site.css`.

- **Royal blue** `#2B59FF` (`--royal`) fills LEDs, the focus ring, selection, primary buttons, and lit and active states. White text on it passes AA (5.3:1). As text, blue takes `#6E8CFF` (`--royal-soft`, `--royal-ink`), so small blue text always passes on black.
- **Black:** page `#06070A`, panels `#0B0C0F`, bands `#101216`, raised `#14161A`, rules `#262A31`, title-block hairlines at 30% white; text `#F4F5F7`, muted `#9AA1AB` (7.7:1).
- **Archivo** for display, in one style (108% width, weight 650, -0.03em) at five sizes, `--d-xl` to `--d-xs`.
- **Instrument Sans** for text: `--t-lede`, `--t-body` and `--t-small`.
- **Martian Mono** only for small technical labels: 11px (`--t-label`), uppercase, 0.08em tracking.

## Adding a project

1. Copy `work/tip-top-pinball.html` to `work/<project>.html` and replace its content. Give the hero image a unique `view-transition-name` (see `.vt-tiptop` in `css/site.css`) so it morphs from the home page.
2. Add an `<article class="station">` for it in the Work section of `index.html`.
3. Add WebP and JPEG images to `assets/img/` with `width` and `height` set on every `<img>`. Re-encode photos on the way in, so they carry no location or camera data.
4. Add the page to `sitemap.xml`.

## Display text

Each glyph in `js/dmd-glyphs.js` is a list of rows where `#` is a lit dot: a 5 × 7 face for small text and a 12-dot face with two-dot strokes for headline words. Any text made of the characters defined there can go straight into a scene in `js/dmd.js`; add a glyph to the font first if a scene needs a new character.

## Résumé updates

The PDF is printed from `tools/resume.html`, which says what the site says: the same positioning, roles and dates, and the skills under the site's four kinds of work. Edit the source, run `npm run resume` (it needs Playwright's Chromium; or print the page from a browser at US Letter with no margins and background graphics on), check it still fits one page, and keep the experience, skills and education in `index.html` in step with it.
