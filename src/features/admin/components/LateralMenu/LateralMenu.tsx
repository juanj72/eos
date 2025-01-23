import React, { useState } from "react";
import { ImMenu } from "react-icons/im";
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa"; // Importa los íconos que deseas usar

interface LateralMenuProps {
  children?: React.ReactNode; // Define que puede recibir `children` opcionalmente
}

export const LateralMenu: React.FC<LateralMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar la barra lateral

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Botón del menú */}
      <button
        className="fixed top-4 left-4 z-50 bg-blue-900 text-white p-2 rounded-md"
        onClick={toggleSidebar}
      >
        <ImMenu />
      </button>

      {/* Barra lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-600 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={toggleSidebar}
        >
          ×
        </button>
        <nav className="mt-16 pt-40">
          <ul className="space-y-6 px-6">
            <li className="flex items-center gap-4 text-lg">
              <FaHome className="text-blue-900" /> {/* Ícono de inicio */}
              <a href="#home" className="hover:text-blue-900 ">
                Inicio
              </a>
            </li>
            <li className="flex items-center gap-4 text-lg">
              <FaInfoCircle className="text-blue-900" />{" "}
              {/* Ícono de acerca de */}
              <a href="#about" className="hover:text-blue-900">
                Acerca de
              </a>
            </li>
            <li className="flex items-center gap-4 text-lg">
              <FaServicestack className="text-blue-900" />{" "}
              {/* Ícono de servicios */}
              <a href="#services" className="hover:text-blue-900">
                Servicios
              </a>
            </li>
            <li className="flex items-center gap-4 text-lg">
              <FaEnvelope className="text-blue-900" /> {/* Ícono de contacto */}
              <a href="#contact" className="hover:text-blue-900">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Contenido principal */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {/* Renderiza el contenido anidado */}
        {children}
      </div>
    </div>
  );
};
