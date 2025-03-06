import { Space_Grotesk, Quantico } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
	variable: '--font-space-grotesk',
	subsets: ['latin'],
});

const quantico = Quantico({
	variable: '--font-quantico',
	subsets: ['latin'],
	weight: ['400'],
});

export { spaceGrotesk, quantico };
