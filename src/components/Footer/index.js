import styles from "./Footer.module.css"

function Footer(){
    return(
        <section className={ styles.container }>
            <div>
                <div className={ styles.image }>
                    <img className={ styles.footer_logo } src="/images/logos/RFN LOGO FINAL.png" alt="Logo" />
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
                                Segunda-feira: 8:00 - 12:00 às 13:00 - 20:30 <br/>
                                Terça-feira: 8:00 - 12:00 às 13:00 - 20:30 <br/>
                                Quarta-feira: 8:00 - 12:00 às 13:00 - 20:30 <br/>
                                Quinta-feira: 8:00 - 12:00 às 13:00 - 20:30 <br/>
                                Sexta-feira: 8:00 - 12:00 às 13:00 - 20:30 <br/>
                            </p>
                        </div>
                        <div>
                            <h3>Mapa do Site</h3>
                            <a href="#">• Inicio</a><br/>
                            <a href="areas-de-atuaçao">• Areas de Atuação</a><br/>
                            <a href="sobre-nós">• Sobre nós</a><br/>
                            <a href="política-de-privacidade">• Politicas de Privacidade</a><br/>
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