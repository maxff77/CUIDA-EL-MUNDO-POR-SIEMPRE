import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../imagenes/logo.png";

const Menu = () => {
  const sombra = useRef(null);
  const desplegable = useRef(null);
  const botonMovil = useRef(null);
  const header = useRef(null);

  return (
    <header ref={header}>
      <Link legacyBehavior href="/">
        <a className="logo">
          <Image src={logo} alt="Logo CMPS" width={75} height={75}></Image>
        </a>
      </Link>
      <button
        ref={botonMovil}
        className="movil"
        onClick={() => {
          header.current.classList.toggle("activa");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div ref={desplegable} className="desplegable">
        <ul onClick={() => header.current.classList.remove("activa")}>
          <li>
            <Link legacyBehavior href="#">
              <a>ENLACE</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#">
              <a>ENLACE</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#">
              <a>ENLACE</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#">
              <a>ENLACE</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#">
              <a>ENLACE</a>
            </Link>
          </li>
        </ul>
      </div>
      <span
        onClick={() => {
          header.current.classList.remove("activa");
        }}
        ref={sombra}
        className="sombra"
      ></span>
    </header>
  );
};

export default Menu;
