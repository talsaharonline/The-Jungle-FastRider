import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

import { NavLink } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const mobileMenuIconClickHandler = (event) => {

        setAnchorEl(event.currentTarget);

    };

    const mobileMenuCloseHandler = () => {

        setAnchorEl(null);

    };

    return (

        <header className={styles.Header}>

            <div>

                <NavLink className={styles.Title} to="/" exact>

                    <Logo />
                    The Jungle™ FastRider

                </NavLink>

            </div>

            <nav>

                <ul>


                    {/* Mobile Menu */}
                    <Button className={styles.menuBtnContainer} aria-controls="simple-menu" aria-haspopup="true" onClick={mobileMenuIconClickHandler}>
                        <MenuIcon
                            className={styles.mobileMenu}
                            fontSize="large"
                        />
                    </Button>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={mobileMenuCloseHandler}>
                        <MenuItem onClick={mobileMenuCloseHandler}><NavLink className={styles.mobileNavLink} to="/" exact>Home</NavLink></MenuItem>
                        <MenuItem onClick={mobileMenuCloseHandler}><NavLink className={styles.mobileNavLink} to="/access-codes">Access Codes</NavLink></MenuItem>
                    </Menu>

                    {/*Desktop Menu*/}
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