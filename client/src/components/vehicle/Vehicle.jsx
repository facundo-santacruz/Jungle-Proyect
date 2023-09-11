import React from 'react'
import Lancha from "../../images/Lancha.jpg";
import Camion from "../../images/camion.jpg";
import styles from "../vehicle/vehicle.module.css"

const vehicle = () => {
  return (
    <div className={styles.primary_container}>
      <div className={styles.secondary_container}>
        <div className={styles.image_container}>
          <img src={Lancha} className={styles.image} />
          <text> Lancha </text>
        </div>
        <div className={styles.secondary_container}>
          <img src={Camion} className={styles.image} />
          <button> Camion </button>
        </div>

      </div>
    </div>
  )
}

export default vehicle