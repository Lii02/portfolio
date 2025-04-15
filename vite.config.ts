import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import sitemap from 'vite-plugin-sitemap';

const dynamicRoutes = ['/', '/projects', '/current', '/contact'];
const hostname = 'https://lukeinlow.listudios.io/';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths(), sitemap({ dynamicRoutes, hostname })]
});
