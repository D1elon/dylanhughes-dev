// Bundles the home page's 3D machine (src/machine) and the parts of three.js it uses into js/machine.js.
// The bundle is committed, so GitHub Pages serves the site with no build of its own.
//   npm install && npm run build      (or: npm run watch)
import * as esbuild from 'esbuild';

const options = {
  entryPoints: ['src/machine/main.js'],
  outfile: 'js/machine.js',
  bundle: true,
  format: 'esm',
  minify: true,
  target: ['es2020', 'safari15'],
  legalComments: 'eof',
  logLevel: 'info',
};

if (process.argv.includes('--watch')) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
} else {
  await esbuild.build(options);
}
