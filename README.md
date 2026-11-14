# dylanhughes.dev

Portfolio for Dylan Hughes, creative technologist and developer in Richmond, Virginia. The site is static HTML, CSS and JavaScript in the dark of a pinball machine's cabinet, with a dot-matrix display in the hero; fonts and animation libraries are self-hosted. A 3D pinball machine version of the home page is built and kept in the repository for later, switched off on the published site (see below). Only the 3D machine has a build step.

## Structure

- `index.html`: introduction and dot-matrix display, selected work, about, skills, experience, contact. The same HTML is the 2D home page and the 3D machine's copy.
- `work/deadbounce.html`: Deadbounce case study, with Deadbounce's own logo animation beside its title
- `work/tip-top-pinball.html`: Tip Top Pinball case study, with a before-and-after comparison
- `work/sonic-slings.html`: Sonic Pinball Slings case study, a 3D printed product: looping films of the assembly, the box and a turntable (`assets/video/`, WebM first, each playing only while on screen, with a pause button, and held on its poster with reduced motion), renders and drawings on light plates, a list of the six versions, and the two printed guides (`assets/docs/`)
- `work/stall-brawl.html`: redirect to Work until the rethemed Stall Brawl case study is ready
- `404.html`: not-found page, served by GitHub Pages for any missing URL
- `css/site.css`: the whole design system (tokens at the top)
- `js/site.js`: navigation, clock, copy-email, comparison slider and all scroll motion. The page's intro is CSS (`css/site.css`), so it starts with the first paint and doesn't wait for the animation libraries.
- `js/pixels.js`: the page change into a case study. The page frosts over like glass under a wave of dot-matrix pixels; the case study's name lights up in the display's lettering, then the dots open outward and the page is built out of them. A short script in each case study's head draws the first frame in CSS, so the hand-over doesn't show. With reduced motion it stays an ordinary link.
- `js/dmd.js` and `js/dmd-glyphs.js`: the 128 × 32 pinball dot-matrix display and its hand-drawn bitmap fonts
- `js/machine.js`: the 3D machine, bundled from `src/machine/` (see below). Commit it after every change to the source.
- `src/machine/`: the machine's source, and `tools/build-machine.mjs`, its build script
- `js/vendor/`: GSAP 3.15 with ScrollTrigger and SplitText, and Lenis 1.3 for inertial scrolling
- `fonts/`: Archivo (headlines), Instrument Sans (body), Martian Mono (labels)
- `assets/`: résumé PDF, favicon, social share image (`og.jpg`), touch and manifest icons and photographs
- `tools/resume.html` and `tools/build-resume.mjs`: the résumé's source and the script that prints it to the PDF (`npm run resume`)
- `CNAME`, `robots.txt` and `sitemap.xml`: domain and search-engine configuration

Only original work and client work is published here. Retheme projects built on licensed properties (Zelda, Marvel, Pokémon and similar) stay out of the repository, because GitHub Pages serves every committed file, linked or not.

## Design

Black and white, with one accent: royal blue, the colour of the machine's lamps. Every token is at the top of `css/site.css`.

- **Royal blue** `#2B59FF` (`--royal`) fills: LEDs, the focus ring, selection, primary buttons, lit and active states. White text on it passes AA (5.3:1). As text, blue takes `#6E8CFF` (`--royal-soft`, `--royal-ink`), so small blue text always passes on black.
- **Black**: every page sits in the machine's room, so going from the machine to a case study stays dark: room and page `#06070A`, cabinet `#0B0C0F`, bands `#101216`, raised `#14161A`, rules `#262A31`, title-block hairlines at 30% white; text `#F4F5F7`, muted `#9AA1AB` (7.7:1).

Type is three self-hosted families, one job each:

- **Archivo** for display, in one style (108% width, weight 650, −0.03em) at five sizes: `--d-xl` case-study and contact titles, `--d-l` the hero and case-study section titles, `--d-m` the home page's section titles, `--d-s` sub-heads and the email address, `--d-xs` list entries.
- **Instrument Sans** for text: `--t-lede` (18–19.5px, 1.5), `--t-body` (16px, 1.6) and `--t-small` (14px, 1.5).
- **Martian Mono** only for small technical labels: 11px (`--t-label`), 10.5px for tool lists, uppercase, 0.08em tracking.

Each section's copy is set like a drawing's title block, the same on the machine, the plain page and the case studies: a hairline with a short lit tab at its start, then one label row (the section's number in blue, its name and, for the work, its place in the set), the title, a status line (category, and a chip whose lamp is lit when the project is live and an open ring while it's in development), the lede, the details and the actions. On the plain page each section runs the full width of the container under its label row. On desktops About sets the portrait against the story with three figures under it, the skills run four cards across (each with a line-drawn icon in royal blue that is drawn on as the card arrives, and its tools as tags), Experience reads as a CV in three columns beside a line that fills in as it scrolls, and Contact closes the page in the middle.

The display in the hero is the signature: an attract-mode loop of four scenes (name, what I build, a game of pinball on a little playfield with pop bumpers and flippers drawn as real bats, Richmond and the local time) with lamp persistence and pixel-dissolve transitions. Visitors can pause it or step through scenes. The 404 page reuses it to show TILT.

## The 3D machine (switched off for now)

The 3D machine is kept for later, once it has had more optimisation and polish. The published site doesn't load it: it runs only at `/?machine`, where the head script loads `js/machine.js`, and only with WebGL 2 and data saving off.


`src/machine/` is plain ES modules on Three.js, bundled by esbuild into `js/machine.js`:

```bash
npm install
npm run build     # or: npm run watch
```

- `layout.js`: every playfield measurement, in millimetres from the left rail and the front edge. The playfield is Deadbounce's Origin table, part for part: `origin.js` is generated from its template by `tools/origin-layout.mjs` (`node tools/origin-layout.mjs <deadbounce>/studio/src/templates/twin-ramps.json`), and `layout.js` builds its exports from it.
- The inlane guides' outline is Origin's: an original adaptation inspired by "pinball flipper ball guide" by Tinkot, CC BY 4.0 (https://www.thingiverse.com/thing:3563020, https://creativecommons.org/licenses/by/4.0/).
- `art.js`: the playfield, translite, apron, cards, plastics and cabinet art, drawn on canvases at load as a late-1970s game would print them, in the site's own inks: flat royal blues, white and black under heavy black keylines. A flaming sun fills the middle of the field, with the case studies' names lettered round its band; every insert sits in a flame of its own, the ramp arrows fly out of the sun as comets, and scalloped crescents roll out from the pops. The lettering is the site's Archivo at its heaviest and widest, outlined, with a drop shadow, often set on an arc. The cabinet's sides and front and the backbox's sides are stencilled with rows of crescent scales; the translite shows the same sun under the name, and the apron carries its rays on from the drain. Each lens has its own print: a starburst of facets (chevrons on the arrows) under its legend
- `machine.js`: the cabinet, backbox and every playfield part. The ramps and wireforms go up as a playfield is assembled: hex standoffs screwed to the wood, the ramps' moulded ears and the wireforms' welded tabs screwed down on them, and a steel flap at each ramp's mouth. The backglass is a full-size LCD that shows the translite's art, or the picture for the section on screen. Once built, every static, opaque mesh is merged with the others that share its material, which keeps each frame to a few hundred draw calls. The depth of field reads the ambient occlusion pass's depth instead of drawing the scene again for its own.
- `materials.js` and `stage.js`: materials, lights, environment and post-processing, with lighter settings for phones. The floor carries the site's grid of registration crosses, lit royal blue from under the machine, and two low fills show the cabinet's stencils in the dark room
- `physics.js` and `colliders.js`: the ball's simulation, after the engine in Deadbounce. One steel ball rolls, spins and bounces in playfield millimetres, with the flippers as coils (each button works its side's main and upper flipper), the pops and slings kicking, the standups reporting hits, the saucer catching and kicking the ball back out, and the ramps and wireforms as raised tracks. `colliders.js` builds every surface from `layout.js`.
- `show.js`: animates the parts in step with the simulation and lights the inserts: at power-on the lamps come up in a wave from the flippers to the top arch, in attract a ring of light runs out from the sun every few seconds, the four lane inserts light in turn with the Skills list (the camera tours them as they light), and the top lanes' years with the Experience timeline. Its autopilot plays the machine for each section: it shoots the case-study ramps, soft-plunges into the top lanes for the pops, and holds the ball on a flipper elsewhere. A visitor's flips (the Shift keys) take over for a few seconds.
- `explode.js`: the About section's exploded view of the back pop bumper
- `director.js`: the camera. Each section of the page is a station with a pose; scrolling blends between them and holds on each while its copy is read. Wide screens set the copy beside the part. Phones and tablets (tall) and short landscape screens (side) give the copy a panel of its own, under or beside the scene, so it never covers the part. Each section's copy crossfades in that panel, and long copy scrolls inside it while the camera holds.
- `hud.js`: the leader lines from parts to the copy about them
- `main.js`: starts it all and connects scrolling, pointer, keyboard and clicks

At `/?machine`, if the machine can't start, the page falls back to the 2D layout and display. With reduced motion, the camera cuts between stations and nothing animates.

## Adding a project

1. Copy `work/tip-top-pinball.html` to `work/<project>.html` and replace its content. Give the hero image a unique `view-transition-name` (see `.vt-tiptop` in `css/site.css`) so it morphs from the home page.
2. Add an `<article class="station">` for it in the Work section of `index.html`, with a pose in `STOPS` and a picture for the backbox LCD in `PICTURES` in `src/machine/main.js`.
3. Add WebP and JPEG images to `assets/img/` with `width` and `height` set on every `<img>`. Re-encode photos on the way in, so they carry no location or camera data.
4. Add the page to `sitemap.xml`.

## Motion and accessibility

All content and navigation work without JavaScript. Motion runs only when the visitor has not asked for reduced motion; otherwise the display shows still frames, smooth scrolling is off and nothing animates. Line splits wait for the fonts and are removed after each animation so text reflows normally. The display pauses when off screen or in a background tab. axe reports no WCAG 2.1 AA violations on any page.

## Local preview

Pages use root-relative paths, so serve the repository root (after `npm run build` if the machine's source changed):

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

## Display text

The display uses two bitmap fonts drawn dot by dot in `js/dmd-glyphs.js`, the way pinball displays were lettered: a 5 × 7 face for small text and a 12-dot face with two-dot strokes for headline words. Each glyph is a list of rows where `#` is a lit dot. Any text made of the characters defined there can go straight into a scene in `js/dmd.js`; add a glyph to the font first if a scene needs a new character.

## Résumé updates

The PDF is printed from `tools/resume.html`, which says what the site says: the same positioning, roles and dates, and the skills under the site's four kinds of work. Selected projects are left off for now. Edit the source, run `npm run resume` (it needs Playwright's Chromium; or print the page from a browser at US Letter with no margins and background graphics on), check it still fits one page, and keep the experience, skills and education in `index.html` in step with it.

## Deployment

GitHub Pages serves the root of `main` at `https://dylanhughes.dev/`. The `CNAME` file holds the custom domain. Pushing to `main` triggers the Pages build.
