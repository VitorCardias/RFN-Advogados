import classNames from "classnames";
import styles from "./Segmentos.module.css"
import React from 'react';

function Segmentos({right=false, video, title, children}) {

    return (
        <section className={right ? classNames(styles.container, styles.right) : styles.container}>
            <div className={right ? classNames(styles.segmento_content, styles.right) : styles.segmento_content}>
                <div className={right ? classNames(styles.div_video, styles.right) : styles.div_video}>
                    <video 
                        className={styles.video}
                        src={`/videos/segmentos/${video}.mp4`}
                        loop={true}
                        muted={true}
                        autoPlay={true}
                    />
                </div>
                <div className={right ? classNames(styles.content, styles.right) : styles.content}>
                    <h3 className={right ? classNames(styles.title, styles.right) : styles.title}>{title}</h3>
                    <div className={right ? classNames(styles.content_text, styles.right) : styles.content_text}>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Segmentos;