import React, { useState, useEffect } from 'react';

import styles from './AccessCard.module.css';
import Animations from '../../Animations/Animations.module.css';


const AccessCard = (props) => {

    const [dynamicCardBorderTopColor, setDynamicCardBorderTopColor] = useState({});


    useEffect(() => {

        if (props.data.length) {

            setDynamicCardBorderTopColor({

                borderTop: '0.4rem solid',
                borderTopColor: props.data[0].ride.zone.color,
                animationDelay: props.animationDelayTime

            });

        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (

        <div
            className={[styles.AccessCard, Animations.FadeIn].join(' ')}
            style={dynamicCardBorderTopColor}>

            <div className={styles.Header}>

                <h3 className={styles.Playground}>

                    {props.data[0].ride.name}

                </h3>

                <h3 className={styles.ParkName}>

                    {props.data[0].ride.zone.name}

                </h3>

            </div>

            <div className={styles.Middle}>

                <h3 className={styles.Text}>Return At</h3>

                <h2 className={styles.Time}>

                    {props.data.length && props.data[0].return_time.slice(11, 16)}

                </h2>

            </div>

            <div className={styles.Footer}>

                <h3 className={styles.Text}>Use Access Code</h3>

                <h2 className={styles.Code}>

                    {props.data[0].access_code}

                </h2>

            </div>

        </div>

    );

};

export default AccessCard;