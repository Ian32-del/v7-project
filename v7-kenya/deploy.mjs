import { execSync } from 'child_process';
import fs from 'fs';

const env = {
  ...process.env,
  NODE_OPTIONS: '--dns-result-order=ipv4first',
};

// Build the app
execSync('vite build', { stdio: 'inherit', env });

// Write wrangler config
const config = {
  name: 'v7-kenya',
  compatibility_date: '2026-05-24',
  compatibility_flags: ['nodejs_compat'],
  main: 'server.js',
  no_bundle: false,
  assets: {
    directory: '../client',
    binding: 'ASSETS'
  }
};

fs.writeFileSync('dist/server/wrangler.json', JSON.stringify(config, null, 2));
console.log('Wrote dist/server/wrangler.json');

// Deploy
execSync('wrangler deploy --config dist/server/wrangler.json', {
  stdio: 'inherit',
  env
});