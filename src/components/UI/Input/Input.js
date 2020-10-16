import React from 'react';
import styles from './Input.module.css';

import Animations from '../Animations/Animations.module.css';

const Input = (props) => {

    return (

        <input
            style={{ animationDelay: props.animationDelayTime }}
            className={[styles.Input, Animations.FadeIn].join(' ')}
            placeholder="#PIN"
            onChange={props.onChangeHandler}
            defaultValue={props.inputDynamicValue}
        />

    );

};

export default Input;