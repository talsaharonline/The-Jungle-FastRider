import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { Redirect } from "react-router-dom";

import Title from '../UI/Title/Title/Title';
import Input from '../UI/Input/Input';
import HomeCard from '../UI/Cards/HomeCard/HomeCard';
import Button from '../UI/Button/Button';

import TicketTitleIcon from '../../assets/Titles/ico-01.png';
import PointerTitleIcon from '../../assets/Titles/ico-02.png';
import TimerTitleIcon from '../../assets/Titles/ico-03.png';

import * as API_Functions from '../../API/API_Functions';
import * as API_PIN_Generator from '../../API/API_PIN_Generator';
import { useToasts } from 'react-toast-notifications';

const Home = (props) => {

    const { addToast } = useToasts();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [displayButton, setDisplayButton] = useState(false);
    const [fastRiderRides, setFastRiderRides] = useState([]);
    const [userPIN, setUserPIN] = useState([]);
    const [chosenCardRideID, setChosenCardRideID] = useState([]);
    const [accessData, setAccessData] = useState([]);
    const [redirectToAccessCode, setRedirectToAccessCode] = useState([]);


    const scrollPositionHandler = () => {

        const position = window.pageYOffset;

        setScrollPosition(position);

    };

    const scrollEventHandler = () => {

        window.addEventListener('scroll', scrollPositionHandler, { passive: true });

        return () => {

            window.removeEventListener('scroll', scrollPositionHandler);

        };

    }

    useEffect(() => {

        if (scrollPosition >= 0 && scrollPosition <= 300) {

            setDisplayButton(true);

        } else {

            setDisplayButton(false);

        }


    }, [scrollPosition]);


    useEffect(() => {

        scrollEventHandler();

        API_Functions.getFastRiderRides()

            .then(response => {

                setFastRiderRides(response);

            }).catch(error => {

                addToast(error.message, { appearance: 'error' });

            });

        API_PIN_Generator.generatePIN();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeInputHandler = (event) => {

        setUserPIN(event.target.value);

    };

    const onClickCardHandler = (rideID) => {

        setChosenCardRideID(rideID);

    };

    const onSubmitButtonHandler = () => {

        API_Functions.postChosenRide(userPIN, chosenCardRideID)

            .then(response => {

                setAccessData([response]);

                // loader

            }).catch(error => {

                addToast(error.message, { appearance: 'error' });

            });

    };

    useEffect(() => {

        if (accessData.length > 0) {

            console.log("im in!");
            setRedirectToAccessCode(<Redirect to={{ pathname: "/access-code", state: { accessData: accessData } }} />)

        }

    }, [accessData])

    return (

        <div className={styles.Home}>

            {redirectToAccessCode ? redirectToAccessCode : null}

            <Title iconSource={TicketTitleIcon}>

                Enter your park ticket #PIN number,
                then select the desired ride while
                noting the stated return time

            </Title>

            <Title iconSource={PointerTitleIcon}>

                Press 'submit' to confirm and retrieve your access code

            </Title>

            <Title iconSource={TimerTitleIcon}>

                When the time comes, use the spacial
                FastRider line to cut out a considerable
                wait time

            </Title>

            <Input
                onChangeHandler={onChangeInputHandler}
            />

            <div className={styles.Cards}>

                {fastRiderRides.length ? fastRiderRides.map(card => (

                    <HomeCard

                        key={card.id}
                        rideID={card.id}
                        zoneName={card.zone.name}
                        playground={card.name}
                        remainingTickets={card.remaining_tickets}
                        returnTime={card.return_time}
                        cardColor={card.zone.color}
                        onClickHandler={onClickCardHandler}

                    />

                )) : "loading..."}

            </div>

            <Button
                onClickHandler={onSubmitButtonHandler}
                visibility={displayButton}
            >
                SUBMIT
            </Button>

        </div >

    );

};

export default Home;