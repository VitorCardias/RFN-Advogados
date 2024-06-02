import styles from "./Loader.module.css"

function Loader(){

    return (
        <section className={styles.container}>
            <span className={styles.carregando}></span>
        </section>
    );
}
export default Loader;