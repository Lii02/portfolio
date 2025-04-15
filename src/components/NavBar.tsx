import '@/styles/NavBar.css';
import { NavLink } from 'react-router';
import { MdComputer, MdPhone } from 'react-icons/md';
import { LuNotebook } from 'react-icons/lu';

export default function NavBar() {
	return (
		<nav className='NavBar'>
			<NavLink to='/' className='HomeButton'>
				<h1>Luke Inlow</h1>
			</NavLink>

			<NavLink to='/projects' className='NavButton'>
				<h2>
					<MdComputer />
					Projects
				</h2>
			</NavLink>

			<NavLink to='/current' className='NavButton'>
				<h2>
					<LuNotebook />
					Working On
				</h2>
			</NavLink>

			<NavLink to='/contact' className='NavButton'>
				<h2>
					<MdPhone />
					Contact
				</h2>
			</NavLink>
		</nav>
	);
}
