import React from "react";
import styles from "./Banner.module.css"
import classNames from "classnames";

function Banner({ banner, logo_banner , page }){

    const title = logo_banner;
    console.log(title);
    return (
        <section className={ title ? classNames(styles.container, styles.disappear) : styles.container }>
            <video 
                className={ styles.start_video }
                src={`/videos/video_banner_${banner}.mp4`}
                loop={true}
                muted={true}
                autoPlay={true}
            />
            <img className={styles.start_logo} src="/images/logos/RFN LOGO FINAL.svg" alt="Logo" />
            <h1 className={styles.title} >{ page }</h1>
        </section>
    );
}

export default Banner;