import Project from '@/components/Project';

// Images
import SignIn from '@/public/SignInUpdated.png';
import FPSDungeon from '@/public/FPSDungeon.png';
import GOL from '@/public/GOL.png';
import VulkanRenderer from '@/public/VulkanRenderer.jpg';
import Hoddsmimir from '@/public/Hoddsmimir.png';
import FlappyBird from '@/public/FlappyBirdClone.png';

export default function Projects() {
	return (
		<div className='Projects Section'>
			<Project
				name='This Site!'
				description='This site itself is a project I worked on to hone and show my web development skills. Written in TypeScript, and using NextJS.'
				year={2025}
				link='/'
			/>
			<Project
				name='Sign In System'
				description='A very simple sign in system I wrote in TypeScript and Python, using React and Flask. I made it just to learn the ins and outs of full stack. I recently went back to cleanup and improve the code.'
				year={2024}
				link='https://github.com/Lii02/signin-system'
				image={SignIn}
			/>
			<Project
				name='FPS Dungeon'
				description='This game was made by a 2 man team, so all the work was split. Game was made in the Unity engine over the span of 4 months (I also had my internship during those 4 months). My work included, but not limited to: level design, turret AI, buy menu, audio engineering, and UI development.'
				year={2022}
				link='https://lii02dev.itch.io/fps-dungeon'
				image={FPSDungeon}
			/>
			<Project
				name='GOL'
				description='Written in C# using Windows Forms. The simulation is fully customizable.'
				year={2021}
				link='https://github.com/Lii02/ConwayGOL'
				image={GOL}
			/>

			<Project
				name='Vulkan Renderer'
				description='A Vulkan based renderer written in C++, using a custom level file format. The renderer renders using PBR, and a custom text-based model format.'
				year={2022}
				link='https://github.com/Lii02/LevelRenderer'
				image={VulkanRenderer}
			/>
			<Project
				name='Hoddsmimir'
				description=' A 3 month long project with a 5 person team. The game was made in the Unity Engine. My work included, but not limited to: WebGL port, audio, inventory.'
				year={2021}
				link='https://lii02dev.itch.io/hoddsmimir%22'
				image={Hoddsmimir}
			/>
			<Project
				name='Flappy Bird Clone'
				description='A simple flappy bird clone I wrote in C++ using SDL2.'
				year={2023}
				link='https://lii02dev.itch.io/flappy-bird-clone'
				image={FlappyBird}
			/>
		</div>
	);
}
