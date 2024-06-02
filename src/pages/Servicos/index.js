import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import styles from "./Servicos.module.css"
import CardSegmentos from "../../components/CardSegmentos";
import CookieConsent from "../../components/CookieConsent";
import { useCookies } from "react-cookie";

function Servicos() {

    const [cookies] = useCookies(["cookieConsent"]);
    return (
        <div>
            <Header />
            <Banner banner={"areas_de_atuacao"} page={"Áreas de Atuação"} logo_banner={true}/>
            <Container>
                <section className={styles.container}>
                    <h1>Segmentos RFN</h1>
                    <div className={styles.segmentos}>
                        <CardSegmentos icon="lgpd.svg" title="Proteção de Dados e LGPD">Uma breve descrição sobre o que cada segmento faz e é resposavel, assim para o cliente ter uma noção de como vai ficar</CardSegmentos>
                        <CardSegmentos icon="direito-empresarial.svg" title="Direito Empresarial e Societário">Uma breve descrição sobre o que cada segmento faz e é resposavel, assim para o cliente ter uma noção de como vai ficar</CardSegmentos>
                        <CardSegmentos icon="direito-civil.svg" title="Direito Civil">Uma breve descrição sobre o que cada segmento faz e é resposavel, assim para o cliente ter uma noção de como vai ficar</CardSegmentos>
                        <CardSegmentos icon="negociacoes.svg" title="Negociação e Elaboração de Contratos">Uma breve descrição sobre o que cada segmento faz e é resposavel, assim para o cliente ter uma noção de como vai ficar</CardSegmentos>
                        <CardSegmentos icon="direito-familia.svg" title="Direito de Família">Uma breve descrição sobre o que cada segmento faz e é resposavel, assim para o cliente ter uma noção de como vai ficar</CardSegmentos>
                        <CardSegmentos icon="direito-sucessorio.svg" title="Direito Sucessório">Uma breve descrição sobre o que cada segmento faz e é resposavel, assim para o cliente ter uma noção de como vai ficar</CardSegmentos>
                        <CardSegmentos icon="direito-imobiliario.svg" title="Direito Imobiliário e Registral">Uma breve descrição sobre o que cada segmento faz e é resposavel, assim para o cliente ter uma noção de como vai ficar</CardSegmentos>
                        <CardSegmentos icon="direito-trabalho.svg" title="Direito do Trabalho">Uma breve descrição sobre o que cada segmento faz e é resposavel, assim para o cliente ter uma noção de como vai ficar</CardSegmentos>
                        <CardSegmentos icon="direito-previdenciario.svg" title="Direito Previdenciário">Uma breve descrição sobre o que cada segmento faz e é resposavel, assim para o cliente ter uma noção de como vai ficar</CardSegmentos>
                        <CardSegmentos icon="direito-penal.svg" title="Direito Penal">Uma breve descrição sobre o que cada segmento faz e é resposavel, assim para o cliente ter uma noção de como vai ficar</CardSegmentos>
                        <CardSegmentos icon="direito-tributario.svg" title="Direito Tributário">Uma breve descrição sobre o que cada segmento faz e é resposavel, assim para o cliente ter uma noção de como vai ficar</CardSegmentos>
                    </div>
                </section>
            </Container>
            <Footer />
            {!cookies.cookieConsent && <CookieConsent />}
        </div>
    )
}

export default Servicos;