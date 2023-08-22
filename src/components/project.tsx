import React, { useEffect, useState } from 'react';

function Project({ projectName, descriptionSrc, link, image }) {
  const [descriptionText, setDescriptionText] = useState<string>('');

  useEffect(() => {
    const loadDesc = async () => {
      try {
        const res = await fetch(descriptionSrc);
        const text = await res.text();
        setDescriptionText(text);
      } catch (error) {
        console.error(`Error loading description file: ${descriptionSrc} Error: ${error}`);
      }
    }

    loadDesc();
  });

  return (
    <div className='bg-neutral-800 rounded-md'>
      <h3 className='projectTitle'>
        {projectName}
      </h3>

      <a href={link} target='_blank'>
        <img className='rounded-3xl scale-75 hover:rounded-xl hover:scale-90 transition-all' src={image} />
      </a>

      <p className='text-gray-100'>
        <span className='font-bold'>Description:</span> {descriptionText}
      </p>
    </div>
  );
}

export default Project;