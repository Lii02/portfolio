import React from 'react';

function About() {
  return (
    <div className='bg-gray-500'>
      <h1>
        About
      </h1>

      <p>
        My name is Luke Inlow, I am from Virginia and I am 21 years old. I've been programming since I was around 12 years old. I've worked on projects such as operating systems, compilers, video games, game engines, and full stack web apps. If you need my résumé, please email me (email address below).
      </p>

      <div className='grid grid-cols-3 justify-items-center items-center'>
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