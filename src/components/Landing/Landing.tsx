'use client'

import React, { useState, useEffect } from 'react';

function Landing() {
  const [background, setBackground] = useState('bg-gray-900');
  const [wiggle, setWiggle] = useState('');

  const changeBackground = (newBackground: React.SetStateAction<string>) => {
    setBackground(newBackground);
    // Aplicar la clase wiggle temporalmente
    setWiggle('animate-wiggle');

    // Quitar la clase después de 500 ms (puedes ajustar este valor según tus preferencias)
     setTimeout(() => {
       setWiggle('');
     }, 500);
  };

  return (
    <div className={`flex flex-col items-center ${background} transition-all ease-out duration-500 min-h-screen`}>
      <div className='flex justify-around w-full mt-20'>
        <button
          className={`bg-red-600 ease-out duration-500 ${wiggle} rounded-lg px-3 py-2 border`}
          onClick={() => changeBackground('bg-yellow-500')}
        >
          Item 1
        </button>
        <button
          className='bg-orange-500 transition rounded-lg px-3 py-2 hover:text-gray-300 border'
          onClick={() => changeBackground('bg-yellow-300')}
        >
          Item 2
        </button>
        <button
          className='bg-yellow-500 transition rounded-lg px-3 py-2 hover:text-gray-300  border'
          onClick={() => changeBackground('bg-yellow-800')}
        >
          Item 3
        </button>
      </div>

      <section className="contact">
        <h2>Contacto</h2>
        <p>
          ¡Estoy abierto a nuevas oportunidades y colaboraciones! No dudes en ponerte en contacto conmigo a través de [tu dirección de correo electrónico] o [tu perfil de LinkedIn / GitHub].
        </p>
      </section>
    </div>
  );
}

export default Landing;
