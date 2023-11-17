import React from 'react';
import styles from './error404.module.css';

const Error404 = () => {
  return (
    <div className={styles.container}>
      <div>Error 404</div>
      <p>This page doesn`t exists</p>
    </div>
  );
};

export default Error404;
