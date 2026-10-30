# dylanhughes.dev

Portfolio for Dylan Hughes, creative technologist and developer in Richmond, Virginia. The home page is a pinball machine rendered in 3D: it opens on the backbox, and scrolling flies the camera down over the playfield, where each section of the page is a part of the machine. Everything else is static HTML, CSS and JavaScript; fonts and animation libraries are self-hosted. Only the 3D machine has a build step.

## Structure

- `index.html`: introduction and dot-matrix display, selected work, about, skills, experience, contact. The same HTML is the 3D machine's copy and the plain page shown without WebGL.
- `work/deadbounce.html`: Deadbounce case study
- `work/tip-top-pinball.html`: Tip Top Pinball case study, with a before-and-after comparison
- `work/stall-brawl.html`: redirect to Work until the rethemed Stall Brawl case study is ready
- `404.html`: not-found page, served by GitHub Pages for any missing URL
- `css/site.css`: the whole design system (tokens at the top)
- `js/site.js`: navigation, clock, copy-email, comparison slider and all scroll motion
- `js/dmd.js` and `js/dmd-glyphs.js`: the 128 × 32 pinball dot-matrix display and its hand-drawn bitmap fonts
- `js/machine.js`: the 3D machine, bundled from `src/machine/` (see below). Commit it after every change to the source.
- `src/machine/`: the machine's source, and `tools/build-machine.mjs`, its build script
- `js/vendor/`: GSAP 3.15 with ScrollTrigger and SplitText, and Lenis 1.3 for inertial scrolling
- `fonts/`: Archivo (headlines), Instrument Sans (body), Martian Mono (labels)
- `assets/`: résumé PDF, favicon, social share image (`og.png`) and photographs
- `CNAME`, `robots.txt` and `sitemap.xml`: domain and search-engine configuration

Only original work and client work is published here. Retheme projects built on licensed properties (Zelda, Marvel, Pokémon and similar) stay out of the repository, because GitHub Pages serves every committed file, linked or not.

## Design

Brushed-aluminium greys and graphite, cabinet-black bands for work and contact, and a single plasma orange taken from the dot-matrix display. Headlines are expanded Archivo, body text is Instrument Sans, and small spec labels are Martian Mono.

The display in the hero is the signature: an attract-mode loop of four scenes (name, what I build, a game of pinball, Richmond and the local time) with plasma persistence and pixel-dissolve transitions. Visitors can pause it or step through scenes. The 404 page reuses it to show TILT.

## The 3D machine

`src/machine/` is plain ES modules on Three.js, bundled by esbuild into `js/machine.js`:

```bash
npm install
npm run build     # or: npm run watch
```

- `layout.js`: every playfield measurement, in millimetres from the left rail and the front edge. The board, flippers, slingshots, apron, shooter lane and orbits follow Deadbounce's Blank playfield with orbit; the ramps, wireforms, pops and drop bank follow its Twin Ramps template.
- `art.js`: the playfield, backglass, apron, cards and cabinet art, drawn on canvases at load
- `machine.js`: the cabinet, backbox and every playfield part
- `materials.js` and `stage.js`: materials, lights, environment and post-processing, with lighter settings for phones
- `physics.js` and `colliders.js`: the ball's simulation, after the engine in Deadbounce. One steel ball rolls, spins and bounces in playfield millimetres, with the flippers as coils, the pops and slings kicking, the drop targets falling, and the ramps and wireforms as raised tracks. `colliders.js` builds every surface from `layout.js`.
- `show.js`: animates the parts in step with the simulation and lights the inserts. Its autopilot plays the machine for each section: it shoots the case-study ramps, soft-plunges into the top lanes for the pops, and holds the ball on a flipper elsewhere. A visitor's flips (the Shift keys) take over for a few seconds.
- `explode.js`: the About section's exploded view of a pop bumper
- `director.js`: the camera. Each section of the page is a station with a pose; scrolling blends between them and holds on each while its copy is read.
- `overlay.js` and `hud.js`: the hero copy laid onto the backglass as real HTML, and the leader lines from parts to the copy about them
- `main.js`: starts it all and connects scrolling, pointer, keyboard and clicks

The machine runs only where WebGL 2 is available, data saving is off and the address has no `?flat`. If it can't start, the page falls back to the plain layout and the 2D display. With reduced motion, the camera cuts between stations and nothing animates.

## Adding a project

1. Copy `work/tip-top-pinball.html` to `work/<project>.html` and replace its content. Give the hero image a unique `view-transition-name` (see `.vt-tiptop` in `css/site.css`) so it morphs from the home page.
2. Add an `<article class="station">` for it in the Work section of `index.html`, with a pose in `STOPS` and a plate in `PLATES` in `src/machine/main.js`.
3. Add WebP and JPEG images to `assets/img/` with `width` and `height` set on every `<img>`.
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

The PDF is the approved revised résumé, not a generated copy of site HTML. When it changes, replace `assets/dylan-hughes-resume.pdf` and align the experience, skills and education in `index.html`.

## Deployment

GitHub Pages serves the root of `main` at `https://dylanhughes.dev/`. The `CNAME` file holds the custom domain. Pushing to `main` triggers the Pages build.
