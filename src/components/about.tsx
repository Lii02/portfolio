import React, { useEffect, useState } from 'react';
import { readText } from '../util/read';

import AboutMeDesc from '../assets/descriptions/about.txt';

function About() {
  const [aboutMe, setAboutMe] = useState('');

  useEffect(() => {
    readText(AboutMeDesc, (value: string) => {
      setAboutMe(value);
    });
  }, []);

  return (
    <div className='p-4 bg-slate-500'>
      <h1>
        About
      </h1>

      <p>
        {aboutMe}
      </p>

      <div className='m-8 grid grid-cols-3 justify-items-center items-center'>
        <div>
          <h2 className='statHeader'>
            Education
          </h2>
          <p>
            BS Computer Science (Spec. in Game Development) - Full Sail University
          </p>
        </div>

        <div>
          <h2 className='statHeader'>
            Skills
          </h2>
          <p>
            Git, JS/TS, REST, React, Angular, Tailwind CSS, Flask, Game engine development, OpenGL, DirectX, Vulkan, Game programming, Compiler creation, Unity, Godot, 3D math, C, C++, C#, Python, Lua, SQL
          </p>
        </div>

        <div>
          <h2 className='statHeader'>
            Experience
          </h2>
          <p>
            Game Developer Intern - Menfes Interactive (September 2022 - December 2022)
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;