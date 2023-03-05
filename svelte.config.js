import autoAdapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import netlifyAdapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  kit: {
    adapter: autoAdapter(), // or netlifyAdapter()
    csp: { mode: 'auto' } // remove this if you're not using comment system
  },
  preprocess: [mdsvex(mdsvexConfig), vitePreprocess()]
};

export default config;
