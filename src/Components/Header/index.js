import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { BiBody, BiHome, BiHighlight, BiMap, BiLogIn } from 'react-icons/bi';

const Header = () => {
  const phoneSoundRef = useRef(new Audio('audio/clickButton.mp3'));
  const [isOpen, setIsOpen] = useState(false);

  const playClickSound = (audioRef) => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    playClickSound(phoneSoundRef);
  };

  useEffect(() => {
    phoneSoundRef.current.load();
  }, []);

  return (
    <>
      <header
        className={`${isOpen ? styles.overlay : ''}`}
        onClick={() => (isOpen ? toggleMenu() : '')}
      >
        <div className={styles.container}>
          <img src="assets/logo2.png" alt="headerLogo" className={styles.logo} />
          <div className={styles.menuButton} onClick={toggleMenu}>
            <div className={`${isOpen ? styles.x1 : styles.bar}`}></div>
            <div className={`${isOpen ? styles.x2 : styles.bar} `}></div>
            <div className={`${isOpen ? '' : styles.bar} `}></div>
          </div>
          <nav
            className={`${isOpen ? styles.activeMenu : styles.menu}`}
            onClick={() => playClickSound(phoneSoundRef)}
          >
            <ul>
              <Link to="/">
                <li>
                  Home
                  <span className={styles.icon}>
                    <BiHome />
                  </span>
                </li>
              </Link>
              <Link to="/profesionales">
                <li>
                  Profesionales
                  <span className={styles.icon}>
                    <BiHighlight />
                  </span>
                </li>
              </Link>
              <Link to="/talleres">
                <li>
                  Talleres
                  <span className={styles.icon}>
                    <BiBody />
                  </span>
                </li>
              </Link>
              <Link to="/contacto">
                <li>
                  Contacto
                  <span className={styles.icon}>
                    <BiMap />
                  </span>
                </li>
              </Link>
            </ul>
            <div className={styles.containerLogin}>
              <ul className={styles.subContainerLogin}>
                <Link to="/login" className={styles.listLink}>
                  <li className={styles.list}>
                    Login
                    <span className={styles.icon}>
                      <BiLogIn />
                    </span>
                  </li>
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
