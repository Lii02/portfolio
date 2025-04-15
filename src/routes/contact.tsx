import '@/styles/contact.css';

// Logos
import github from '/github-mark-white.png';
import linkedin from '/linkedin.png';
import itchio from '/itchio.png';
import listudios from '/SquareInverted.png';

export default function Contact() {
	return (
		<section className='Contact'>
			<div>
				<h2>
					Email:{' '}
					<a href='mailto:lukeinlow@gmail.com' className='Email'>
						lukeinlow@gmail.com
					</a>
				</h2>
				<h2>Discord: li02</h2>
				<a href='https://github.com/Lii02/portfolio' target='_blank'>
					<h2 className='LinkButton'>Source Code</h2>
				</a>
			</div>

			<div className='Socials'>
				<h2>Socials</h2>
				<a href='https://github.com/Lii02' target='_blank'>
					<img src={github} alt='GitHub' />
				</a>

				<a href='https://www.linkedin.com/in/luke-inlow/' target='_blank'>
					<img src={linkedin} alt='LinkedIn' />
				</a>

				<a href='https://lii02dev.itch.io/' target='_blank'>
					<img src={itchio} alt='Itch.io' />
				</a>

				<a href='https://listudios.io/' target='_blank'>
					<img src={listudios} alt='Li Studios' />
				</a>
			</div>
		</section>
	);
}
