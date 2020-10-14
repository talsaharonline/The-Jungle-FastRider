import React from 'react';
import styles from './Button.module.css';
import Animations from '../Animations/Animations.module.css';

const Button = (props) => {

    return (

        <button
            className={props.visibility ? [styles.Button, Animations.FadeIn].join(' ') : [styles.Button, Animations.FadeOut].join(' ')}
            onClick={props.onClickHandler} >
            {props.children}
        </button>

    )
};

export default Button;