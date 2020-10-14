import React, { useState, useEffect } from 'react';
import styles from './HomeCard.module.css';
import CardIcon from '../CardIcon/CardIcon';

import TimeCardIcon from '../../../../assets/Cards/ico-g-03.png';
import TicketsCardIcon from '../../../../assets/Cards/ico-g-01.png';


const HomeCard = (props) => {

    const [modifiedTimeString, setModifiedTimestring] = useState("");

    useEffect(() => {

        if (props.returnTime) {

            setModifiedTimestring(props.returnTime.slice(11, 16));

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <div className={styles.HomeCard}>

            <h3 className={styles.ZoneName}>{props.zoneName}</h3>
            <h2 className={styles.Playground}>{props.playground}</h2>

            <div className={styles.Footer}>

                <h3 className={styles.Time}>

                    <CardIcon iconSource={TimeCardIcon} />
                    {modifiedTimeString ? modifiedTimeString : "loading..."}

                </h3>

                <h3 className={styles.Tickets}>

                    <CardIcon iconSource={TicketsCardIcon} />
                    {props.remainingTickets}

                </h3>

            </div>

        </div>

    )

};

export default HomeCard;