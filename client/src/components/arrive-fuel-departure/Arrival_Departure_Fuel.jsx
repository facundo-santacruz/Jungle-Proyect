import React from 'react'
import styles from "../arrive-fuel-departure/Arrival_Departure_Fuel.module.css";
import Lancha from "../../images/Lancha.jpg";
import Camion from "../../images/camion.jpg";

const Arrival_Departure_Fuel = ({ text }) => {
    console.log(text)
    return (
        <div className={styles.primary_container}>
            <div className={styles.secondary_container}>
                <div className={styles.image_container} key={`${text}1`}>
                    <img src={Lancha} className={styles.image} />
                    <text> LLegada {text} </text>
                </div>
                <div className={styles.image_container} key={`${text}2`}>
                    <img src={Camion} className={styles.image} />
                    <text> Salida {text} </text>
                </div>
                <div className={styles.image_container} key={`${text}3`}>
                    <img src={Camion} className={styles.image} />
                    <text> Combustible {text} </text>
                </div>
            </div>
        </div>
    )
}

export default Arrival_Departure_Fuel