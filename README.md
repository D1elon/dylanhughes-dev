# dylanhughes.dev

Portfolio for Dylan Hughes, creative technologist and developer in Richmond, Virginia. The site is static HTML, CSS, and JavaScript with no build step.

## Structure

- `index.html`: about, work, experience, skills, education, and contact
- `work/tip-top-pinball.html`: the finished client website case study
- `work/zelda-retheme.html` and `work/stall-brawl.html`: redirects from retired case-study URLs to Work
- `css/style.css` and `js/main.js`: presentation and interactions
- `assets/dylan-hughes-resume.pdf`: downloadable résumé, copied from Dylan's revised résumé
- `CNAME`, `robots.txt`, and `sitemap.xml`: domain and search-engine configuration

## Local preview

Serve the repository root with a local static HTTP server, then open its URL in a browser. For example:

```bash
npx serve .
```

## Résumé updates

The PDF is the approved revised résumé, not a generated copy of site HTML. When it changes, replace `assets/dylan-hughes-resume.pdf` with the newly approved PDF and align the experience, skills, education, and project facts in `index.html`.

## Deployment

GitHub Pages serves the root of `main` at `https://dylanhughes.dev/`. The `CNAME` file holds the custom domain. Pushing to `main` triggers the Pages build.
