import React, { useEffect } from 'react';
import styles from './AccessCodes.module.css';

import { connect } from 'react-redux';

import Title from '../../UI/Title/Title/Title';
import AccessCard from '../../UI/Cards/AccessCard/AccessCard';
import Animations from '../../UI/Animations/Animations.module.css';

import AccessTitleIcon from '../../../assets/Titles/ico-04.png';
import NoCodesMonkeyImg from '../../../assets/Extra/no-codes.png';

const AccessCodes = (props) => {

    useEffect(() => {

        setTimeout(() => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }, 100);

    }, []);

    return (

        <div className={styles.AccessCodes}>

            {props.accessData.length

                ? <div>

                    <div className={styles.Titles}>

                        <Title animationDelayTime={'0.3s'} iconSource={AccessTitleIcon}>

                            Thank you for using The Jungle™ FastRider ticket system -
                            your access code is now ready!

                        </Title>

                    </div>

                    <AccessCard animationDelayTime={'0.6s'} data={props.accessData} />

                </div>


                : <div className={styles.NoCodesContainer}>
                    <img
                        className={[styles.NoCodesMonkeyImg, Animations.FadeIn].join(' ')}
                        style={{ animationDelay: '0.3s' }}
                        src={NoCodesMonkeyImg} alt="" />

                    <h1
                        className={[styles.Message, Animations.FadeIn].join(' ')}
                        style={{ animationDelay: '0.3s' }}>
                        No access codes here.
                    </h1>
                </div>}


        </div>

    );


};

const mapStateToProps = state => {

    return {

        accessData: state.accessData

    };

};

export default connect(mapStateToProps, null)(AccessCodes);