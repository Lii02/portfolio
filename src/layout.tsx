import '@/styles/globals.css';
import { NavBar } from '@/components';
import { Outlet } from 'react-router';

export default function RootLayout() {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
}
