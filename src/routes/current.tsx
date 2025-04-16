import { Project } from '@/components';

export default function Current() {
	return (
		<section className='Projects'>
			<Project
				name='liTech'
				description='An OpenGL game engine written in C++.'
				year={2025}
				link='https://github.com/Li-Studios-LLC/liTech'
			/>
		</section>
	);
}
