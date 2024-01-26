import React, { useEffect, useState } from 'react';
import styles from './modal.module.css';
import Button from '../Button';
import { useModalContext } from '../../Components/Context';
import { FiEdit } from 'react-icons/fi';
import TextInput from '../TextInput';
import axiosClient from '../Axios';
import Spinner from '../Spinner';
const Modal = () => {
  const { modalState, closeModal } = useModalContext();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [editInfo, setEditInfo] = useState(() => {
    const storedHomeInfo = JSON.parse(sessionStorage.getItem('homeInfo'));
    return storedHomeInfo || {};
  });

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

  useEffect(() => {
    sessionStorage.setItem('homeInfo', JSON.stringify(editInfo));
  }, [editInfo]);

  const handleUploadButtonClick = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  };

  const handleConfirm = () => {
    onClick({
      principalTitle: editInfo.principalTitle,
      biography: editInfo.biography,
      secondaryTitle: editInfo.secondaryTitle,
      descriptionLeft: editInfo.descriptionLeft,
      descriptionRight: editInfo.descriptionRight,
      motivationalPhrase: editInfo.motivationalPhrase,
      profilePhoto: editInfo.profilePhoto,
      helpPhoto1: editInfo.helpPhoto1,
      helpPhoto2: editInfo.helpPhoto2
    });
  };

  const handleFileChange = async (e, photoType) => {
    const file = e.target.files[0];
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append(photoType, file);

      const response = await axiosClient.post('/home-info/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const imageUrl = response.data.data[photoType];

      setEditInfo((prevInfo) => ({
        ...prevInfo,
        [photoType]: imageUrl
      }));
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
    }
    setIsLoading(false);
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
      <>
        {isLoading && <Spinner />}
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
            <TextInput labelName={'Imágen de fondo'} />
            <div className={styles.photoContainer} onClick={handleUploadButtonClick}>
              <input
                id="fileInput"
                type="file"
                onChange={(e) => handleFileChange(e, 'profilePhoto')}
                style={{ display: 'none' }}
              />
              <span className={styles.profileHover}>
                <FiEdit />
              </span>
              <img
                src={editInfo?.profilePhoto || `${process.env.PUBLIC_URL}/assets/profilePhoto.jpeg`}
                alt="biography-photo"
                className={styles.profilePhoto}
              />
            </div>
            <div className={styles.btnsContainer}>
              <Button type="cancel" text={denyBtn} onClick={closeModal} />
              <Button type="submit" text={confirmBtn} onClick={handleConfirm} />
            </div>
          </div>
        </div>
      </>
    ) : inputModalHelpClients ? (
      <>
        {isLoading && <Spinner />}
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
            <TextInput labelName={'Foto'} />
            <input
              id="fileInput"
              type="file"
              onChange={(e) => handleFileChange(e, 'helpPhoto1')}
              className={styles.input}
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
            <input
              id="fileInput"
              type="file"
              onChange={(e) => handleFileChange(e, 'helpPhoto2')}
              className={styles.input}
            />
            <div className={styles.btnsContainer}>
              <Button type="cancel" text={denyBtn} onClick={closeModal} />
              <Button type="submit" text={confirmBtn} onClick={handleConfirm} />
            </div>
          </div>
        </div>
      </>
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
