import React, { useEffect } from 'react';
import styles from './AccessCard.module.css';


const AccessCard = (props) => {

    useEffect(() => {

        console.log(props.location.state);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (

        <div className={styles.AccessCard}>

            <div className={styles.Header}>
                {console.log(props.data.length)}
                <h3 className={styles.Playground}>{props.data.length ? props.data[0].ride.name : "loading..."}</h3>
                <h3 className={styles.ParkName}>{props.data.length ? props.data[0].zone.name : "loading..."}</h3>

            </div>

            <div className={styles.Middle}>

                <h3 className={styles.Text}>Return At</h3>
                <h2 className={styles.Time}>{props.data.length ? props.data[0].return_time : "loading..."}</h2>

            </div>

            <div className={styles.Footer}>

                <h3 className={styles.Text}>Use Access Code</h3>
                <h2 className={styles.Code}>{props.data.length ? props.data[0].access_code : "loading..."}</h2>

            </div>

        </div>

    );

};

export default AccessCard;