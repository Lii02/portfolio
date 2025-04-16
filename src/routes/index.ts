import { lazy } from 'react';

const Home = lazy(() => import('./home'));
const Projects = lazy(() => import('./projects'));
const Current = lazy(() => import('./current'));
const Contact = lazy(() => import('./contact'));

export { Home, Projects, Current, Contact };
