import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>Desarrollado por ⒸPONUS</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
