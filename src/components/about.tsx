import React, { useEffect, useState } from 'react';
import readText from '../util/read';

import AboutMeDesc from '../assets/descriptions/about.txt';

function About() {
  const [aboutMe, setAboutMe] = useState('');

  useEffect(() => {
    readText(AboutMeDesc, (value: string) => {
      setAboutMe(value);
    });
  }, []);

  return (
    <div className='p-4'>
      <h1 className='sectionHeader'>
        About
      </h1>

      <p>
        {aboutMe}
      </p>

      <div className='p-2 grid grid-cols-3 justify-items-center items-center'>
        <span>
          <h2 className='statHeader'>
            Education
          </h2>
          <p>
            BS Computer Science (Spec. in Game Development) - Full Sail University 2022
          </p>
        </span>

        <span>
          <h2 className='statHeader'>
            Skills
          </h2>
          <p>
            JavaScript/TypeScript, React, Firebase, Docker, SQL, HTML/CSS, Python, Flask, Git, C/C++, OpenGL, Vulkan, DirectX 
          </p>
        </span>

        <span>
          <h2 className='statHeader'>
            Experience
          </h2>
          <p>
            Bartender/Server - Alamo Drafthouse Cinema(October 2023 - Present)
            <br />
            Programmer Intern - Universal Phoenix Group (September 2022 - December 2022)
          </p>
        </span>
      </div>
    </div>
  );
}

export default About;