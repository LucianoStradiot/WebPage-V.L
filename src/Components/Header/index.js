import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <img src="assets/logo2.png" className={styles.logo} />
          <div className={styles.menuButton} onClick={toggleMenu}>
            <div className={`${isOpen ? styles.x1 : styles.bar}`}></div>
            <div className={`${isOpen ? styles.x2 : styles.bar} `}></div>
            <div className={`${isOpen ? '' : styles.bar} `}></div>
          </div>
          <nav className={`${isOpen ? styles.activeMenu : styles.menu}`} onClick={toggleMenu}>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/profesionales">
                <li>Profesionales</li>
              </Link>
              <Link to="/talleres">
                <li>Talleres</li>
              </Link>
              <Link to="/contacto">
                <li>Contacto</li>
              </Link>
            </ul>
            <div className={styles.containerLogin}>
              <ul className={styles.subContainerLogin}>
                <Link to="/login" className={styles.listLink}>
                  <li className={styles.list}>Login</li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
