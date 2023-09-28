import React, { useEffect, useState } from 'react';

interface ProjectProps {
  projectName: string;
  descriptionSrc: string;
  link: string;
  image: string;
}

function Project(props: ProjectProps) {
  const [descriptionText, setDescriptionText] = useState<string>('');

  useEffect(() => {
    const loadDesc = async () => {
      try {
        const res = await fetch(props.descriptionSrc);
        const text = await res.text();
        setDescriptionText(text);
      } catch (error) {
        console.error(`Error loading description file: ${props.descriptionSrc} Error: ${error}`);
      }
    };

    loadDesc();
  });

  return (
    <div className='m-4 p-2'>
      <h3 className='projectTitle'>
        {props.projectName}
      </h3>

      <a href={props.link} target='_blank' rel='noreferrer'>
        <img className='rounded-xl hover:rounded-2xl hover:scale-[1.05] transition-all' src={props.image} />
      </a>

      <p className='text-gray-100'>
        <span className='font-bold'>Description:</span> {descriptionText}
      </p>
    </div>
  );
}

export default Project;