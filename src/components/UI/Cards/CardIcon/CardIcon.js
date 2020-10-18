import React from 'react';
import styles from './CardIcon.module.css';


const CardIcon = (props) => (

    <img className={styles.CardIcon} src={props.iconSource} alt="" />

);


export default CardIcon;