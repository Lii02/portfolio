import '@/styles/settings.css';
import dynamic from 'next/dynamic';
const ThemeSwitch = dynamic(() => import('@/components/ThemeSwitch'));

export default function Settings() {
	return (
		<div className='Settings Section'>
			<p className='Option'>
				Theme: <ThemeSwitch />
			</p>
		</div>
	);
}
