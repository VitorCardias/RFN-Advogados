import styles from "./Button_Whats.module.css"

function ButtonWhats(){
    return(
        <section className={styles.container}>
            <a href="https://api.whatsapp.com/send?phone=555530282862" target="_blank" rel="noreferrer noopener">
                <img src="/images/icons/button-whats.svg" alt="WhatsApp Button" />
            </a>
        </section>
    );
}

export default ButtonWhats;