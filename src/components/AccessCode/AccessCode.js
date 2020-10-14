import React from 'react';
import styles from './AccessCode.module.css';

import Title from '../UI/Title/Title/Title';
import AccessCard from '../UI/Cards/AccessCard/AccessCard';

import AccessTitleIcon from '../../assets/Titles/ico-04.png';

const AccessCode = (props) => {

    return (

        <div className={styles.AccessCode}>
            
            <Title iconSource={AccessTitleIcon}>

                Thank you for using The Jungle™ FastRider ticket system -
                your access code is now ready!

            </Title>

            <AccessCard />

        </div>

    );


};

export default AccessCode;