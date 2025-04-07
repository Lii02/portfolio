import '@/styles/NavBar.css';
import Link from 'next/link';
import { MdComputer, MdPhone, MdSettings } from 'react-icons/md';
import { LuNotebook } from 'react-icons/lu';

export default function NavBar() {
	return (
		<nav className='NavBar'>
			<Link href='/' className='HomeButton'>
				<h1>Luke Inlow</h1>
			</Link>

			<Link href='/projects' className='NavButton'>
				<h2>
					<MdComputer />
					Projects
				</h2>
			</Link>

			<Link href='/current' className='NavButton'>
				<h2>
					<LuNotebook />
					Working On
				</h2>
			</Link>

			<Link href='/contact' className='NavButton'>
				<h2>
					<MdPhone />
					Contact
				</h2>
			</Link>

			<Link href='/settings' className='NavButton SettingsButton'>
				<h2>
					<MdSettings />
				</h2>
			</Link>
		</nav>
	);
}
