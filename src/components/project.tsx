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
      <p className='font-roboto font-bold italic text-gray-200 text-center'>
        { projectName }
      </p>

      <a href={link} target='_blank'>
        <img className='rounded-3xl scale-75 hover:rounded-xl hover:scale-90 transition-all' src={image} />
      </a>

      <p className='text-gray-100 font-roboto'>
        <span className='font-bold'>Description:</span> {descriptionText}
      </p>
    </div>
  );
}

export default Project;