import React from 'react';
import styles from './ButtonLoader.module.css';

const ButtonLoader = () => {

    return (

        <div className={styles.ButtonLoader}>
            <div className={styles.Bounce1}></div>
            <div className={styles.Bounce2}></div>
            <div className={styles.Bounce3}></div>
        </div>
    )
};

export default ButtonLoader;