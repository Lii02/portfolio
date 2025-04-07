import dynamic from 'next/dynamic';
import Skeleton from 'react-loading-skeleton';

const Project = dynamic(() => import('@/components/Project'), {
	loading: () => <Skeleton />,
});

export default function Current() {
	return (
		<section className='Projects'>
			<Project
				name='This Site!'
				description='This site itself I wrote to show off and practice my web development skills. I wrote it in TypeScript using the NextJS framework.'
				year={2025}
				link='/'
			/>
			<Project
				name='MyMinis'
				description='A full stack app, for maintaining and keeping track of miniatures. Written in TypeScript on the frontend and backend.'
				year={2025}
				link='https://myminis.vercel.app/'
			/>
		</section>
	);
}
