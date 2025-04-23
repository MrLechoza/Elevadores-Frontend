import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importa Link de React Router

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-100 text-[#04203B] font-semibold bg-opacity-75 shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-inter font-bold">
          Elevadores Venezuela
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link
                to="/producto"
                className="relative text-[14px] font-inter transition group py-1"
              >
                Elevadores
                <span
                  className={`absolute left-0 right-0 bottom-0 h-0.5 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                    isScrolled ? "bg-[#04203B]" : "bg-white"
                  }`}
                />
              </Link>
            </li>
            <li>
              <a
                href="#servicios"
                className="relative text-[14px] font-inter transition group py-1"
              >
                Servicios
                <span
                  className={`absolute left-0 right-0 bottom-0 h-0.5 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                    isScrolled ? "bg-[#04203B]" : "bg-white"
                  }`}
                />
              </a>
            </li>
            <li>
              <Link
                to="/contacto"
                className="relative text-[14px] font-inter transition group py-1"
              >
                Contacto
                <span
                  className={`absolute left-0 right-0 bottom-0 h-0.5 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                    isScrolled ? "bg-[#04203B]" : "bg-white"
                  }`}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;