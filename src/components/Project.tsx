import '@/styles/Project.css';

export interface ProjectProps {
	name: string;
	description: string;
	year: number;
	link?: string | undefined;
	image?: string | undefined;
}

export default function Project(props: ProjectProps) {
	const ProjectLink = () => {
		if (props.link !== undefined) {
			return (
				<a href={props.link} target='_blank' className='LinkButton'>
					<p>Link</p>
				</a>
			);
		} else {
			return null;
		}
	};

	return (
		<div className='Project'>
			<h2>
				{props.name}
				<span style={{ fontSize: 15 }}> - {props.year}</span>
			</h2>
			<ProjectLink />
			<p>{props.description}</p>
			{props.image ? <img src={props.image} alt={props.name} /> : null}
			<hr />
		</div>
	);
}
