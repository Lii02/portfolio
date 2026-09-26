export default function ProjectCard({ project }) {
	const { title, role, description, tags, image, alt, link } = project;

	return (
		<article className='card'>
			<figure>
				<img src={image} alt={alt} loading='lazy' />
			</figure>
			<div className='card-body'>
				<p className='card-title'>{title}</p>
				<p className='card-role'>{role}</p>
				<p className='card-desc'>{description}</p>
				<a className='card-link' href={link} target='_blank' rel='noreferrer'>
					Link
				</a>
				<div className='tags'>
					{tags.map((tag) => (
						<span key={tag}>{tag}</span>
					))}
				</div>
			</div>
		</article>
	);
}
