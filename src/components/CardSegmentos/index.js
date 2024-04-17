import style from "./CardSegmentos.module.css"

function CardSegmentos({icon, title, children}){
    return(
        <div className={style.container}>
            <div className={style.image}>
                <div className={style.icon}>
                    <img src={`/images/icons/segmentos/${icon}`} alt="icone" />
                </div>
                <h2>{title}</h2>
            </div>
            <div className={style.text}>
                <p>{children}</p>
            </div>
        </div>
    );
}

export default CardSegmentos;