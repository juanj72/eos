import React, { useState } from "react";

interface LateralMenuProps {
  children?: React.ReactNode; // Define que puede recibir `children` opcionalmente
}

export const LateralMenu: React.FC<LateralMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar la barra lateral

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen ">
      {/* Botón del menú */}
      <button
        className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md "
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Barra lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-900 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={toggleSidebar}
        >
          ×
        </button>
        <nav className="mt-16">
          <ul className="space-y-4 px-6">
            <li>
              <a href="#home" className="hover:text-blue-400">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-400">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto my-16">
        {/* Renderiza el contenido anidado */}
        {children}
      </div>
    </div>
  );
};
