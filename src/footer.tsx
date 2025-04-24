import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram"
import { Link } from "react-router-dom"

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`${className} min-h-[200px] bg-gradient-to-t from-[#04203B] via-[#04203B]/95 to-[#04203B]/90 text-white`}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-[#F6711E]/30 pb-12">
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 border-l-4 border-[#F6711E] pl-3">
              P&V Inversiones
            </h4>
            <p className="text-sm opacity-90 leading-relaxed">
              Especialistas en equipos de elevación industrial desde 1994
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 border-l-4 border-[#F6711E] pl-3">
              Enlaces rápidos
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/producto"
                className="hover:text-[#F6711E] transition-colors opacity-90"
              >
                Productos
              </Link>
              <Link
                to="/producto"
                className="hover:text-[#F6711E] transition-colors opacity-90"
              >
                Servicios
              </Link>
        
              <Link
                to="/contacto"
                className="hover:text-[#F6711E] transition-colors opacity-90"
              >
                Contacto
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4 border-l-4 border-[#F6711E] pl-3">
              Contacto
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#F6711E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Av. Interurbana. San Diego, Valencia</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-[#F6711E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(+58) 2414141652</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="text-xl font-bold mb-4 border-l-4 border-[#F6711E] pl-3">
              Redes sociales
            </h4>
            <div className="flex gap-4">
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiy96jEx7eLAxV2QjABHQqXAB8QFnoECDgQAQ&url=https%3A%2F%2Fwww.instagram.com%2Felevadoresdepersonalpv%2F%3Fhl%3Des&usg=AOvVaw1gFoovkkDirHbcRXy7UXCA&opi=89978449"
              target="_blank">
                <InstagramIcon  className="w-1o h-10 rounded hover:text-[#F6711E] transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-sm opacity-80">
          <p>
            © {new Date().getFullYear()} P&V Inversiones. Todos los derechos
            reservados
          </p>
          <p className="mt-2 font-mono text-xs tracking-wider text-white">
            Website by{" "}
            <a
              href="https://www.linkedin.com/in/gelvis-diego"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#F6711E] to-[#FFAA00] bg-clip-text font-bold text-transparent hover:text-[#F6711E] cursor-pointer"
            >
              Diego Gelvis
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
