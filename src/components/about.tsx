import React from 'react';
import { headerStyle } from '../styles';

function About() {
  return (
    <div className='bg-gray-500'>
      <h1 className={headerStyle}>
        About
      </h1>

      <p className='font-roboto'>
        My name is Luke Inlow, I am from Virginia and I am 21 years old. I've been programming since I was around 12 years old. I've worked on projects such as operating systems, compilers, video games, game engines, and full stack web apps. If you need my résumé, please email me (email address below).
      </p>

      <div className='grid grid-cols-3 justify-items-center items-center font-roboto'>
        <div>
          <h1 className='font-bold underline'>
            Education
          </h1>
          <p>
            BS Computer Science - Full Sail University
          </p>
        </div>

        <div>
          <h1 className='font-bold underline'>
            Skills
          </h1>
          <p>
            Git, JS/TS, REST, React, Angular, Tailwind CSS, Flask, Game engine development, OpenGL, DirectX, Vulkan, Game programming, Compiler creation, Unity, Godot, 3D math, C, C++, C#, Python, Lua, SQL
          </p>
        </div>

        <div>
          <h1 className='font-bold underline'>
            Experience
          </h1>
          <p>
            Game Developer Intern - Menfes Interactive (September 2022 - December 2022)
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;