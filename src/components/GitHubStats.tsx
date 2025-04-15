import '@/styles/GitHubStats.css';
import { useEffect, useState } from 'react';

interface Stats {
	followers?: number;
	following?: number;
	public_repos?: number;
	created_at?: number | string | Date;
}

export default function GitHubStats() {
	const [stats, setStats] = useState<Stats>({});

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.github.com/users/Lii02');
			const json = await response.json();
			setStats(json as Stats);
		};

		fetchData();
	}, []);

	const year = new Date(stats.created_at as Date).getFullYear();

	return (
		<div className='GitHubStats'>
			<p>Joined: {year}</p>
			<p>Followers: {stats.followers}</p>
			<p>Following: {stats.following}</p>
			<p>Public Repositories: {stats.public_repos}</p>
		</div>
	);
}
