import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {

    return (

        <button
            className={props.visibility ? [styles.Button, styles.FadeIn].join(' ') : [styles.Button, styles.FadeOut].join(' ')}
            onClick={props.onClickHandler} >
            {props.children}
        </button>

    )
};

export default Button;