import { lazy } from 'react';

const GitHubStats = lazy(() => import('./GitHubStats'));
const NavBar = lazy(() => import('./NavBar'));
const Project = lazy(() => import('./Project'));

export { GitHubStats, NavBar, Project };
