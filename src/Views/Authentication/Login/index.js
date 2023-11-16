import React from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import Button from '../../../Shared/Button';

const Login = () => {
  const handleSubmit = () => {
    console.log('algo');
  };

  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <input />
        <div className={styles.passwordContainer}>
          <input />
        </div>
        <Link to="/recoverPassword" className={styles.password}>
          <p>Forgot password?</p>
        </Link>
        <div className={styles.btnContainer}>
          <Button type="cancel" text="Cancelar" onClick={handleSubmit} />
          <Button type="submit" text="Aceptar" onClick={handleSubmit} />
        </div>
      </form>
    </section>
  );
};

export default Login;
