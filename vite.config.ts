import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		allowedHosts: all,
		host: '0.0.0.0',
		port: 8080
	},
	plugins: [tailwindcss(), sveltekit()]
});