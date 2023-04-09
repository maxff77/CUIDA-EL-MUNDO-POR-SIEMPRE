import "../styles/globals.css";
import Menu from "../componentes/Menu";
import NextNProgress from "nextjs-progressbar";
import Image from "next/image";
import logo from "../imagenes/logo.png";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Menu />
      <div className="wallpaper">
        <Image alt="" src={logo} />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
