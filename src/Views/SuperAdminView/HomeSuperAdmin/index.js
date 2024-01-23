import React, { useEffect, useState } from 'react';
import styles from './homeSuperAdmin.module.css';
import { useModalContext, useStateContext } from '../../../Components/Context';
import Modal from '../../../Shared/Modal';
import axiosClient from '../../../Shared/Axios';
import Spinner from '../../../Shared/Spinner';
import { FiEdit } from 'react-icons/fi';

const HomeSuperAdmin = () => {
  const { modalState, openModal, closeModal } = useModalContext();
  const { setHomeInfo, homeInfo } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosClient.get('/home-info');
      setHomeInfo(data);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  const handleUpdateBiography = () => {
    openModal({
      title: 'Editar biografía',
      confirmBtn: 'Aceptar',
      denyBtn: 'Cancelar',
      inputModalBiography: true,
      onClick: (updatedValues) => handleUpdateClick(updatedValues)
    });
  };

  const handleUpdateClick = async (updatedValues) => {
    setIsLoading(true);
    try {
      await axiosClient.post('/home-info/update', updatedValues);
      setHomeInfo(updatedValues);
      closeModal();
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {modalState.isOpen && modalState.chooseModal === false ? <Modal /> : null}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <main className={styles.main}>
            <section className={styles.container}>
              <div className={styles.subContainer}>
                <div className={styles.photoContainer} onClick={handleUpdateBiography}>
                  <span className={styles.editIconContainer}>
                    <FiEdit className={styles.editIcon} />
                  </span>
                  <img src="assets/profilePhoto.jpeg" alt="" className={styles.photo} />
                </div>
                <div className={styles.descContainer}>
                  <h2 className={styles.title}>{homeInfo.principalTitle}</h2>
                  <p className={styles.description}>{homeInfo.biography}</p>
                </div>
              </div>
            </section>
            <section className={styles.sectionOne}>
              <h3 className={styles.titleSectionOne}>{homeInfo.secondaryTitle}</h3>
              <div className={styles.articleOne}>
                <p className={styles.paragraphSectionOne}>{homeInfo.descriptionLeft}</p>
                <img src="assets/sopa.png" alt="" className={styles.photoSectionOne} />
              </div>
              <div className={styles.articleTwo}>
                <p className={styles.paragraphSectionOne}>{homeInfo.descriptionRight}</p>
                <img src="assets/sopa.png" alt="" className={styles.photoSectionOne} />
              </div>
            </section>
            <section className={styles.motivationalPhotoContainer}>
              <h2 className={styles.motivationalTitle}>{homeInfo.motivationalPhrase}</h2>
              <img
                src="assets/imgMotivacional.jpg"
                alt="img-motivacional"
                className={styles.photo}
              />
            </section>
          </main>
        </>
      )}
    </>
  );
};

export default HomeSuperAdmin;
