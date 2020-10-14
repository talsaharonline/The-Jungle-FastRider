import React from 'react';
import styles from './Home.module.css';

import Title from '../UI/Title/Title/Title';
import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card/Card';
import Button from '../UI/Button/Button';

import TicketTitleIcon from '../../assets/Titles/ico-01.png';
import PointerTitleIcon from '../../assets/Titles/ico-02.png';
import TimerTitleIcon from '../../assets/Titles/ico-03.png';

const Home = (props) => {

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

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />

            </div>

            <Button>SUBMIT</Button>

        </div>

    );

};

export default Home;