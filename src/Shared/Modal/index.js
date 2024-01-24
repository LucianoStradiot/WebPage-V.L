import React, { useEffect, useState } from 'react';
import styles from './modal.module.css';
import Button from '../Button';
import { useModalContext } from '../../Components/Context';
import TextInput from '../TextInput';

const Modal = () => {
  const { modalState, closeModal } = useModalContext();
  const {
    isOpen,
    description,
    title,
    confirmBtn,
    denyBtn,
    chooseModal,
    onClick,
    inputModalBiography,
    inputModalHelpClients,
    inputModalPhrase
  } = modalState;
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [editInfo, setEditInfo] = useState(() => {
    const storedHomeInfo = JSON.parse(sessionStorage.getItem('homeInfo'));
    return storedHomeInfo || {};
  });

  useEffect(() => {
    sessionStorage.setItem('homeInfo', JSON.stringify(editInfo));
  }, [editInfo]);

  const handleConfirm = () => {
    onClick({
      principalTitle: editInfo.principalTitle,
      biography: editInfo.biography,
      secondaryTitle: editInfo.secondaryTitle,
      descriptionLeft: editInfo.descriptionLeft,
      descriptionRight: editInfo.descriptionRight,
      motivationalPhrase: editInfo.motivationalPhrase
    });
  };

  useEffect(() => {
    let timer;
    if (
      !chooseModal &&
      !inputModalBiography &&
      !inputModalHelpClients &&
      !inputModalPhrase &&
      isOpen
    ) {
      timer = setTimeout(() => {
        setIsFadingOut(false);
        setTimeout(() => {
          closeModal();
        }, 500);
      }, 4000);
    }
    setIsFadingOut(true);

    return () => {
      clearTimeout(timer);
    };
  }, [
    isOpen,
    chooseModal,
    closeModal,
    inputModalBiography,
    inputModalHelpClients,
    inputModalPhrase
  ]);

  return isOpen ? (
    chooseModal ? (
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.logoContainer}>
            <img className={styles.logoImg} src="assets/isologo.png" alt="logo-v.l" />
          </div>
          <div className={styles.title}>{title.toUpperCase()}</div>
          <div className={styles.subTitle}>{description}</div>
          <div className={styles.btnsContainer}>
            <Button type="cancel" text={denyBtn} onClick={closeModal} />
            <Button type="submit" text={confirmBtn} onClick={onClick} />
          </div>
        </div>
      </div>
    ) : inputModalBiography ? (
      <div
        className={styles.container}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleConfirm();
          }
        }}
      >
        <div className={styles.subContainer}>
          <div className={styles.logoContainer}>
            <img className={styles.logoImg} src="assets/isologo.png" alt="logo-v.l" />
          </div>
          <div className={styles.title}>{title.toUpperCase()}</div>
          <TextInput labelName={'Título'} />
          <input
            type="text"
            value={editInfo.principalTitle}
            onChange={(e) => {
              setEditInfo((prevInfo) => ({
                ...prevInfo,
                principalTitle: e.target.value
              }));
            }}
            className={styles.input}
          />
          <TextInput labelName={'Biografía'} />
          <textarea
            type="text"
            value={editInfo.biography}
            onChange={(e) => {
              setEditInfo((prevInfo) => ({
                ...prevInfo,
                biography: e.target.value
              }));
            }}
            className={styles.textArea}
          />
          <div className={styles.btnsContainer}>
            <Button type="cancel" text={denyBtn} onClick={closeModal} />
            <Button type="submit" text={confirmBtn} onClick={handleConfirm} />
          </div>
        </div>
      </div>
    ) : inputModalHelpClients ? (
      <div
        className={styles.container}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleConfirm();
          }
        }}
      >
        <div className={styles.subContainer}>
          <div className={styles.logoContainer}>
            <img className={styles.logoImg} src="assets/isologo.png" alt="logo-v.l" />
          </div>
          <div className={styles.title}>{title.toUpperCase()}</div>
          <TextInput labelName={'Título'} />
          <input
            type="text"
            value={editInfo.secondaryTitle}
            onChange={(e) => {
              setEditInfo((prevInfo) => ({
                ...prevInfo,
                secondaryTitle: e.target.value
              }));
            }}
            className={styles.input}
          />
          <TextInput labelName={'Párrafo 1'} />
          <textarea
            type="text"
            value={editInfo.descriptionLeft}
            onChange={(e) => {
              setEditInfo((prevInfo) => ({
                ...prevInfo,
                descriptionLeft: e.target.value
              }));
            }}
            className={styles.textArea}
          />
          <TextInput labelName={'Párrafo 2'} />
          <textarea
            type="text"
            value={editInfo.descriptionRight}
            onChange={(e) => {
              setEditInfo((prevInfo) => ({
                ...prevInfo,
                descriptionRight: e.target.value
              }));
            }}
            className={styles.textArea}
          />
          <div className={styles.btnsContainer}>
            <Button type="cancel" text={denyBtn} onClick={closeModal} />
            <Button type="submit" text={confirmBtn} onClick={handleConfirm} />
          </div>
        </div>
      </div>
    ) : inputModalPhrase ? (
      <div
        className={styles.container}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleConfirm();
          }
        }}
      >
        <div className={styles.subContainer}>
          <div className={styles.logoContainer}>
            <img className={styles.logoImg} src="assets/isologo.png" alt="logo-v.l" />
          </div>
          <div className={styles.title}>{title.toUpperCase()}</div>
          <TextInput labelName={'Frase motivacional'} />
          <textarea
            type="text"
            value={editInfo.motivationalPhrase}
            onChange={(e) => {
              setEditInfo((prevInfo) => ({
                ...prevInfo,
                motivationalPhrase: e.target.value
              }));
            }}
            className={styles.textArea}
          />
          <div className={styles.btnsContainer}>
            <Button type="cancel" text={denyBtn} onClick={closeModal} />
            <Button type="submit" text={confirmBtn} onClick={handleConfirm} />
          </div>
        </div>
      </div>
    ) : (
      <>
        <div className={styles.containerSelfClose}>
          <div className={!isFadingOut ? styles.subContainerSelfClose : styles.subContainerOpen}>
            <div className={styles.descriptionSelfClose}>{description}</div>
            <Button type="x" text={'X'} onClick={closeModal} />
          </div>
        </div>
      </>
    )
  ) : null;
};

export default Modal;
