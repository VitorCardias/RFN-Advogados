import Banner from "../../components/Banner";
import ButtonWhats from "../../components/Button_Whats";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Services(){
    return(
        <section>
            <Header />
            <Banner banner={"areas_de_atuacao"} page={"Áreas de Atuação"} logo_banner={true}/>
            <h1>Serviços</h1>
            <ButtonWhats />
            <Footer />
        </section>
    );
}

export default Services;