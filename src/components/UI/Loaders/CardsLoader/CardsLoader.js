import React from 'react';
import styles from './CardsLoader.module.css';

const CardsLoader = () => (

  <div className={styles.CardsLoader}>

    <div className={[styles.SkCube, styles.SkCube1].join(' ')}></div>
    <div className={[styles.SkCube, styles.SkCube2].join(' ')}></div>
    <div className={[styles.SkCube, styles.SkCube3].join(' ')}></div>
    <div className={[styles.SkCube, styles.SkCube4].join(' ')}></div>
    <div className={[styles.SkCube, styles.SkCube5].join(' ')}></div>
    <div className={[styles.SkCube, styles.SkCube6].join(' ')}></div>
    <div className={[styles.SkCube, styles.SkCube7].join(' ')}></div>
    <div className={[styles.SkCube, styles.SkCube8].join(' ')}></div>
    <div className={[styles.SkCube, styles.SkCube9].join(' ')}></div>

  </div>

);

export default CardsLoader;