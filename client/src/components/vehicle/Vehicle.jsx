import React from 'react'
import Lancha from "../../images/Lancha.jpg";
import Camion from "../../images/camion.jpg";
import styles from "../vehicle/vehicle.module.css"

const vehicle = () => {
  return (
    <div className={styles.primary_container}>
      <div className={styles.secondary_container}>
        <div className={styles.image_container} onClick={() => console.log("Lancha")}>
          <p className={styles.text}> Lancha </p>
          <img src={Lancha} className={styles.image} />
        </div>
        <div className={styles.image_container} onClick={() => { console.log("Camión") }}>
          <p className={styles.text}>Camión</p>
          <img src={Camion} className={styles.image} />
        </div>

      </div>
    </div>
  )
}

export default vehicle