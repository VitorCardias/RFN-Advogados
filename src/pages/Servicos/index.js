import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import styles from "./Servicos.module.css"
import CardSegmentos from "../../components/CardSegmentos";
import CookieConsent from "../../components/CookieConsent";
import { useCookies } from "react-cookie";
import GoToTop from "../../components/GoToTop/GoToTop";

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
                        <CardSegmentos icon="lgpd.svg" title="Proteção de Dados e LGPD">Oferecemos consultoria especializada para garantir que sua empresa esteja em conformidade com a Lei Geral de Proteção de Dados (LGPD), implementando práticas de segurança e privacidade de dados. Auxiliamos na adequação de processos, elaboração de políticas internas e resposta a incidentes de segurança, protegendo os dados pessoais de seus clientes e colaboradores.</CardSegmentos>
                        <CardSegmentos icon="direito-empresarial.svg" title="Direito Empresarial e Societário">Fornecemos assessoria jurídica completa para empresas em questões contratuais, societárias e de compliance. Nossa equipe auxilia na estruturação e reorganização de sociedades, fusões e aquisições, elaboração de contratos comerciais, e implementação de boas práticas de governança corporativa, garantindo segurança jurídica para o crescimento e sucesso do seu negócio.</CardSegmentos>
                        <CardSegmentos icon="direito-civil.svg" title="Direito Civil">Atuamos em diversas áreas do direito civil, oferecendo suporte jurídico em questões relacionadas a contratos, indenizações, direito de família, sucessões, e direitos reais. Nossa equipe está preparada para representar e orientar nossos clientes em litígios, negociações e na resolução de conflitos, sempre buscando soluções eficientes e justas.</CardSegmentos>
                        <CardSegmentos icon="negociacoes.svg" title="Negociação e Elaboração de Contratos">Especializamos na criação e revisão de contratos comerciais e civis, assegurando que seus interesses sejam protegidos. Nossa equipe oferece suporte em todas as etapas da negociação, desde a definição de termos até a formalização do acordo, garantindo clareza, legalidade e segurança jurídica em todas as suas transações.</CardSegmentos>
                        <CardSegmentos icon="direito-familia.svg" title="Direito de Família">Prestamos assessoria jurídica em questões relacionadas a divórcio, guarda de filhos, pensão alimentícia, adoção e planejamento sucessório. Nossa abordagem é humanizada e confidencial, buscando sempre soluções que atendam aos melhores interesses das famílias envolvidas, com foco na resolução amigável de conflitos.</CardSegmentos>
                        <CardSegmentos icon="direito-sucessorio.svg" title="Direito Sucessório">Oferecemos consultoria e suporte jurídico em questões relacionadas a inventários, testamentos, planejamento sucessório e partilha de bens. Nosso objetivo é auxiliar nossos clientes a garantir uma transição tranquila e legalmente segura dos seus bens para os herdeiros, prevenindo disputas e assegurando a vontade do falecido.</CardSegmentos>
                        <CardSegmentos icon="direito-imobiliario.svg" title="Direito Imobiliário e Registral">Atuamos em todas as fases de transações imobiliárias, oferecendo assessoria em compra, venda, locação, regularização de imóveis e questões registrárias. Nossa equipe garante a segurança jurídica em operações imobiliárias, auxiliando na análise de documentação, elaboração de contratos e resolução de disputas envolvendo propriedades.</CardSegmentos>
                        <CardSegmentos icon="direito-trabalho.svg" title="Direito do Trabalho">Fornecemos consultoria e representação em questões trabalhistas, tanto para empregados quanto para empregadores. Nossa equipe auxilia em disputas judiciais, acordos trabalhistas, questões de rescisão, direitos e deveres trabalhistas, sempre buscando soluções justas e conforme a legislação vigente.</CardSegmentos>
                        <CardSegmentos icon="direito-previdenciario.svg" title="Direito Previdenciário">Oferecemos assessoria especializada em questões relacionadas à Previdência Social, incluindo aposentadorias, benefícios por incapacidade, pensões e demais direitos previdenciários. Nossa equipe está preparada para orientar e representar nossos clientes em processos administrativos e judiciais, garantindo o acesso aos seus direitos previdenciários de forma justa e eficaz.</CardSegmentos>
                        <CardSegmentos icon="direito-penal.svg" title="Direito Penal">Oferecemos defesa jurídica em casos criminais, abrangendo desde delitos comuns até questões mais complexas. Nossa equipe está comprometida em garantir os direitos e interesses de nossos clientes, buscando sempre a melhor estratégia para sua defesa e atuação nos processos criminais.</CardSegmentos>
                        <CardSegmentos icon="direito-tributario.svg" title="Direito Tributário">Prestamos consultoria jurídica abrangente em matéria tributária, incluindo planejamento fiscal, contencioso administrativo e judicial, e assuntos relacionados à legislação tributária. Nossa equipe está comprometida em encontrar soluções eficientes e estratégicas para minimizar a carga tributária de nossos clientes e garantir sua conformidade com a legislação vigente.</CardSegmentos>
                    </div>
                </section>
            </Container>
            <Footer />
            <GoToTop />
            {!cookies.cookieConsent && <CookieConsent />}
        </div>
    )
}

export default Servicos;