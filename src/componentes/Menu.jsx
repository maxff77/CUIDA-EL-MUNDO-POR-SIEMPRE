import Image from "next/image";
import logo from "../imagenes/logo-CMPS.webp";

const Menu = () => {
  return (
    <header>
      <Image src={logo} alt="Logo CMPS" width={150} height={201}></Image>
    </header>
  );
};

export default Menu;
