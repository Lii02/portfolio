import React from 'react';
import Project from './project';

// Project images and description files
import SignInImage from '../assets/images/SignInUpdated.png';
import SignInDesc from '../assets/descriptions/signin.txt';

import FPSDungeonImage from '../assets/images/FPSDungeon.png';
import FPSDungeonDesc from '../assets/descriptions/fps.txt';

import GOLImage from '../assets/images/GOL.png';
import GOLDesc from '../assets/descriptions/gol.txt';

import VulkanRendererImage from '../assets/images/VulkanRenderer.jpg';
import VulkanRendererDesc from '../assets/descriptions/renderer.txt';

import HoddsmimirImage from '../assets/images/Hoddsmimir.png';
import HoddsmimirDesc from '../assets/descriptions/hoddsmimir.txt';

import FlappyBirdImage from '../assets/images/FlappyBirdClone.png';
import FlappyBirdDesc from '../assets/descriptions/flappy.txt';

function Projects() {
  return (
    <div className='p-4 bg-gray-500'>
      <h1>
        Projects
      </h1>
      
      <div className='grid grid-cols-3'>
        <Project projectName='Sign In System' descriptionSrc={SignInDesc} link='https://github.com/Lii02/signin-system' image={SignInImage} />
        <Project projectName='FPS Dungeon' descriptionSrc={FPSDungeonDesc} link='https://lii02dev.itch.io/fps-dungeon' image={FPSDungeonImage} />
        <Project projectName='GOL' descriptionSrc={GOLDesc} link='https://github.com/Lii02/ConwayGOL' image={GOLImage} />
        <Project projectName='Vulkan Renderer' descriptionSrc={VulkanRendererDesc} link='https://github.com/Lii02/LevelRenderer' image={VulkanRendererImage} />
        <Project projectName='Hoddsmimir' descriptionSrc={HoddsmimirDesc} link='https://lii02dev.itch.io/hoddsmimir"' image={HoddsmimirImage} />
        <Project projectName='Flappy Bird Clone' descriptionSrc={FlappyBirdDesc} link='https://lii02dev.itch.io/flappy-bird-clone' image={FlappyBirdImage} />
      </div>
    </div>
  );
}

export default Projects;