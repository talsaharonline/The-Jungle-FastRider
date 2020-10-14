import React from 'react';
import styles from './AccessCard.module.css';


const AccessCard = (props) => {

    return (

        <div className={styles.AccessCard}>

            <div className={styles.Header}>

                <h3 className={styles.Playground}>Rings Of Black</h3>
                <h3 className={styles.ParkName}>Gibbon Island</h3>

            </div>

            <div className={styles.Middle}>

                <h3 className={styles.Text}>Return At</h3>
                <h2 className={styles.Time}>15:15</h2>

            </div>

            <div className={styles.Footer}>

                <h3 className={styles.Text}>Use Access Code</h3>
                <h2 className={styles.Code}>134A-7155-9CB1</h2>

            </div>

        </div>

    );

};

export default AccessCard;