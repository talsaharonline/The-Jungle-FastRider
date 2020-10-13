import React from 'react';
import styles from './TitleIcon.module.css';

const TitleIcon = (props) => {

    return (

        <div className={styles.TitleCircle}>

            <img className={styles.TitleIcon} src={props.iconSource} />

        </div>

    );

};

export default TitleIcon;