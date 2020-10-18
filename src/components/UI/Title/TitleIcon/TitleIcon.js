import React from 'react';
import styles from './TitleIcon.module.css';

const TitleIcon = (props) => (

    <div className={styles.TitleCircle}>

        <img className={styles.TitleIcon} src={props.iconSource} alt="" />

    </div>

);

export default TitleIcon;