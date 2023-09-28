import React from 'react';

function About() {
  return (
    <div className='p-4 bg-gray-500'>
      <h1>
        About
      </h1>

      <p>
        I am a software developer with a focus on game development, is seeking a new opportunity to apply my skills and experience to create innovative software and games.
        I have a strong understanding of JavaScript, TypeScript, React, Git, SQL, HTML, CSS, Python, C#, and Java. I am also proficient in teamwork and leadership, agile and waterfall development, problem solving, continuous learning, and persistence.
        In my previous roles, I have developed a variety of games, including a sign-in system using React and Flask, a FPS dungeon game with gameplay, audio, AI, and UI programming, and minigames for a Universal Phoenix Group game.
        I am a creative and passionate developer who is always eager to learn new things and take on new challenges. I am confident that I have the skills and experience necessary to be a valuable asset to any team. If you need my résumé, please email me (email address below).
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