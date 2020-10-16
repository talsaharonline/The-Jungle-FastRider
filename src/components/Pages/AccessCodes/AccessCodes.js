import React, { useState, useEffect } from 'react';
import styles from './AccessCodes.module.css';

import { connect } from 'react-redux';

import Title from '../../UI/Title/Title/Title';
import Loader from '../../UI/Loader/Loader';
import AccessCard from '../../UI/Cards/AccessCard/AccessCard';
import Animations from '../../UI/Animations/Animations.module.css';

import AccessTitleIcon from '../../../assets/Titles/ico-04.png';
import NoCodesMonkeyImg from '../../../assets/Extra/no-codes.png';

const AccessCodes = (props) => {

    const [dynamicLoader, setDynamicLoader] = useState(<Loader />);

    useEffect(() => {

        // localStorage.clear();

        if (!props.accessData.length) {

            setDynamicLoader(

                <div className={styles.NoCodesContainer}>
                    <img
                        className={[styles.NoCodesMonkeyImg, Animations.FadeIn].join(' ')}
                        style={{ animationDelay: '0.3s' }}
                        src={NoCodesMonkeyImg} alt="" />

                    <h1
                        className={[styles.Message, Animations.FadeIn].join(' ')}
                        style={{ animationDelay: '0.6s' }}>
                        No access codes here.
                    </h1>

                </div>

            );

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (

        <div className={styles.AccessCodes}>

            {props.accessData.length

                ? <div>

                    <Title animationDelayTime={'0.3s'} iconSource={AccessTitleIcon}>

                        Thank you for using The Jungle™ FastRider ticket system -
                        your access code is now ready!

                    </Title>

                    <AccessCard animationDelayTime={'0.6s'} data={props.accessData} />

                </div>

                : dynamicLoader}


        </div>

    );


};

const mapStateToProps = state => {

    return {

        accessData: state.accessData

    };

};

export default connect(mapStateToProps, null)(AccessCodes);