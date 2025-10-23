import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ButtonWhats from "../../components/Button_Whats";
import Container from "../../components/Container";
import Carrossel from "../../components/Carrossel";
import CookieConsent from "../../components/CookieConsent";

import styles from "./Home.module.css"
import { useCookies } from "react-cookie";
import GoToTop from "../../components/GoToTop/GoToTop";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

function Home() {

  const [ loading, setLoading ] = useState(true)
  const [cookies] = useCookies(["cookieConsent"]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, [])

  return (
    <div>
      <Header/>
      {
        loading ? <Loader /> : <Banner banner={"home"} page={"Home"} logo_banner={false}/>
      }
        
        <Container className={styles.container}>
          <div className={styles.carrossel_area}>
            <h1>Estamos preparados para te atender<br/>em diversor segmentos</h1>
            <Carrossel />
          </div>
          <div>
            <h1>Equipe RFN</h1>
            <div className={styles.socios_area}>
              <h1>Sócios-Fundadores</h1>
              <div className={styles.socios}>
                <div className={styles.nome_socios}>
                  <img src="/images/equipe-rfn/carol.svg" alt="Caroline" />
                  <h2>Caroline Alana Friedrich</h2>
                </div>
                <div className={styles.nome_socios}>
                  <img src="/images/equipe-rfn/matheus.svg" alt="Matheus" />
                  <h2>Mateus Renard Machado</h2>
                </div>
                <div className={styles.nome_socios}>
                  <img src="/images/equipe-rfn/willian.svg" alt="Willian" />
                  <h2>Wilian Mauri Friedrich Neu</h2>
                </div>
                <div className={styles.nome_socios}>
                  <img src="/images/equipe-rfn/aline.svg" alt="Aline" />
                  <h2>Aline Rospa</h2>
                </div>
              </div>
            </div>  
          </div>
        </Container>
      <ButtonWhats />

      <Footer/>
      <GoToTop />
      {!cookies.cookieConsent && <CookieConsent />}
    </div>
  );
}

export default Home;
