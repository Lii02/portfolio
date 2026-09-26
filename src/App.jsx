import { projects } from './data/projects.js';
import ProjectCard from './components/ProjectCard.jsx';
import SocialLinks from './components/SocialLinks.jsx';

export default function App() {
	return (
		<div className='wrap'>
			<header className='hero'>
				<p className='kicker'>lukeinlow.listudios.io</p>
				<h1>I build video games and software.</h1>
				<p className='summary'>
					I am a software developer with a focus on game development, seeking a
					new opportunity to apply my skills and experience to create innovative
					software and games. I have a strong understanding of Unity, Godot,
					JavaScript/TypeScript, React, Git, Python, C#, and C++. In my previous
					projects, I have developed a variety of software, including a sign-in
					system using React and Flask, an FPS dungeon game with gameplay,
					audio, AI, and UI programming, and worked on a game for Universal
					Phoenix Group. I am a creative and passionate developer who is always
					eager to learn new things and take on new challenges. I am confident
					that I have the skills and experience necessary to be a valuable asset
					to any team.
				</p>
				<div className='hero-links'>
					<a href='#work'>View projects</a>
					<a href='#elsewhere'>Find me elsewhere</a>
				</div>
			</header>

			<section className='work' id='work'>
				<div className='work-head'>
					<h2>Projects</h2>
					<span>{projects.length} projects, 2021–2026</span>
				</div>

				<div className='grid'>
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</section>

			<SocialLinks />

			<footer>
				<p>© {new Date().getFullYear()} Luke Inlow — lukeinlow@email.com</p>
				<p>Built with React + Vite</p>
			</footer>
		</div>
	);
}
