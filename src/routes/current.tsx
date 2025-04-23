import { Project } from '@/components';

export default function Current() {
	return (
		<section className='Projects'>
			<p>Projects I'm currently working on, which I work on and off.</p>
			<Project
				name='Sen'
				description='High level programming language and compiler. Written in in C++.'
				link='https://github.com/Lii02/sen'
				year={2025}
			/>
			<Project
				name='liTech'
				description='An OpenGL game engine written in C++.'
				year={2025}
				link='https://github.com/Li-Studios-LLC/liTech'
			/>
		</section>
	);
}
