import React, { useState, useEffect } from 'react';
import styles from './HomeCard.module.css';

import CardIcon from '../CardIcon/CardIcon';
import TimeCardIcon from '../../../../assets/Cards/ico-g-03.png';
import TicketsCardIcon from '../../../../assets/Cards/ico-g-01.png';


const HomeCard = (props) => {

    const [modifiedTimeString, setModifiedTimeString] = useState("");
    const [dynamicCardBackgroundColor, setDynamicCardBackgroundColor] = useState({});
    const [checkIfCardClicked, setCheckIfCardClicked] = useState({ isClicked: false });
    const [cardHoverBoolean, setCardHoverBoolean] = useState(false);

    useEffect(() => {

        if (props.returnTime) {

            setModifiedTimeString(props.returnTime.slice(11, 16));

        }

        changeCardBackgroundColor(props.cardColor);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {

        if (window.screen.width > 768) {

            if (cardHoverBoolean) {

                setDynamicCardBackgroundColor({

                    borderTop: '0.4rem solid',
                    borderTopColor: props.cardColor,
                    backgroundColor: props.cardColor

                });

            } else if (checkIfCardClicked.isClicked) {


                setDynamicCardBackgroundColor({

                    borderTop: '0.4rem solid',
                    borderTopColor: props.cardColor,
                    backgroundColor: '#373737'

                });
            }

        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardHoverBoolean]);


    const changeCardBackgroundColor = (cardColor) => {

        if (checkIfCardClicked.isClicked) {
            
            console.log("111111");
            // add only

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

                borderTop: '0.4rem solid',
                borderTopColor: cardColor,
                backgroundColor: cardColor

            });

        }

    };

    return (

        <div
            className={styles.HomeCard}
            style={dynamicCardBackgroundColor}
            onMouseEnter={() => setCardHoverBoolean(true)}
            onMouseLeave={() => setCardHoverBoolean(false)}
            onClick={() => {

                changeCardBackgroundColor(props.cardColor);
                props.onClickHandler(props.rideID);

            }}>

            <h3 className={styles.ZoneName}>{props.zoneName}</h3>
            <h2 className={styles.Playground}>{props.playground}</h2>

            <div className={styles.Footer}>

                <h3 className={styles.Time}>

                    <CardIcon iconSource={TimeCardIcon} />
                    {modifiedTimeString && modifiedTimeString}

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