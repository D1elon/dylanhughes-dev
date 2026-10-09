# dylanhughes.dev

Portfolio for Dylan Hughes, creative technologist and developer in Richmond, Virginia. The site is static HTML, CSS, and JavaScript with no build step.

## Structure

- `index.html`: introduction, selected work, experience, skills, education, about, and contact
- `work/tip-top-pinball.html`: the finished client website case study
- `work/zelda-retheme.html` and `work/stall-brawl.html`: redirects from retired case-study URLs to Work
- `css/style.css` and `js/main.js`: presentation and interactions
- `assets/dylan-hughes-resume.pdf`: downloadable résumé, copied from Dylan's revised résumé
- `assets/img/*.webp`: optimized versions of the portrait, workshop, and project images
- `CNAME`, `robots.txt`, and `sitemap.xml`: domain and search-engine configuration

## Local preview

Serve the repository root with a local static HTTP server, then open its URL in a browser. For example:

```bash
python -m http.server 8765 --bind 127.0.0.1
```

## Résumé updates

The PDF is the approved revised résumé, not a generated copy of site HTML. When it changes, replace `assets/dylan-hughes-resume.pdf` with the newly approved PDF and align the experience, skills, education, and project facts in `index.html`.

## Presentation and accessibility

The layout adapts from 320px upward. The mobile navigation is progressively enhanced: all links remain available with JavaScript disabled. The experience section includes a native expandable engineering highlight. Visible keyboard focus, reduced-motion preferences, semantic headings, image descriptions, and browser-print styles are included.

Image `width` and `height` attributes reserve layout space. The home page uses WebP images with JPEG fallbacks. The original résumé PDF is unchanged.

## Deployment

GitHub Pages serves the root of `main` at `https://dylanhughes.dev/`. The `CNAME` file holds the custom domain. Pushing to `main` triggers the Pages build.
