import React, { useState, useEffect } from 'react';
import styles from './AccessCard.module.css';


const AccessCard = (props) => {

    const [modifiedTimeString, setModifiedTimeString] = useState("");

    useEffect(() => {

        if (props.data) {

            setModifiedTimeString(props.data[0].return_time.slice(11, 16));

        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <div className={styles.AccessCard}>

            <div className={styles.Header}>

                <h3 className={styles.Playground}>
                    {props.data.length ? props.data[0].ride.name : "loading..."}
                </h3>

                <h3 className={styles.ParkName}>
                    {props.data.length ? props.data[0].ride.zone.name : "loading..."}
                </h3>

            </div>

            <div className={styles.Middle}>

                <h3 className={styles.Text}>Return At</h3>
                <h2 className={styles.Time}>
                    {modifiedTimeString ? modifiedTimeString : "loading..."}
                </h2>

            </div>

            <div className={styles.Footer}>

                <h3 className={styles.Text}>Use Access Code</h3>
                <h2 className={styles.Code}>
                    {props.data.length ? props.data[0].access_code : "loading..."}
                </h2>

            </div>

        </div>

    );

};

export default AccessCard;