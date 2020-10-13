import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {

    return (

        <div className={styles.Card}>

            <h3 className={styles.Header}>Header</h3>
            <h1 className={styles.Text}>Text</h1>

            <div className={styles.Bottom}>
                <h5 className={styles.Time}>Time</h5>
                <h5 className={styles.Tickets}>Tickets</h5>
            </div>

        </div>

    )

};

export default Card;