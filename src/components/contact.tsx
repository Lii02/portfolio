import React from 'react';

import GithubIcon from '../assets/icons/github-mark-white.png';
import ItchioIcon from '../assets/icons/itchio.png';
import LinkedinIcon from '../assets/icons/linkedin.png';

function Contact() {
  const iconStyle = 'w-16 h-16';

  return (
    <div className='bg-gradient-to-t from-gray-400 to-gray-500'>
      <h1 className='flex font-roboto text-xl text-center justify-center'>
        Contact
      </h1>

      <h3>
        Email: lukeinlow@gmail.com
      </h3>

      <h3>
        Discord: li02
      </h3>

      <a className='text-white underline italic' href='https://github.com/Lii02/portfolio' target='_blank'>
        Source Code
      </a>

      <div className='flex justify-center'>
        <a className={iconStyle} href='https://github.com/Lii02' target='_blank'>
          <img src={GithubIcon} alt='GitHub' />
        </a>

        <a className={iconStyle} href='https://lii02dev.itch.io/' target='_blank'>
          <img src={ItchioIcon} alt='itch.io' />
        </a>

        <a className={iconStyle} href='https://www.linkedin.com/in/luke-inlow-709b81100/' target='_blank'>
          <img src={LinkedinIcon} alt='LinkedIn' />
        </a>
      </div>
    </div>
  );
}

export default Contact;