import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Button } from "../../components/Button";
import { HeaderPage } from "../../components/HeaderPage";
import { MyImage } from "../../components/MyImage";
import { Footer } from "../../components/Footer";
import { Title } from "../../components/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./styles.module.scss";


export default function Tratamentos() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  function agendarConsulta() {
    gtag.event({
      action: "agendar_consulta",
      category: "marcar_consulta_whatsapp",
      label: "Novo Contato",
      value: "Orçamento",
    });
  }

  return (
    <>
      <Head>
        <title>Palio Weekend Locker | ADS Auto </title>
        <meta
          name="description"
          content="As melhores marcas. Produtos certificados e qualificados"
        />
        <meta
          name="keywords"
          content="eletro santa clara, materiais elétricos, média tensão,ferragens, alta tensão, tomada, interruptor, disjuntor, contator, para-raio, poste, transformador"
        />
        <meta name="author" content=" Eletro Santa Clara" />
      </Head>
 {/*
      <div>         
          <HeaderPage subtitle=" " title="Palio Weekend Locker " />  
      </div> */} 

      <main className={`${styles.treatments} mainContainer`}>
       </main>
      <section className={styles.images}>
          <Title title="Palio Weekend Locker" subtitle=" 2010 Completa " />    
          <div align="center">
          <Button
                onClick={agendarConsulta}
                link="https://wa.me//5514997406893?text= Olá, eu vim da sua página de ADS Auto e me interessei pelo veículo Palio Adventure Locker "
              >
                <img src="/icons/whatsIcon.svg" alt="whatsapp" />
                Fale com o Vendedor
         </Button>   
             </div>
 

        <ul className={`${styles.imagesContainer} mainContainer`}>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/week1.jpeg"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/week2.jpeg"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/week3.jpeg"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/week4.jpeg"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/week5.jpeg"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
          <li data-aos="zoom-in-up">
            <Image
              src="/images/week6.jpeg"
              alt="Produtos em Destaque"
              width={460}
              height={390}
              objectFit="cover"
            />
          </li>
        </ul>
      </section>

      <Footer />
    </>
  );
}
