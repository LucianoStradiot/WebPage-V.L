import React, { useState } from 'react';
import Modal from '../../../Shared/Modal';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import Button from '../../../Shared/Button';
import Spinner from '../../../Shared/Spinner';

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [responseModal, setResponseModal] = useState({
    title: 'Eliminacion',
    description: 'Usted ha sido registrado exitosamente',
    confirmBtn: 'accept',
    denyBtn: 'cancel'
  });

  const onSubmit = () => {
    setResponseModal(responseModal);
    setIsOpen(true);
  };

  const confirm = () => {
    setIsLoading(true);
    console.log('holis');
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <Modal
        title={responseModal.title}
        description={responseModal.description}
        confirmBtn={responseModal.confirmBtn}
        denyBtn={responseModal.denyBtn}
        isOpen={isOpen}
        close={() => setIsOpen(!isOpen)}
        onClick={() => confirm()}
      />
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
            <Button type="cancel" text="Cancelar" />
            <Button type="dghre" text="Aceptar" onClick={onSubmit} />
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
