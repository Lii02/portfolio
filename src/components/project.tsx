import React, { useEffect, useState } from 'react';
import readText from '../util/read';

interface ProjectProps {
  projectName: string;
  descriptionSrc: string;
  link: string;
  image: string;
}

function Project(props: ProjectProps) {
  const [descriptionText, setDescriptionText] = useState<string>('');

  useEffect(() => {
    readText(props.descriptionSrc, (value: string) => {
      setDescriptionText(value);
    });
  }, []);

  return (
    <div className='m-2 projectBox'>
      <h3 className='projectTitle'>
        {props.projectName}
      </h3>

      <a href={props.link} target='_blank' rel='noreferrer'>
        <img className='rounded-xl hover:rounded-2xl hover:scale-[1.01] transition-all w-[100%]' src={props.image} />
      </a>

      <p className='text-gray-100'>
        <span className='font-bold'>Description:</span> {descriptionText}
      </p>
    </div>
  );
}

export default Project;