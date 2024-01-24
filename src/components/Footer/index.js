import styles from "./Footer.module.css"

function Footer(){
    return(
        <section className={ styles.container }>
            <div>
                <img className={ styles.footer_logo} src="/images/logos/RFN LOGO FINAL.png" alt="Logo" />
                <div>
                    <a href="https://api.whatsapp.com/send?phone=555530282862" target="_blank" rel="noreferrer noopener">
                        <img className={ styles.icon_footer } src="/images/icons/icon-whats.svg" alt="icon-whats" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100086278620367&paipv=0&eav=AfaHFUcmOsiz_MO7sgkqnkqJ8eQnY49eMaNkkF3JNXh9bEWvw5Po_UMB5BnNogHFcYo" target="_blank" rel="noreferrer noopener">
                        <img className={ styles.icon_footer } src="/images/icons/icon-facebook.svg" alt="icon-facebook" />
                    </a>
                    <a href="https://www.instagram.com/rfnadvogados/" target="_blank" rel="noreferrer noopener">
                        <img className={ styles.icon_footer } src="/images/icons/icon-insta.svg" alt="icon-insta" />
                    </a>
                </div>
                <p>Endereço: Rua 17 de Maio, n° 205, sala 203 - Santa Maria - RS </p>
                <p>Telefone: 55 3028-2862</p>
                <p>Email: rfn.advocacia@gmail.com</p>
                <p>Horário de atendimento: Segunda-feira à Sexta-feira : 8:00 - 12:00 às 13:00 - 20:30</p>
                <p>&copy; 2024 Renard, Friedrich & Neu</p>
                <p>Advogados associados.</p>
            </div>
        </section>
    );
}

export default Footer;