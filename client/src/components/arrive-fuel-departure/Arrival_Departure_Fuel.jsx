import React from 'react'

const Arrival_Departure_Fuel = () => {
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

export default Arrival_Departure_Fuel