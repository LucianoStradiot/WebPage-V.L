import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  return (
    <>
      <header>
        <div className={styles.container}>
          <img src="assets/logo2.png" className={styles.logo} />
          <nav>
            <div>
              <ul className={styles.containerUl}>
                <Link to="/" className={styles.listLink}>
                  <li className={styles.list}>Home</li>
                </Link>
                <Link to="/profesionales" className={styles.listLink}>
                  <li className={styles.list}>Profesionales</li>
                </Link>
                <Link to="/talleres" className={styles.listLink}>
                  <li className={styles.list}>Talleres</li>
                </Link>
                <Link to="/contacto" className={styles.listLink}>
                  <li className={styles.list}>Contacto</li>
                </Link>
              </ul>
            </div>
          </nav>
          <div className={styles.containerLogin}>
            <ul className={styles.subContainerLogin}>
              <Link to="/login" className={styles.listLink}>
                <li className={styles.list}>Login</li>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
