import React from 'react';
import styles from './Title.module.css';

import TitleIcon from '../TitleIcon/TitleIcon';

const Title = (props) => {

    return (

        <div className={styles.Title}>

            <TitleIcon iconSource={props.iconSource}/>
            <p className={styles.Text}>{props.children}</p>
            
        </div>

    )

};

export default Title;