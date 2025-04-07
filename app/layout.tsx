import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import NavBar from '@/components/NavBar';
import { spaceGrotesk, quantico } from './fonts';

export const metadata: Metadata = {
	title: 'Luke Inlow - Portfolio',
	description: "Luke Inlow's Portfolio Page",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html suppressHydrationWarning lang='en'>
			<body className={`${spaceGrotesk.variable} ${quantico.variable}`}>
				<ThemeProvider themes={['light', 'dark']}>
					<NavBar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
