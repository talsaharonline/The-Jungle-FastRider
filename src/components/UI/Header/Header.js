import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

import { NavLink } from 'react-router-dom';

const Header = () => {

    return (

        <header className={styles.Header}>

            <div>
                <a className={styles.Title} href="/"><Logo />The Jungle™ FastRider</a>
            </div>

            <nav>

                <ul>

                    <li>
                        <NavLink className={styles.NavLink} activeStyle={{ color: '#edf0f1' }} to="/" exact>Home</NavLink>
                    </li>

                    <li>
                        <NavLink className={styles.NavLink} activeStyle={{ color: '#edf0f1' }} to="/access-codes">Access Codes</NavLink>
                    </li>

                </ul>

            </nav>

        </header>
    )
};

export default Header;