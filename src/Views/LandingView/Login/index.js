import React, { useState, useRef } from 'react';
import styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import TextInput from '../../../Shared/TextInput';
import Button from '../../../Shared/Button';
import Modal from '../../../Shared/Modal';
import Spinner from '../../../Shared/Spinner';
import axiosClient from '../../../Shared/Axios';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { useStateContext, useModalContext } from '../../../Components/Context';

const Login = () => {
  const { openModal, modalState } = useModalContext();
  const { setUser, setToken } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState({
    email: null,
    password: null
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
    setIsLoading(true);
    setErrors({});
    try {
      const { data } = await axiosClient.post('/login', payload);
      setUser(data.user);
      setToken(data.token);
      openModal({
        description: 'Sesión iniciada correctamente',
        chooseModal: false
      });
      navigate('/super-admin');
    } catch (err) {
      if (err.response && err.response.status === 422) {
        const apiErrors = err.response;
        if (apiErrors.data.errors) {
          setErrors({
            email: apiErrors.data.errors.email?.[0],
            password: apiErrors.data.errors.password?.[0]
          });
        } else if (apiErrors.data.messageEmail) {
          setErrors({
            email: [apiErrors.data.messageEmail]
          });
        } else {
          setErrors({
            password: [apiErrors.data.messagePassword]
          });
        }
      }
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Spinner />}
      {modalState.isOpen && modalState.chooseModal === false ? <Modal /> : null}
      <section className={styles.container} onSubmit={onSubmit}>
        <form className={styles.form}>
          <TextInput
            input={'input'}
            labelName={'E-mail'}
            placeholderText={'Escribe tu dirección de correo electrónico'}
            reference={emailRef}
            error={errors.email}
          />
          <div className={styles.passwordContainer}>
            <TextInput
              labelName={'Contraseña'}
              placeholderText={'Escribe tu contraseña'}
              input={'input'}
              reference={passwordRef}
              error={errors.password}
              inputType={showPassword ? 'text' : 'password'}
            />
            {showPassword ? (
              <FaEye
                className={styles.showPasswordIcon}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <FaEyeSlash
                className={styles.showPasswordIcon}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
          <Link to="/recover-password" className={styles.password}>
            <p>Olvidaste tu contraseña?</p>
          </Link>
          <div className={styles.btnContainer}>
            <Button type="submit" text="Enviar" />
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
