import React from 'react';
import styles from './Title.module.css';
import Animations from '../../Animations/Animations.module.css';

import TitleIcon from '../TitleIcon/TitleIcon';

const Title = (props) => (

    <div
        className={[styles.Title, Animations.FadeIn].join(' ')}
        style={{ animationDelay: props.animationDelayTime }}>

        <TitleIcon iconSource={props.iconSource} />
        <p className={styles.Text}>{props.children}</p>

    </div>


);

export default Title;