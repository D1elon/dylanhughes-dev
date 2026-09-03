# dylanhughes.dev

Personal site for Dylan Hughes, creative technologist in Richmond, VA. Hand-built static HTML, CSS and JavaScript. No framework, no build step.

## Structure

```
index.html                     home, told in five chapters: story, work, the other two jobs, résumé, contact
work/                          case studies: zelda-retheme, stall-brawl, tip-top-pinball
css/style.css                  all styling; design tokens at the top of the file
js/main.js                     the ball on the rail, intro, tickers, count-up, menu, reveals
assets/img/                    case study imagery
assets/favicon.svg             favicon
assets/resume-print.html       source for the résumé PDF
assets/dylan-hughes-resume.pdf downloadable résumé
CNAME                          dylanhughes.dev
robots.txt, sitemap.xml        search engine hints
```

Placeholders marked `.slot` in the HTML are waiting on photos and video. Each one says what to shoot and at what ratio.

## Local preview

```bash
python -m http.server 5173
```

Then open http://localhost:5173.

## Regenerating the résumé PDF

Edit `assets/resume-print.html`, then print it to PDF from Chrome (Letter, margins 0.42in top and bottom, 0.55in sides, background graphics on) and save over `assets/dylan-hughes-resume.pdf`. It should stay on one page.

## Deploying

GitHub Pages serves the `main` branch from the repository root. The `CNAME` file sets the custom domain. In Porkbun DNS, point the apex at GitHub's four A records (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and `www` at `d1elon.github.io` as a CNAME.
