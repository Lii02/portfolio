const common = {
	width: 24,
	height: 24,
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 1.5,
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
};

export default function SocialIcon({ id }) {
	switch (id) {
		case 'github':
			return (
				<svg {...common}>
					<path d='M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.1 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21' />
				</svg>
			);
		case 'linkedin':
			return (
				<svg {...common}>
					<rect x='3' y='3' width='18' height='18' rx='2' />
					<line x1='7.5' y1='10.5' x2='7.5' y2='17' />
					<line x1='7.5' y1='7' x2='7.5' y2='7' />
					<path d='M12 17v-4a2.5 2.5 0 0 1 5 0v4' />
					<line x1='12' y1='10.5' x2='12' y2='17' />
				</svg>
			);
		case 'itch':
			return (
				<svg {...common}>
					<path d='M3 8.5 5 4h14l2 4.5c.2 1.7-1 3-2.5 3a2.8 2.8 0 0 1-2.5-1.5A2.8 2.8 0 0 1 13.5 12 2.8 2.8 0 0 1 11 10.5 2.8 2.8 0 0 1 8.5 12 2.8 2.8 0 0 1 6 10.5c-.4.9-1.3 1.5-2.5 1.5C2 12 2.8 10.2 3 8.5Z' />
					<path d='M4.5 11.5 4 19a2 2 0 0 0 2 2h3v-4.5h6V21h3a2 2 0 0 0 2-2l-.5-7.5' />
					<path d='M10 14.2c0-.9.9-1.7 2-1.7s2 .8 2 1.7' />
				</svg>
			);
		case 'discord':
			return (
				<svg {...common}>
					<path d='M8 5.5C6 6 4.7 6.6 4 7c-1 2-1.6 6-1.4 9.5 1.5 1.3 3.6 2 5.4 2.2l.7-1.4' />
					<path d='M16 5.5c2 .5 3.3 1.1 4 1.5 1 2 1.6 6 1.4 9.5-1.5 1.3-3.6 2-5.4 2.2l-.7-1.4' />
					<path d='M8 5.5C10.5 5 13.5 5 16 5.5' />
					<path d='M4 16.5c3.5 1.7 12.5 1.7 16 0' />
					<ellipse cx='9' cy='13' rx='1.2' ry='1.5' />
					<ellipse cx='15' cy='13' rx='1.2' ry='1.5' />
				</svg>
			);
		case 'email':
			return (
				<svg {...common}>
					<rect x='3' y='5' width='18' height='14' rx='2' />
					<path d='m3.5 6 8.5 7 8.5-7' />
				</svg>
			);
		case 'bluesky':
			return <svg {...common}></svg>;
		default:
			return null;
	}
}
