import '../styles/global.css';
import React from 'react';

import GithubIcon from '../assets/icons/github-mark-white.png';
import ItchioIcon from '../assets/icons/itchio.png';
import LinkedinIcon from '../assets/icons/linkedin.png';

function Contact() {
  return (
    <div className='p-4'>
      <h1 className='sectionHeader'>
        Contact
      </h1>

      <p>
        Email: lukeinlow@gmail.com
      </p>
      <p>
        Discord: li02
      </p>

      <a href='https://github.com/Lii02/portfolio' target='_blank' rel='noreferrer'>
        Source Code
      </a>

      <div className='flex justify-center'>
        <a className='icon' href='https://github.com/Lii02' target='_blank' rel='noreferrer'>
          <img src={GithubIcon} alt='GitHub' />
        </a>

        <a className='icon' href='https://lii02dev.itch.io/' target='_blank' rel='noreferrer'>
          <img src={ItchioIcon} alt='itch.io' />
        </a>

        <a className='icon' href='https://www.linkedin.com/in/luke-inlow-709b81100/' target='_blank' rel='noreferrer'>
          <img src={LinkedinIcon} alt='LinkedIn' />
        </a>
      </div>
    </div>
  );
}

export default Contact;