import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ButtonWhats from "../../components/Button_Whats";
import Container from "../../components/Container";
import Carrossel from "../../components/Carrossel";
import ContactButtons from "../../components/ContactButtons";

import styles from "./Home.module.css"

function Home() {


  return (
    <div>
      <Header/>
      <Banner banner={"home"} page={"Home"} logo_banner={false}/>
      
      <Container className={styles.container}>
        <div className={styles.carrossel_area}>
          <h1>Estamos preparados para te atender<br/>em diversor segmentos</h1>
          <Carrossel />
        </div>
        
        <div className={styles.socios_area}>
          <h1>Socios Fundadores</h1>
          <div className={styles.socios}>
            <img src="/images/equipe-rfn/caroline.svg" alt="Caroline" />
            <img src="/images/equipe-rfn/matheus.svg" alt="Matheus" />
            <img src="/images/equipe-rfn/willian.svg" alt="Willian" />
          </div>
        </div>

        <div className={styles.contato_area}>
            <h1>Fale conosco atraves dos seguintes canais:</h1>
            <ContactButtons />
        </div>

      </Container>

      <ButtonWhats />
      <Footer/>
    </div>
  );
}

export default Home;
