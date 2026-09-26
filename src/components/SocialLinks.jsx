import { socials } from '../data/socials.js';
import SocialIcon from './SocialIcon.jsx';

export default function SocialLinks() {
	return (
		<section className='elsewhere' id='elsewhere'>
			<div className='work-head'>
				<h2>Elsewhere</h2>
			</div>

			<div className='social-grid'>
				{socials.map((social) => (
					<a
						key={social.id}
						className='social-link'
						href={social.href}
						target={social.id === 'email' ? undefined : '_blank'}
						rel='noreferrer'
					>
						<SocialIcon id={social.id} />
						<span className='social-text'>
							<span className='social-label'>{social.label}</span>
							<span className='social-handle'>{social.handle}</span>
						</span>
					</a>
				))}
			</div>
		</section>
	);
}
