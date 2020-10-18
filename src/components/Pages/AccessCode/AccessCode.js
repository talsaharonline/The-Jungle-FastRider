import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import styles from './AccessCode.module.css';

import Title from '../../UI/Title/Title/Title';
import AccessCard from '../../UI/Cards/AccessCard/AccessCard';
import Animations from '../../UI/Animations/Animations.module.css';

import AccessTitleIcon from '../../../assets/Titles/ico-04.png';
import NoCodesMonkeyImg from '../../../assets/Extra/no-codes.png';

const AccessCode = (props) => {

    useEffect(() => {

        // localStorage.clear();

        props.scrollToTop();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (

        <div className={styles.AccessCode}>

            {props.accessData.length

                ? <div>

                    <div className={styles.Titles}>

                        <Title animationDelayTime={'0.3s'} iconSource={AccessTitleIcon}>

                            Thank you for using The Jungle™ FastRider ticket system -
                            your access code is now ready!

                        </Title>

                    </div>

                    <AccessCard animationDelayTime={'0.3s'} data={props.accessData} />

                </div>


                : <div className={styles.NoCodesContainer}>

                    <img
                        className={[styles.NoCodesMonkeyImg, Animations.FadeIn].join(' ')}
                        style={{ animationDelay: '0.3s' }}
                        src={NoCodesMonkeyImg} alt="" />

                    <h2
                        className={[styles.Message, Animations.FadeIn].join(' ')}
                        style={{ animationDelay: '0.3s' }}>
                        No access code here.
                    </h2>

                </div>}

        </div>

    );


};

const mapStateToProps = state => {

    return {

        accessData: state.accessData

    };

};

export default connect(mapStateToProps, null)(AccessCode);