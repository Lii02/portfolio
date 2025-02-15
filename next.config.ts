import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	distDir: 'dist',
	trailingSlash: true,
	skipTrailingSlashRedirect: true,
	images: {
		unoptimized: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
