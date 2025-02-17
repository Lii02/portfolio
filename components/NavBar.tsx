import '@/styles/NavBar.css';
import Link from 'next/link';

export default function NavBar() {
	return (
		<nav className='NavBar'>
			<Link href='/'>
				<h1>Luke Inlow</h1>
			</Link>

			<Link href='/projects'>
				<h2>Projects</h2>
			</Link>

			<Link href='/contact'>
				<h2>Contact</h2>
			</Link>
		</nav>
	);
}
