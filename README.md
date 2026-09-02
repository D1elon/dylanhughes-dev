# dylanhughes.dev

Personal site — hand-built static HTML/CSS/JS. No framework, no build step.

## Structure

```
index.html                     home: hero, ledger, work cards, how I work, résumé, contact
work/                          case studies — zelda-retheme, stall-brawl, tip-top-pinball
css/style.css                  all styling; design tokens at the top of the file
js/main.js                     hero light field, scroll reveals
assets/img/                    imagery
assets/resume-print.html       print stylesheet source for the PDF
assets/dylan-hughes-resume.pdf downloadable résumé
CNAME                          dylanhughes.dev
```

## Local preview

```bash
python -m http.server 5173
```

Then open http://localhost:5173.

## Regenerating the résumé PDF

Edit `assets/resume-print.html`, then print it to PDF from Chrome
(Letter, margins 0.42in top / 0.4in bottom / 0.55in sides, background graphics on)
and save over `assets/dylan-hughes-resume.pdf`.

## Deploying

Push to GitHub, then enable Pages on the `main` branch in repo settings.
The `CNAME` file handles the custom domain. In Porkbun DNS, point the apex at
GitHub's four A records (185.199.108–111.153) and `www` at `<user>.github.io`.
