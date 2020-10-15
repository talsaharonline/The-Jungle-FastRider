import React from 'react';
import styles from './AccessCodes.module.css';

import { connect } from 'react-redux';

import Title from '../../UI/Title/Title/Title';
import AccessCard from '../../UI/Cards/AccessCard/AccessCard';

import AccessTitleIcon from '../../../assets/Titles/ico-04.png';

const AccessCodes = (props) => {

    return (

        <div className={styles.AccessCodes}>

            <Title iconSource={AccessTitleIcon}>

                Thank you for using The Jungle™ FastRider ticket system -
                your access code is now ready!

            </Title>

            {props.accessData ? <AccessCard data={props.accessData} /> : "loading..."}

        </div>

    );


};

const mapStateToProps = state => {

    return {

        accessData: state.accessData

    };

};

export default connect(mapStateToProps, null)(AccessCodes);