import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {

    return (

        <input
            className={styles.Input}
            placeholder="#PIN"
            onChange={props.onChangeHandler}
            defaultValue={props.inputDynamicValue}
        />

    );

};

export default Input;