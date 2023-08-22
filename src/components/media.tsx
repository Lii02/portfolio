import React from "react";

function Media() {
  return (
    <div className='bg-gray-500'>
      <h1 className='font-roboto text-xl text-white text-center justify-center'>
        Media
      </h1>

      <div className='flex justify-center'>
        <iframe frameBorder='0' src='https://itch.io/embed/1265642' width="552" height="167"><a href='https://lii02dev.itch.io/hoddsmimir'>Hoddsmimir by Li Studios</a></iframe>
        <iframe width='560' height='315' src='https://www.youtube.com/embed/LSZFdzhyNt4' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default Media;