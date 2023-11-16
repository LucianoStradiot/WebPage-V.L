import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSelectChange = (selectedValue) => {
    navigate(selectedValue);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className={styles.header}>
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
                <li className={`${styles.listLi} ${styles.listSelect}`} onClick={toggleDropdown}>
                  Talleres
                  {isDropdownOpen && (
                    <ul className={styles.dropdown}>
                      <li onClick={() => handleSelectChange('/talleres')}>Taller 1</li>
                      <li onClick={() => handleSelectChange('/contacto')}>Taller 2</li>
                    </ul>
                  )}
                </li>
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
