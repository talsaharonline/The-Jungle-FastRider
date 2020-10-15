import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import Title from '../../UI/Title/Title/Title';
import Input from '../../UI/Input/Input';
import HomeCard from '../../UI/Cards/HomeCard/HomeCard';
import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';

import TicketTitleIcon from '../../../assets/Titles/ico-01.png';
import PointerTitleIcon from '../../../assets/Titles/ico-02.png';
import TimerTitleIcon from '../../../assets/Titles/ico-03.png';

import * as API_Functions from '../../../API/API_Functions';
import * as API_PIN_Generator from '../../../API/API_PIN_Generator';
import * as actionTypes from '../../../store/actions';

const Home = (props) => {

    const { addToast } = useToasts();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [displayButton, setDisplayButton] = useState(false);
    const [fastRiderRides, setFastRiderRides] = useState([]);
    const [userPIN, setUserPIN] = useState([]);
    const [chosenCardRideID, setChosenCardRideID] = useState(0);
    const [accessData, setAccessData] = useState([]);
    const [redirectToAccessCodes, setRedirectToAccessCodes] = useState([]);


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

                if (localStorage.getItem("userPIN")) {
                    setUserPIN(JSON.parse(localStorage.getItem("userPIN")));
                }

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

        console.log(userPIN);
        console.log(chosenCardRideID);

        if (userPIN && chosenCardRideID) {

            API_Functions.postChosenRide(userPIN, chosenCardRideID)

                .then(response => {

                    setAccessData([response]);

                    localStorage.setItem("userPIN", JSON.stringify(userPIN));

                    // toggleLoader(true)

                }).catch(error => {

                    addToast(error.message, { appearance: 'error' });

                });

        } else {

            addToast("Please choose playground and enter your PIN code.", { appearance: 'error',  autoDismiss: true, });
        }



    };

    useEffect(() => {

        if (accessData.length > 0) {

            props.updateAccessData(accessData);

            setRedirectToAccessCodes(<Redirect to={{ pathname: "/access-codes" }} />)

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessData])

    return (

        <div className={styles.Home}>

            {redirectToAccessCodes ? redirectToAccessCodes : null}

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
                inputDynamicValue={userPIN}
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

                )) : <Loader />}

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

const mapDispatchToProps = dispatch => {

    return {

        updateAccessData: (accessData) => dispatch({

            type: actionTypes.UPDATE_ACCESS_DATA,
            data: { accessData: accessData }

        })

    };

};

export default connect(null, mapDispatchToProps)(Home);