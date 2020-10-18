import React from 'react';

import styles from './Logo.module.css';
import logoImage from '../../../assets/Logo/Logo.png';

const Logo = () => (

    <div className={styles.LogoContainer}>

        <img className={styles.Logo} src={logoImage} alt="" />

    </div>
    
);

export default Logo;