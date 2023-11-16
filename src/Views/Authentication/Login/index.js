import React from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <input />
        <div className={styles.passwordContainer}>
          <input />
        </div>
        <Link to="/recoverPassword" className={styles.password}>
          <a>Forgot password?</a>
        </Link>
        <div className={styles.btnContainer}>
          <div>
            <button>Cancel</button>
          </div>
          <button>Submit</button>
        </div>
      </form>
      <h2 className={styles.h2Cont}>Register Now</h2>
    </section>
  );
};

export default Login;
