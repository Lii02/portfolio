import '@/styles/contact.css';
import Image from 'next/image';
import github from '@/public/github-mark-white.png';
import linkedin from '@/public/linkedin.png';
import itchio from '@/public/itchio.png';

export default function Contact() {
	return (
		<div className='Contact'>
			<section className='Socials'>
				<Image src={github} alt='GitHub' />
				<Image src={linkedin} alt='LinkedIn' />
				<Image src={itchio} alt='ItchIO' />
			</section>
		</div>
	);
}
