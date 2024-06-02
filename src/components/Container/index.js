import Loader from "../Loader";
import styles from "./Container.module.css"
import { useEffect, useState } from "react";

function Container({ children }) {

    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, [])

    return (
        <section className={styles.container}>
            { loading ? <Loader /> : children }
        </section>
    );
}

export default Container;