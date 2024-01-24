import React, { useState } from "react";
import styles from "./Header.module.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
 
function Header() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <header className={styles.header}>

            <p>Escrevendo algo so pra ver</p>
            <img className={styles.logo_web} src="/images/logos/RFN_LOGO_FINAL_05.png" alt="Logo" />
            <img className={styles.logo_mobile} src="/images/logos/RFN_LOGO_FINAL_02.png" alt="Logo_mobile" />
            
            <nav>
                <ul className={clicked ? classNames(styles.nav_list, styles.active) : styles.nav_list}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/areas-de-atuaçao">Áreas de Atuação</Link></li>
                    <li><Link to="/sobre-nós">Sobre nós</Link></li>
                    <li><Link to="/política-de-privacidade">Política de Privacidade</Link></li>
                </ul>
                <div className={clicked ? classNames(styles.mobile_menu, styles.active) : styles.mobile_menu } onClick={handleClick}>
                    <div className={ styles.line1 }></div>
                    <div className={ styles.line2 }></div>
                    <div className={ styles.line3 }></div>
                </div>
            </nav>
        </header>
    );
}

export default Header;