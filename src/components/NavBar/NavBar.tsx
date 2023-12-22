import React from 'react';

function NavBar() {
  return (
    <nav className="bg-black p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo o nombre de la aplicación */}
          <div className="text-white text-lg font-bold">Mi Portafolio</div>

          {/* Menú de navegación */}
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Contacto
              </a>
            </li>
            {/* Agrega más elementos del menú según tus necesidades */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
