import React, { useState, useEffect } from 'react';
import styles from './HomeCard.module.css';

import CardIcon from '../CardIcon/CardIcon';
import TimeCardIcon from '../../../../assets/Cards/ico-g-03.png';
import TicketsCardIcon from '../../../../assets/Cards/ico-g-01.png';


const HomeCard = (props) => {

    const [dynamicCardBackgroundColor, setDynamicCardBackgroundColor] = useState({});
    const [cardClickBoolean, setCardClickBoolean] = useState(false);
    const [cardHoverBoolean, setCardHoverBoolean] = useState(false);

    useEffect(() => {

        changeCardBackgroundColor(props.cardColor, false);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    useEffect(() => {

        if (window.screen.width > 768) {

            if (cardHoverBoolean) {

                if (!props.isCardAdded) {

                    if (cardClickBoolean) {

                        setDynamicCardBackgroundColor({
                            borderTop: '0.4rem solid',
                            borderTopColor: props.cardColor,
                            backgroundColor: '#373737'
                        });

                    } else {

                        setDynamicCardBackgroundColor({

                            borderTop: '0.4rem solid',
                            borderTopColor: props.cardColor,
                            backgroundColor: props.cardColor

                        });

                    }

                } else if (!cardClickBoolean) {

                    setDynamicCardBackgroundColor({
                        borderTop: '0.4rem solid',
                        borderTopColor: props.cardColor,
                        backgroundColor: '#373737',
                        cursor: 'not-allowed'
                    });

                }

            } else if (!cardClickBoolean) {

                setDynamicCardBackgroundColor({
                    borderTop: '0.4rem solid',
                    borderTopColor: props.cardColor,
                    backgroundColor: '#373737'
                });

            } else {

                setDynamicCardBackgroundColor({

                    borderTop: '0.4rem solid',
                    borderTopColor: props.cardColor,
                    backgroundColor: props.cardColor

                });

            }

        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cardHoverBoolean]);


    const changeCardBackgroundColor = (cardColor, eventBoolean) => {

        if (eventBoolean && !cardClickBoolean) {

            if (!props.isCardAdded) {

                setDynamicCardBackgroundColor({

                    borderTop: '0.4rem solid',
                    borderTopColor: cardColor,
                    backgroundColor: cardColor

                });

                console.log(props.rideID);

                props.onClickHandler(props.rideID);

                setCardClickBoolean(true);

            } 

            //added


        } else if (eventBoolean && cardClickBoolean) {

            //removed

            setDynamicCardBackgroundColor({

                borderTop: '0.4rem solid',
                borderTopColor: cardColor,
                backgroundColor: '#373737'

            });

            props.onClickHandler(0);

            setCardClickBoolean(false);

        } else if (!eventBoolean) {

            setDynamicCardBackgroundColor({

                borderTop: '0.4rem solid',
                borderTopColor: cardColor,
                backgroundColor: '#373737'

            });

        }

    };

    return (

        <div
            className={styles.HomeCard}
            style={dynamicCardBackgroundColor}
            onMouseEnter={() => setCardHoverBoolean(true)}
            onMouseLeave={() => setCardHoverBoolean(false)}
            onClick={() => changeCardBackgroundColor(props.cardColor, true)}>

            <h3 className={styles.ZoneName}>{props.zoneName}</h3>
            <h2 className={styles.Playground}>{props.playground}</h2>

            <div className={styles.Footer}>

                <h3 className={styles.Time}>

                    <CardIcon iconSource={TimeCardIcon} />
                    {props.returnTime && props.returnTime.slice(11, 16)}

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