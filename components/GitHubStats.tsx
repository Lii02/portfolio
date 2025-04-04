import '@/styles/GitHubStats.css';

export default async function GitHubStats() {
	const result = await fetch('https://api.github.com/users/Lii02');
	const stats = await result.json();
	const { followers, following, public_repos, created_at } = stats;

	const year = new Date(created_at).getFullYear();

	return (
		<div className='GitHubStats'>
			<p>Joined: {year}</p>
			<p>Followers: {followers}</p>
			<p>Following: {following}</p>
			<p>Public Repositories: {public_repos}</p>
		</div>
	);
}
