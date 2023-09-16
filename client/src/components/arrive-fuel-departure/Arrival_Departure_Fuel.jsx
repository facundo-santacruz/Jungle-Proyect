import React from 'react'
import styles from "../arrive-fuel-departure/Arrival_Departure_Fuel.module.css";
import Lancha from "../../images/Lancha.jpg";
import Camion from "../../images/camion.jpg";

const Arrival_Departure_Fuel = ({ text }) => {
    return (
        <div className={styles.primary_container}>
            <div className={styles.secondary_container}>
                <div className={styles.image_container}>
                    <img src={Lancha} className={styles.image} />
                    <text> LLegada {text} </text>
                </div>
                <div className={styles.image_container}>
                    <img src={Camion} className={styles.image} />
                    <text> Salida {text} </text>
                </div>
                <div className={styles.image_container}>
                    <img src={Camion} className={styles.image} />
                    <text> Combustible {text} </text>
                </div>
            </div>
        </div>
    )
}

export default Arrival_Departure_Fuel