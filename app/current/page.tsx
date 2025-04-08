import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';

const Project = dynamic(() => import('@/components/Project'), {
	loading: () => <Skeleton />,
});

export default function Current() {
	return (
		<section className='Projects'>
			<Project
				name='MyMinis'
				description='A full stack app, for maintaining and keeping track of miniatures. Written in TypeScript on the frontend and backend.'
				year={2025}
				link='https://myminis.vercel.app/'
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
