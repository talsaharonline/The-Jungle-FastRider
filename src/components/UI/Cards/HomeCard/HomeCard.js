import React from 'react';
import styles from './HomeCard.module.css';
import CardIcon from '../CardIcon/CardIcon';

import TimeCardIcon from '../../../../assets/Cards/ico-g-03.png';
import TicketsCardIcon from '../../../../assets/Cards/ico-g-01.png';


const HomeCard = (props) => {

    return (

        <div className={styles.HomeCard}>

            <h3 className={styles.ParkName}>Gibbon Island</h3>
            <h2 className={styles.Playground}>Tropical Rush</h2>

            <div className={styles.Footer}>

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

export default HomeCard;