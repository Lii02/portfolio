import '@/styles/Project.css';
import Image, { StaticImageData } from 'next/image';

export interface ProjectProps {
	name: string;
	description: string;
	year: number;
	link: string;
	image?: string | StaticImageData | undefined;
}

export default function Project(props: ProjectProps) {
	return (
		<div className='Project'>
			<h2>
				{props.name}
				<span className='year'> - {props.year}</span>
			</h2>
			<a href={props.link} target='_blank' className='LinkButton'>
				<p>Link</p>
			</a>
			<p>{props.description}</p>
			{props.image ? <Image src={props.image} alt={props.name} /> : null}
			<hr />
		</div>
	);
}
