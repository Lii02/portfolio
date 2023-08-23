import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <div>
    <NavBar />
    <About />
    <Projects />
    <Contact />
  </div>
);