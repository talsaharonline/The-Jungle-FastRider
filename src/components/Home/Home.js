import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

import Title from '../UI/Title/Title/Title';
import Input from '../UI/Input/Input';
import HomeCard from '../UI/Cards/HomeCard/HomeCard';
import Button from '../UI/Button/Button';

import TicketTitleIcon from '../../assets/Titles/ico-01.png';
import PointerTitleIcon from '../../assets/Titles/ico-02.png';
import TimerTitleIcon from '../../assets/Titles/ico-03.png';

import * as API_Functions from '../../API/API_Functions';
import { useToasts } from 'react-toast-notifications';

const Home = (props) => {

    const { addToast } = useToasts();
    const [fastRiderRides, setFastRiderRides] = useState([]);

    useEffect(() => {

        API_Functions.getFastRiderRides()

            .then(response => {

                setFastRiderRides(response);

            }).catch(error => {

                addToast(error.message, { appearance: 'error' });

            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (

        <div className={styles.Home}>

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

            <Input />

            <div className={styles.Cards}>

                {fastRiderRides.length ? fastRiderRides.map(card => (

                    <HomeCard

                        key={card.id}
                        zoneName={card.zone.name}
                        playground={card.name}
                        remainingTickets={card.remaining_tickets}
                        returnTime={card.return_time}
                        borderTopColor={card.color}

                    />

                )) : "loading..."}

            </div>

            <Button>SUBMIT</Button>

        </div>

    );

};

export default Home;