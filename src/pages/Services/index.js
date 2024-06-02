import Banner from "../../components/Banner";
import ButtonWhats from "../../components/Button_Whats";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container"
import Segmentos from "../../components/Segmentos";

function Services(){

    return(
        <section>
            <Header />
            <Banner banner={"areas_de_atuacao"} page={"Áreas de Atuação"} logo_banner={true}/>
            <Container className={StyleSheet.container}>
                <h1>Segmentos RFN</h1>
                <Segmentos title={"Proteção de Dados e LGPD"} video={"LGPD"}>
                    <p>Projeto de conformidade de Controladores à Lei Geral de Proteção de Dados.</p>
                    <p>Avaliação do nível de maturidade e conformidade de programa de privacidade e proteção de dados.</p>
                    <p>Elaboração de documentos (política interna e externa, termos de uso, termos de confidencialidade, etc.).</p>
                    <p>Revisão dos sistemas de segurança da informação.</p>
                    <p>Mapeamento de fluxos de tratamento de dados.</p>
                    <p>Defesas judiciais e administrativas.</p>
                    <p>Treinamentos no âmbito da LGPD.</p>
                    <p>Ajuizamento de ações judiciais.</p>
                    <p>Adequação de produto à LGPD.</p>
                    <p>Elaboração de contratos.</p>
                    <p>Resposta à incidentes.</p>
                    <p>Consultivo LGPD.</p>
                </Segmentos>
                <Segmentos right={true} title={"Direito Empresarial e Societário"} video={"direito_empresarial"}>
                    <p>Elaboração de contrato social, acordo de quotistas.</p>
                    <p>Planejamento negocial e conformidade à lei.</p>
                    <p>Dissolução total ou parcial de sociedade.</p>
                    <p>Assessoria na constituição de sociedades.</p>
                    <p>Planejamento societário.</p>    
                    <p>Assessoria empresarial.</p>
                    <p>Contratos empresariais.</p>
                    <p>Ação de exigir contas.</p>
                    <p>Apuração de haveres.</p>
                </Segmentos>
                <Segmentos title={"Direito Tributário"} video={"direito_tributario"}>
                    <p>Planejamento Tributário.</p>
                    <p>Precatórios.</p>
                    <p>Defesas em processos administrativos e judicias.</p>
                    <p>Administração de passivo tributário.</p>
                </Segmentos>
                <Segmentos right={true} title={"Direito Civil"} video={"direito_civil"}>
                    <p>Propositura de ações e defesas judiciais.</p>
                    <p>Cobranças.</p>
                    <p>Execução de títulos extrajudiciais.</p>
                    <p>Relações de consumo.</p>
                    <p>Mandado de segurança.</p>
                    <p>Alvarás.</p>
                    <p>Prestação de contas.</p>
                    <p>Consignação em pagamento.</p>
                    <p>Responsabilidade Civil.</p>
                </Segmentos>
                <Segmentos title={"Negociação e Elaboração de Contratos"} video={"negociacoes"}>
                    <p>Elaboração de minutas e contratos.</p>
                    <p>Acompanhamento junto a órgão públicos.</p>
                    <p>Negociações Extrajudiciais.</p>
                </Segmentos>
                <Segmentos right={true} title={"Direito de Família "} video={"direito_familia"}>
                    <p>Divórcio Extrajudicial e Judicial.</p>
                    <p>Guarda, visitas e alimentos.</p>
                    <p>Partilha de bens.</p>
                    <p>Interdições.</p>
                </Segmentos>
                <Segmentos title={"Direito Sucessório "} video={"direito_sucessorio"}>
                    <p>Inventários Extrajudiciais e Judiciais.</p>
                    <p>Testamento.</p>
                    <p>Doações.</p>
                    <p>Planejamento Sucessório.</p>
                    <p>Holding Familiar.</p>
                    <p>Retificações perante Cartórios e Tabelionatos.</p>
                </Segmentos>
                <Segmentos right={true} title={"Direito Imobiliário e Registral"} video={"direito_imobiliario"}>
                    <p>Elaboração de Contratos de Compra e Venda e de Locação.</p>
                    <p>Adequações registrais junto à Cartórios e Tabelionatos.</p>
                    <p>Ações Possessórias.</p>
                    <p>Usucapião.</p>
                    <p>Despejo.</p>
                    <p>Regularização de imóveis urbanos e rurais.</p>
                    <p>Assessoria Imobiliária.</p>
                </Segmentos>
                <Segmentos title={"Direito do Trabalho"} video={"direito do trabalho"}>
                    <p>Análise processos internos para mapear possíveis passivos trabalhista.</p>
                    <p>Análise e Elaboração de Contratos.</p>
                    <p>Auxílio na definição de processos de admissão e demissão.</p>
                    <p>Suporte na rotina de departamento pessoal.</p>
                    <p>Assessoramento em geral no que se refere ao âmbito trabalhista da empresa.</p>
                    <p>Propositura de ações.</p>
                    <p>Acompanhamento de ações.</p>
                    <p>Apresentação de defesas, recurso e impugnações.</p>
                    <p>Elaboração de pareceres em matéria trabalhista.</p>
                    <p>Implementação de Compliance Trabalhista.</p>
                </Segmentos>
                <Segmentos right={true} title={"Direito Previdenciário"} video={"direito_previdenciario"}>
                    <p>Planejamento previdenciário.</p>
                    <p>Requerimento de aposentadorias.</p>
                    <p>Benefícios por incapacidade.</p>
                    <p>Pensão por morte.</p>
                    <p>Salário-maternidade.</p>
                    <p>Revisões de benefícios.</p>
                </Segmentos>
                <Segmentos title={"Direito Penal"} video={"direito penal"}>
                    <p>Diligência em termo circunstanciado de Juizados Especiais Criminais.</p>
                    <p>Atuação em Inquérito Policial.</p>
                    <p>Defesa em processos judiciais.</p>
                </Segmentos>
            </Container>
            <ButtonWhats />
            <Footer />
        </section>
    );
}

export default Services;