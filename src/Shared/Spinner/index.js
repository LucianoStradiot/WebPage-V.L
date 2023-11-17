import React from 'react';
import styles from './spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.logo}>
        <img src="assets/isologo.png" alt="logo" />
      </div>
    </div>
  );
};

export default Spinner;
