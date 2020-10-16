import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import styles from './Home.module.css';

import Title from '../../UI/Title/Title/Title';
import Input from '../../UI/Input/Input';
import HomeCard from '../../UI/Cards/HomeCard/HomeCard';
import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';
import Animations from '../../UI/Animations/Animations.module.css';

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
    const [inputValue, setInputValue] = useState("");
    const [savedUserPIN, setSavedUserPIN] = useState("");
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

        if (window.screen.width < 768) {

            if (scrollPosition >= 0 && scrollPosition <= 300) {

                setDisplayButton(true);

            } else {

                setDisplayButton(false);

            }

        } else {

            setDisplayButton(true);

        }


    }, [scrollPosition]);


    useEffect(() => {

        // localStorage.clear();

        setTimeout(() => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }, 100);


        scrollEventHandler();

        API_Functions.getFastRiderRides()

            .then(response => {

                if (localStorage.getItem("userPIN")) {
                    setSavedUserPIN(JSON.parse(localStorage.getItem("userPIN")));
                }

                setFastRiderRides(response);

            }).catch(error => {

                addToast(error.message, { appearance: 'error', autoDismiss: true });

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

        console.log(rideID);

        setChosenCardRideID(rideID);

    };

    const onSubmitButtonHandler = () => {

        console.log(inputValue);

        if (inputValue && chosenCardRideID) {

            API_Functions.postChosenRide(inputValue, chosenCardRideID)

                .then(response => {

                    setAccessData([response]);

                    localStorage.setItem("userPIN", JSON.stringify(inputValue));

                }).catch(error => {

                    addToast(error.message, { appearance: 'error', autoDismiss: true });

                });

        } else {

            addToast("Please choose playground and enter your PIN code.", { appearance: 'error', autoDismiss: true });
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

            <div className={styles.Titles}>

                <Title animationDelayTime={'0.3s'} iconSource={TicketTitleIcon}>

                    Enter your park ticket #PIN number,
                    then select the desired ride while
                    noting the stated return time

                </Title>

                <Title animationDelayTime={'0.5s'} iconSource={PointerTitleIcon}>

                    Press 'submit' to confirm and retrieve your access code

                </Title>

                <Title animationDelayTime={'0.7s'} iconSource={TimerTitleIcon}>

                    When the time comes, use the spacial
                    FastRider line to cut out a considerable
                    wait time

                </Title>

            </div>

            <div
                className={[styles.InputAndBtnContainer, Animations.FadeIn].join(' ')}
                style={{ animationDelay: '0.9s' }}
            >

                <Input
                    onChangeHandler={onChangeInputHandler}
                    onSelectHandler={onAutoCompleteSelectHandler}
                    inputValue={inputValue}
                    savedUserPIN={savedUserPIN}
                />

                {window.screen.width > 768
                    && <Button
                        onClickHandler={onSubmitButtonHandler}
                        visibility={displayButton}>
                        SUBMIT
                </Button>}

            </div>

            {window.screen.width < 768
                && <Button
                    onClickHandler={onSubmitButtonHandler}
                    visibility={displayButton}>
                    SUBMIT
                </Button>}

            <div
                className={[styles.Cards, Animations.FadeInUp].join(' ')}
            //   style={{ animationDelay: '0.9s' }}
            >

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