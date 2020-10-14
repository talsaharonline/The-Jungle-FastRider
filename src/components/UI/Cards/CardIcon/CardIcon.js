import React from 'react';
import styles from './CardIcon.module.css';


const CardIcon = (props) => {

    return (

        <img className={styles.CardIcon} src={props.iconSource} alt=""/>

    );

};

export default CardIcon;