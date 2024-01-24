import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ButtonWhats from "../../components/Button_Whats";

function AboutUs(){
    return(
        <section>
            <Header />
            <Banner banner={"sobrenos"} page={"Sobre nós"} logo_banner={true}/>
            <h1>Sobre nós</h1>
            <ButtonWhats />
            <Footer />
        </section>
    );
}

export default AboutUs;