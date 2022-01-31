import React from 'react';
import Logo from "../../assets/images/capres.jpg";
import HeaderLayout from "../../layouts/HeaderLayout/HeaderLayout";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderLayout>
      <>
        <a href="/" className="grow-0">
          <img
            src={Logo}
            alt="Logo Capres"
            className="absolute md:relative w-30 inset-x-0 -bottom-12 mx-auto md:inset-0 md:w-20 h-auto"
          />
        </a>
        <div className="md:hidden w-10 h-auto grow text-2xl absolute top-4 md:relative md:top-auto text-grisCapres-200">
          <FaBars />
        </div>
        <div>
          <nav className="flex justify-between hidden self-center md:block  text-grisCapres-200 md:space-x-4">
            {[
              ["Inicio", "/inicio"],
              ["Nosotros", "/nosotros"],
              ["Socios", "/socios"],
              ["Delegados", "/delegados"],
              ["Servicios", "/servicios"],
              ["Descargas", "/descargas"],
              ["Contacto", "/contacto"],
            ].map(([title, url]) => (
              <Link
                to={url}
                key={title}
                className="rounded-lg px-3 py-2  font-regular hover:text-grisCapres-100"
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>
        <Button
          variant="outlined"
          size="large"
          className="hidden md:inline-block grow-0 "
        >
          Registro
        </Button>
      </>
    </HeaderLayout>
  );
};

export default Header;
