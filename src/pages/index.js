import Head from "next/head";
import Image from "next/image";
import "swiper/css/bundle";
import styles from "../styles/home.module.css";
import stylesSwiper from "../styles/slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Pagination, Navigation, Autoplay } from "swiper";

import image1 from "../imagenes/Sliders/image1.png";
import image2 from "../imagenes/Sliders/image2.png";
import image3 from "../imagenes/Sliders/image3.png";
import image4 from "../imagenes/Sliders/image4.png";
import image5 from "../imagenes/Sliders/image5.png";
import image6 from "../imagenes/Sliders/image6.png";
import image7 from "../imagenes/Sliders/image7.png";
import image8 from "../imagenes/Sliders/image8.png";
import image9 from "../imagenes/Sliders/image9.png";
import image10 from "../imagenes/Sliders/image10.png";
import image11 from "../imagenes/Sliders/image11.png";
import image12 from "../imagenes/Sliders/image12.png";
import image13 from "../imagenes/Sliders/image13.png";
import image14 from "../imagenes/Sliders/image14.png";
import image15 from "../imagenes/Sliders/image15.png";
import image16 from "../imagenes/Sliders/image16.png";
import image17 from "../imagenes/Sliders/image17.png";
import image18 from "../imagenes/Sliders/image18.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>CUIDEMOS EL MUNDO POR SIEMPRE</title>
      </Head>
      <div id="body" className={styles.body}>
        <section className={styles.section}>
          <h1 className={styles.title}>
            ¿Qué es el medio ambiente y por qué es importante para nosotros?
          </h1>
          <div className={styles.contentText}>
            El <span className={styles.styleBold}>medio ambiente</span> se
            refiere al conjunto de elementos naturales y artificiales que rodean
            a los seres vivos, incluyendo el aire, el agua, el suelo, la flora y
            la fauna. Es <span className={styles.styleBold}>importante</span>{" "}
            para <span className={styles.styleBold}>nosotros </span>
            porque es el hogar de todas las formas de vida en la Tierra,
            incluyendo a los seres humanos, y proporciona los recursos
            necesarios para nuestra supervivencia y bienestar. Además, el medio
            ambiente es esencial para la calidad de vida y la salud humana, y su
            deterioro puede tener graves consecuencias para la biodiversidad, el
            clima, los recursos naturales y la estabilidad social y económica.
            Por lo tanto, es importante cuidar el medio ambiente y tomar medidas
            para protegerlo y preservarlo para las generaciones futuras.
          </div>
          <div className={stylesSwiper.slider}>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className={stylesSwiper.contentSlide}
            >
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image1} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image2} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image3} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image4} />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className={styles.section}>
          <h1 className={styles.title}>
            ¿Cuáles son los principales problemas ambientales que enfrentamos
            hoy en día?
          </h1>
          <div className={styles.contentText}>
            Los{" "}
            <span className={styles.styleBold}>
              principales problemas ambientales
            </span>{" "}
            que enfrentamos <span className={styles.styleBold}>hoy en dia</span>{" "}
            incluyen la contaminación del aire y del agua, el cambio climático,
            la deforestación y la pérdida de biodiversidad. La actividad humana,
            incluyendo la quema de combustibles fósiles, la agricultura
            intensiva, la tala de árboles y la urbanización, es la principal
            causa de estos problemas.
          </div>
          <div className={stylesSwiper.slider}>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className={stylesSwiper.contentSlide}
            >
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image5} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image6} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image7} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image8} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image9} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image10} />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section className={styles.section}>
          <h1 className={styles.title}>
            ¿Cómo podemos reducir nuestra huella de carbono y disminuir el
            impacto ambiental?
          </h1>
          <div className={styles.contentText}>
            Para <span className={styles.styleBold}>reducir</span> nuestra{" "}
            <span className={styles.styleBold}>huella de carbono</span> y{" "}
            <span className={styles.styleBold}>disminuir</span> el{" "}
            <span className={styles.styleBold}>impacto ambiental</span>, hay una
            serie de acciones que podemos tomar:
            <ol>
              <li>
                Reduce el consumo de energía: reduce el consumo de energía en
                casa y en el trabajo. Apaga las luces y los electrodomésticos
                cuando no los estés utilizando, usa bombillas de bajo consumo,
                utiliza dispositivos electrónicos eficientes en energía, entre
                otros.
              </li>
              <li>
                Usa medios de transporte sostenibles: utiliza medios de
                transporte sostenibles como la bicicleta, el transporte público
                o comparte tu vehículo con otras personas.
              </li>
              <li>
                Reduce el consumo de agua: utiliza la cantidad de agua necesaria
                y no la desperdicies. Usa tecnologías más eficientes, como
                dispositivos ahorradores de agua.
              </li>
              <li>
                Reduce el consumo de productos de plástico: reduce el consumo de
                productos de plástico de un solo uso y utiliza alternativas
                sostenibles, como productos reutilizables o biodegradables.
              </li>
              <li>
                Reduce el consumo de productos de plástico: reduce el consumo de
                productos de plástico de un solo uso y utiliza alternativas
                sostenibles, como productos reutilizables o biodegradables.
              </li>
            </ol>
          </div>
          <div className={stylesSwiper.slider}>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className={stylesSwiper.contentSlide}
            >
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image11} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image12} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image13} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image14} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image15} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image16} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image17} />
              </SwiperSlide>
              <SwiperSlide>
                <Image alt="¡Cuida el ambiente!" src={image18} />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
}
