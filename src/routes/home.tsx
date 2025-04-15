import { GitHubStats } from '@/components';

export default function Home() {
	return (
		<div>
			<section className='Section AboutSection'>
				<h2>About Me</h2>
				<p>
					I am a software developer with a focus on game development, seeking a
					new opportunity to apply my skills and experience to create innovative
					software and games. I have a strong understanding of JavaScript,
					TypeScript, React, Git, SQL, HTML, CSS, Python, C#, and Java. In my
					previous roles, I have developed a variety of software, including a
					sign-in system using React and Flask, an FPS dungeon game with
					gameplay, audio, AI, and UI programming, and worked on a game for
					Universal Phoenix Group. I am a creative and passionate developer who
					is always eager to learn new things and take on new challenges. I am
					confident that I have the skills and experience necessary to be a
					valuable asset to any team.
				</p>
				<hr />
				<h2>Education</h2>
				<p>B.Sc Computer Science - Full Sail University (2020-2022)</p>
				<hr />
				<h2>Experience</h2>
				<p>Bartender - Alamo Drafthouse Cinema (2023-)</p>
				<p>Programmer Intern - Universal Phoenix Group (2022)</p>
				<hr />

				<h2>Skills</h2>
				<p>
					JavaScript/TypeScript, React, Supabase, Docker, SQL, MongoDB,
					HTML/CSS, Python, Flask, Git, C/C++, Unity, OpenGL, Vulkan, DirectX
				</p>
				<hr />
				<h2>GitHub Stats</h2>
				<GitHubStats />
			</section>
		</div>
	);
}
