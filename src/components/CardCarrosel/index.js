import styles from "./CardCarrosel.module.css"

const images = [
    "direito-civil.svg",
    "direito-do-trabalho.svg",
    "direito-familia.svg",
    "direito-imobiliario.svg",
    "direito-penal.svg",
    "direito-previdenciario.svg",
    "direito-sucessorio.svg",
    "direito-tributario.svg",
    "direito-empresarial.svg",
    "LGPD.svg",
    "negociacoes.svg",
    "direito-bancario.svg",
    "direito-medico.svg",
    "direito-consumidor.svg",
    "direito-agronegocio.svg",

    
];
function CardCarrosel({ index, title }){
    return(
        <section className={styles.container}>
            <div className={styles.card}>
                <img src={`/images/card-carrosel/${images[index]}`} alt={`${images[index]}`} />
                <div className={styles.card_title}>
                    <p>{title}</p>
                </div>
            </div>
        </section>
    );
}

export default CardCarrosel;