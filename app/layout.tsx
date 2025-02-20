import '@/styles/globals.css';
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
	title: 'Luke Inlow - Portfolio',
	description: "Luke Inlow's Portfolio Page",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
