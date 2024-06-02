import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ButtonWhats from "../../components/Button_Whats";
import Container from "../../components/Container";
import styles from "./AboutUs.module.css"
import CookieConsent from "../../components/CookieConsent";
import { useCookies } from "react-cookie";
import GoToTop from "../../components/GoToTop/GoToTop";

function AboutUs(){

    const [cookies] = useCookies(["cookieConsent"]);
    return(
        <section>
            <Header />
            <Banner banner={"sobrenos"} page={"Sobre nós"} logo_banner={true}/>
            <Container>
                <div className={styles.historia}>
                    <h1>História</h1>
                    <p>
                    O Renard Advocacia surge em 2017 através do desejo do seu sócio-fundador, Mateus Renard Machado, de desenvolver um
                    modelo de advocacia altamente exigente, personalizada e de acesso democrático. O escritório inicia suas atividades em 26
                    de outubro, mesma data de aniversário do fundador, em uma estrutura pocket, na rua Alberto Pasqualini 111, no centro de
                    Santa Maria. Com foco no direito imobiliário, sucessório e de família, a atuação estava voltada para a área cível.<br/><br/>
                    Com o avanço das atividades e o crescimento exponencial do escritório, alinhado a chegada de dois jovens colaboradores, a
                    arquitetura funcional ao tipo de negócio acaba ficando diminuta. Em 2021, em plena pandemia, surge a necessidade de
                    transferência da sede para um local mais amplo.<br/><br/>
                    O modelo de negócio se reinventa, agregando ao modo anterior três fatores fundamentais: agilidade, solução extrajudicial
                    dos conflitos e acompanhamento processual especializado, com antecipação de caminhos, todos com um único foco: gerar
                    ainda mais resultados satisfatórios aos nossos clientes.<br/><br/>
                    Nesse sentido, em abril de 2020, o escritório se transformou em uma sociedade de advogados, tendo com sócios-fundadores,
                    Mateus Renard Machado, Caroline Alana Friedrich e Wilian Friedrich Neu. Além da mudança de estrutura, o escritório passou a
                    atuar também nas áreas de Direito Empresarial, Lei Geral de Proteção de Dados, Penal, Previdenciário, Trabalhista, Tributário
                    e Administrativo.
                    </p>
                </div>
                <div className={styles.missao_visao_valores}>
                    <div className={styles.missao_visao}>
                        <div className={styles.missao}>
                            <h1>Missão</h1>
                            <p>
                            Através da seriedade e integridade de toda a equipe, buscamos promover as melhores soluções jurídicas, com foco na
                            resolução de demandas que proporcionem aos clientes segurança jurídica e inovação. Buscamos ser referência de escritório
                            full service na região central, pautados numa concepção de atuação butique, isto é, construção artesanal e individualizada
                            dos serviços.<br/><br/>
                            Nosso foco de atuação é voltado para a consolidação da confiança dos clientes, parceiros e colaboradores, sobretudo,
                            através do zelo no serviço realizado, pautado na relação de respeito, seriedade e dedicação à solução inteligente nas
                            demandas.
                            </p>
                        </div>
                        <div className={styles.visao}>
                            <h1>Visão</h1>
                            <p>
                            Acreditamos no Direito como ferramenta de aperfeiçoamento, evolução e humanização da sociedade. Nossa
                            atuação é pautada no comprometimento e focada na resolução integral da demanda, proporcionando um
                            resultado jurídico adequado e humanizado em contribuição coerente e evolutiva aos objetivos e negócios dos
                            clientes.<br/><br/>
                            Trabalho desenvolvido em equipe com unidade de ação e alicerçado no desenvolvimento artesanal da solução de
                            cada caso.
                            </p>
                        </div>
                    </div>
                    <div className={styles.valores}>
                        <h1>Valores</h1>
                        <li>ÉTICA</li>
                        <li>COMPROMETIMENTO</li>
                        <li>SERIEDADE</li>
                        <li>INTEGRIDADE</li>
                        <li>ZELO</li>
                        <li>UNIÃO</li>
                        <li>HUMANIDADE</li>
                        <li>SEGURANÇA</li>
                        <li>CRIATIVIDADE</li>
                        <li>FUNCIONALIDADE</li>
                    </div>
                </div>
                
            </Container>
            <ButtonWhats />
            <Footer />
            <GoToTop />
            {!cookies.cookieConsent && <CookieConsent />}
        </section>
    );
}

export default AboutUs;