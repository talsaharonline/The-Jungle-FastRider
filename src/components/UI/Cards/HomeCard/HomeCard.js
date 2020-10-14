import React, { useState, useEffect } from 'react';
import styles from './HomeCard.module.css';
import CardIcon from '../CardIcon/CardIcon';

import TimeCardIcon from '../../../../assets/Cards/ico-g-03.png';
import TicketsCardIcon from '../../../../assets/Cards/ico-g-01.png';


const HomeCard = (props) => {

    const [modifiedTimeString, setModifiedTimestring] = useState("");
    const [dynamicCardBackgroundColor, setDynamicCardBackgroundColor] = useState({});
    const [checkIfCardClicked, setCheckIfCardClicked] = useState({isClicked: false});

    useEffect(() => {

        if (props.returnTime) {

            setModifiedTimestring(props.returnTime.slice(11, 16));

        }

        changeCardBackgroundColor(props.cardColor);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const changeCardBackgroundColor = (cardColor) => {

        if (checkIfCardClicked.isClicked) {

            setCheckIfCardClicked({

                isClicked: false

            });

        } else {
            
            setCheckIfCardClicked({

                isClicked: true

            });

        }


        if (!checkIfCardClicked.isClicked) {

            setDynamicCardBackgroundColor({

                borderTop: '0.4rem solid',
                borderTopColor: cardColor, 
                backgroundColor: '#373737'

            });

        } else {

            setDynamicCardBackgroundColor({

                backgroundColor: cardColor

            });

        }

    };

    return (

        <div
            className={styles.HomeCard}
            style={dynamicCardBackgroundColor}
            onClick={() => {

                changeCardBackgroundColor(props.cardColor);
                props.onClickHandler(props.rideID);

            }} >

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

        </div >

    )

};

export default HomeCard;