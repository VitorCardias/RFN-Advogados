import { Link } from "react-router-dom";
import styles from "./CookieConsent.module.css"
import { useCookies } from 'react-cookie';

function CookieConsent(){

    const[cookies, setCookie] = useCookies(["cookieConsent"]);
    const giveCookieConsent = () => {

        setCookie("cookieConsent", true, {path: "/"});
    };

    return(
        <section className={styles.background}>
            <div className={styles.container}>
                <p>
                    Utilizamos cookies para melhorar sua experiência no nosso site. Ao continuar navegando, você concorda com a nossa Política de Cookies. Para mais informações sobre os cookies que usamos e como gerenciá-los, acesse nossa {" "}
                    <Link to={"/política-de-privacidade"}>Política de Privacidade</Link>
                </p>
                <button onClick={giveCookieConsent}>Aceitar</button>
            </div>
        </section>

    );
}

export default CookieConsent;