import React from 'react';
import styles from './Card.module.css';
import CardIcon from '../CardIcon/CardIcon';

import TimeCardIcon from '../../../../assets/Cards/ico-g-03.png';
import TicketsCardIcon from '../../../../assets/Cards/ico-g-01.png';


const Card = (props) => {

    return (

        <div className={styles.Card}>

            <h3 className={styles.Header}>Header</h3>
            <h1 className={styles.Text}>Text</h1>

            <div className={styles.Bottom}>

                <h3 className={styles.Time}>

                    <CardIcon iconSource={TimeCardIcon} />
                    15:15

                </h3>

                <h3 className={styles.Tickets}>

                    <CardIcon iconSource={TicketsCardIcon} />
                    22

                </h3>

            </div>

        </div>

    )

};

export default Card;