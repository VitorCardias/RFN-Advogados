import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import ButtonWhats from "../../components/Button_Whats";


function Home() {
  return (
    <div>
      <Header/>
      <Banner banner={"home"} page={"Home"} logo_banner={false}/>
      
      <ButtonWhats />
      <Footer/>
    </div>
  );
}

export default Home;
