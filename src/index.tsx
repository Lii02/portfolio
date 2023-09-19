import './index.css';

import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const NavBar = lazy(() => import('./components/navbar'));
const About = lazy(() => import('./components/about'));
const Projects = lazy(() => import('./components/projects'));
const Contact = lazy(() => import('./components/contact'));

root.render(
  <div>
    <NavBar />
    <About />
    <Projects />
    <Contact />
  </div>
);