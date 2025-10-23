import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

function Footer(){
    return(
        <section className={ styles.container }>
            <div>
                <div className={ styles.image }>
                    <img className={ styles.footer_logo } src="/images/logos/RFN LOGO FINAL.svg" alt="Logo" />
                </div>

                <div className={styles.footer_info}>
                    <div className={ styles.footer_content }>
                        <div>
                            <h3>Nosso Endereço</h3>
                            <h4>Santa Maria - RS</h4>
                            <div className={styles.text}><img src="/images/icons/footer/espaco-reservado.png" alt="" /><p>Rua 17 de Maio, n° 205, sala 203</p></div>
                            <div className={styles.text}><img src="/images/icons/footer/telefone.png" alt="" /><p>(55) 3028-2862</p></div>
                            <div className={styles.text}><img src="/images/icons/footer/e-mail.png" alt="" /><p>rfn.advocacia@gmail.com</p></div>
                        </div>
                        <div>
                            <h3>Horários de Atendimento</h3>
                            <p>
                                Segunda a Sexta das 8:00 às 20:30
                            </p>
                        </div>
                        <div>
                            <h3>Mapa do Site</h3>
                            <Link to="/">• Inicio</Link><br/>
                            <Link to="/areas-de-atuacao">• Areas de Atuação</Link ><br/>
                            <Link to="/sobre-nos">• Sobre nós</Link ><br/>
                            <Link to="/politica-de-privacidade">• Politicas de Privacidade</Link ><br/>
                        </div>
                        <div>
                            <h3>Redes Sociais</h3>
                            <div className={styles.text}><img src="/images/icons/footer/instagram.png" alt="" /><a href="https://www.instagram.com/rfnadvogados/" target="_blank" rel="noreferrer noopener">Instagram</a></div>
                            <div className={styles.text}><img src="/images/icons/footer/facebook.png" alt="" /><a href="https://www.facebook.com/profile.php?id=100086278620367&paipv=0&eav=AfaHFUcmOsiz_MO7sgkqnkqJ8eQnY49eMaNkkF3JNXh9bEWvw5Po_UMB5BnNogHFcYo" target="_blank" rel="noreferrer noopener">Facebook</a></div>
                            <div className={styles.text}><img src="/images/icons/footer/whatsapp.png" alt="" /><a href="https://api.whatsapp.com/send?phone=555530282862" target="_blank" rel="noreferrer noopener">WhatsApp</a></div>
                        </div>
                    </div>
                </div>

                <div className={ styles.footer_copyright }>
                    <p>&copy; 2024 Renard, Friedrich & Neu<br />Advogados associados</p>
                </div>

            </div>
        </section>
    );
}

export default Footer;