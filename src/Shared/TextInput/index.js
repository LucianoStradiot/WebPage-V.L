import React from 'react';
import styles from './textInput.module.css';

const TextInput = ({
  labelName,
  input,
  inputType,
  password,
  description,
  reference,
  placeholderText,
  error
}) => {
  return (
    <div>
      <label className={styles.label}>{labelName}</label>
      {password ? (
        <>
          <p>{description}</p>
          <input
            className={`${error ? `${styles.input} ${styles.errorBorder}` : styles.input}`}
            ref={reference}
            placeholder={placeholderText}
            type={inputType}
          />
        </>
      ) : input ? (
        <input
          className={`${error ? `${styles.input} ${styles.errorBorder}` : styles.input}`}
          ref={reference}
          placeholder={placeholderText}
          type={inputType}
        />
      ) : null}
      <span className={styles.error}>{error}</span>
    </div>
  );
};

export default TextInput;
