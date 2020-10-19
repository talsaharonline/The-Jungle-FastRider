import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import styles from './Home.module.css';

import Title from '../../UI/Title/Title/Title';
import Input from '../../UI/Input/Input';
import HomeCard from '../../UI/Cards/HomeCard/HomeCard';
import Button from '../../UI/Button/Button';
import CardsLoader from '../../UI/Loaders/CardsLoader/CardsLoader';
import ButtonLoader from '../../UI/Loaders/ButtonLoader/ButtonLoader';
import Animations from '../../UI/Animations/Animations.module.css';

import TicketTitleIcon from '../../../assets/Titles/ico-01.png';
import PointerTitleIcon from '../../../assets/Titles/ico-02.png';
import TimerTitleIcon from '../../../assets/Titles/ico-03.png';

import * as API_Functions from '../../../API/API_Functions';
import * as API_PIN_Generator from '../../../API/API_PIN_Generator';
import * as actionTypes from '../../../store/actions';

const Home = (props) => {

    const { addToast } = useToasts();
    const [redirectToAccessCodePage, setRedirectToAccessCodePage] = useState([]);

    const [displaySubmitButton, setDisplaySubmitButton] = useState(false);
    const [displayCardsLoader, setDisplayCardsLoader] = useState(false);
    const [displayButtonLoader, setDisplayButtonLoader] = useState(false);

    const [fastRiderRides, setFastRiderRides] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [savedUserPIN, setSavedUserPIN] = useState("");
    const [chosenCardRideID, setChosenCardRideID] = useState(0);
    const [accessData, setAccessData] = useState([]);
    const [chosenCardProperties, setChosenCardProperties] = useState({});


    useEffect(() => {

        if (window.screen.width < 768) {

            if (props.scrollPosition <= 300) {

                setDisplaySubmitButton(true);

            } else {

                setDisplaySubmitButton(false);

            }

        } else {

            setDisplaySubmitButton(true);

        }

    }, [props.scrollPosition]);


    useEffect(() => {

        props.scrollToTop();

        setDisplayCardsLoader(true);

        API_Functions.getFastRiderRides()

            .then(response => {

                if (localStorage.getItem("userPIN")) {
                    setSavedUserPIN(JSON.parse(localStorage.getItem("userPIN")));
                }

                setTimeout(() => {

                    setDisplayCardsLoader(false);
                    setFastRiderRides(response);

                }, 2000);

            }).catch(error => {

                addToast(error.response.data.message,
                    { appearance: 'error', autoDismiss: true });

            });

        API_PIN_Generator.generatePIN();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onChangeInputHandler = (event) => {

        setInputValue(event.target.value);

    };

    const onAutoCompleteSelectHandler = (selectedValue) => {

        setInputValue(selectedValue);

    };

    const onClickCardHandler = (rideID) => {

        setChosenCardRideID(rideID);

    };

    const postChosenRideWithDifferentPIN = () => {

        API_Functions.postChosenRide(API_PIN_Generator.generatePIN(), chosenCardRideID)

            .then(response => {

                setTimeout(() => {

                    setAccessData([response]);

                }, 2000);

                localStorage.setItem("userPIN", JSON.stringify(inputValue));

            }).catch(error => {

                if (error.response.data.code === 4003) {

                    postChosenRideWithDifferentRideID();

                } else {

                    addToast(error.response.data.message,
                        { appearance: 'error', autoDismiss: true });

                    setDisplayButtonLoader(false);

                }

            });

    };

    const postChosenRideWithDifferentRideID = () => {

        let randomRideID = Math.floor(Math.random() * 25) + 1;

        API_Functions.postChosenRide(API_PIN_Generator.generatePIN(), randomRideID)

            .then(response => {

                setTimeout(() => {

                    setAccessData(

                        [{
                            id: response.id,
                            ride: {
                                id: response.ride.id,
                                zone: {
                                    id: response.ride.zone.id,
                                    name: chosenCardProperties.zoneName,
                                    color: chosenCardProperties.color
                                },
                                name: chosenCardProperties.playground,
                                remaining_tickets: response.ride.remainint_tickets,
                                return_time: chosenCardProperties.returnTime
                            },
                            access_code: response.access_code,
                            return_time: chosenCardProperties.returnTime
                        }]

                    );

                }, 2000);

                localStorage.setItem("userPIN", JSON.stringify(inputValue));

            }).catch(error => {

                if (error.response.data.code === 4003) {

                    postChosenRideWithDifferentRideID();

                } else {

                    addToast(error.response.data.message,
                        { appearance: 'error', autoDismiss: true });

                    setDisplayButtonLoader(false);

                }

            });

    };

    const saveChosenCardProperties = (zoneName, playground, returnTime, color) => {

        setChosenCardProperties({

            zoneName: zoneName,
            playground: playground,
            returnTime: returnTime,
            color: color

        });

    };

    const onSubmitButtonHandler = () => {

        if (inputValue && chosenCardRideID) {

            setDisplayButtonLoader(true);

            API_Functions.postChosenRide(inputValue, chosenCardRideID)

                .then(response => {

                    setTimeout(() => {

                        setAccessData([response]);

                    }, 2000);

                    localStorage.setItem("userPIN", JSON.stringify(inputValue));

                }).catch(error => {

                    switch (error.response.data.code) {

                        case 4002:

                            postChosenRideWithDifferentPIN();

                            break;

                        case 4003:

                            postChosenRideWithDifferentRideID();

                            break;

                        default:

                            addToast(error.response.data.message,
                                { appearance: 'error', autoDismiss: true });

                            setDisplayButtonLoader(false);

                            break;
                    }

                });

        } else {

            addToast("Please enter your PIN code and choose a playground",
                { appearance: 'error', autoDismiss: true });

            if (/android/i.test(navigator.userAgent)) {

                window.navigator.vibrate(200);

            }

            setDisplayButtonLoader(false);

        }

    };

    useEffect(() => {

        if (accessData.length > 0) {

            props.addAccessCard(accessData);

            setRedirectToAccessCodePage(<Redirect to={{ pathname: "/access-code" }} />)

            setDisplayButtonLoader(false);

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessData])

    return (

        <div className={styles.Home}>

            {redirectToAccessCodePage ? redirectToAccessCodePage : null}

            <div className={styles.Titles}>

                <Title animationDelayTime={'0.3s'} iconSource={TicketTitleIcon}>

                    Enter your park ticket #PIN number,
                    then select the desired ride while
                    noting the stated return time

                </Title>

                <Title animationDelayTime={'0.4s'} iconSource={PointerTitleIcon}>

                    Press 'submit' to confirm and retrieve your access code

                </Title>

                <Title animationDelayTime={'0.5s'} iconSource={TimerTitleIcon}>

                    When the time comes, use the spacial
                    FastRider line to cut out a considerable
                    wait time

                </Title>

            </div>

            <div
                className={[styles.InputAndBtnContainer, Animations.FadeIn].join(' ')}
                style={{ animationDelay: '0.6s' }}>

                <Input
                    onChangeHandler={onChangeInputHandler}
                    onSelectHandler={onAutoCompleteSelectHandler}
                    inputValue={inputValue}
                    savedUserPIN={savedUserPIN}
                />

                {window.screen.width > 768
                    && <Button
                        onClickHandler={onSubmitButtonHandler}
                        visibility={displaySubmitButton}>
                        {displayButtonLoader
                            ? <ButtonLoader />
                            : "SUBMIT"}
                    </Button>}

            </div>

            {window.screen.width < 768
                && <Button
                    onClickHandler={onSubmitButtonHandler}
                    visibility={displaySubmitButton}>
                    {displayButtonLoader
                        ? <ButtonLoader />
                        : "SUBMIT"}
                </Button>}

            <div
                className={[styles.Cards, Animations.FadeIn].join(' ')}>

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
                        isCardAdded={chosenCardRideID}
                        saveChosenCardProperties={saveChosenCardProperties}

                    />

                )) : displayCardsLoader && <CardsLoader />}

            </div>

        </div>

    );

};

const mapDispatchToProps = dispatch => {

    return {

        addAccessCard: (accessData) => dispatch({

            type: actionTypes.ADD_ACCESS_CARD,
            data: { accessData: accessData }

        })

    };

};

export default connect(null, mapDispatchToProps)(Home);