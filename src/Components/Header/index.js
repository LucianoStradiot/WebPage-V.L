import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import { BiBody, BiHome, BiHighlight, BiMap, BiLogIn, BiLogOut } from 'react-icons/bi';
import axiosClient from '../../Shared/Axios';
import { useModalContext, useStateContext } from '../Context';
import Spinner from '../../Shared/Spinner';
import Modal from '../../Shared/Modal';

const Header = () => {
  const { setUser, setToken } = useStateContext();
  const { openModal } = useModalContext();
  const [isLoading, setIsLoading] = useState(false);
  const phoneSoundRef = useRef(new Audio('audio/clickButton.mp3'));
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  const playClickSound = (audioRef) => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    playClickSound(phoneSoundRef);
  };

  const onLogout = (e) => {
    e.preventDefault();

    const clickLogout = async () => {
      setIsLoading(true);
      try {
        await axiosClient.post('/logout');
        setUser({});
        setToken(null);
        navigate('/');
      } catch (error) {
        console.error('Logout failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    openModal({
      title: 'Cerrar Sesión',
      description: '¿Está seguro que desea cerrar sesión?',
      confirmBtn: 'Aceptar',
      denyBtn: 'Cancelar',
      chooseModal: true,
      onClick: clickLogout
    });
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };

  useEffect(() => {
    phoneSoundRef.current.load();
    handleScroll();
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {sessionStorage.getItem('ACCESS_TOKEN') && <Modal />}
      <header
        className={`${isOpen ? styles.overlay : ''}`}
        onClick={() => (isOpen ? toggleMenu() : '')}
      >
        <div className={`${scrollY > 100 ? styles.scrolled : styles.container}`}>
          <img src="assets/logo2.png" alt="headerLogo" className={styles.logo} />
          <div className={styles.menuButton} onClick={toggleMenu}>
            <div className={`${isOpen ? styles.x1 : styles.bar}`}></div>
            <div className={`${isOpen ? styles.x2 : styles.bar} `}></div>
            <div className={`${isOpen ? '' : styles.bar} `}></div>
          </div>
          <nav
            className={`${
              isOpen && scrollY < 100
                ? styles.activeMenu
                : isOpen && scrollY > 100
                ? styles.scrolledActiveMenu
                : styles.menu
            }`}
            onClick={() => playClickSound(phoneSoundRef)}
          >
            {sessionStorage.getItem('ACCESS_TOKEN') ? (
              <>
                <ul>
                  <Link to="/super-admin">
                    <li>
                      Home
                      <span className={styles.icon}>
                        <BiHome />
                      </span>
                    </li>
                  </Link>
                  <Link to="/blog">
                    <li>
                      Blog
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
                    <li className={styles.list} onClick={onLogout}>
                      Salir
                      <span className={styles.icon}>
                        <BiLogOut />
                      </span>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <ul>
                  <Link to="/">
                    <li>
                      Home
                      <span className={styles.icon}>
                        <BiHome />
                      </span>
                    </li>
                  </Link>
                  <Link to="/blog">
                    <li>
                      Blog
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
              </>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
