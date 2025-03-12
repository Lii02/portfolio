import '@/styles/settings.css';
import dynamic from 'next/dynamic';
const ThemeSwitch = dynamic(() => import('@/components/ThemeSwitch'));

export default function Settings() {
	return (
		<section className='Settings'>
			<p className='Option'>
				Theme: <ThemeSwitch />
			</p>
		</section>
	);
}
