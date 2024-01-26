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
      setHomeInfo(data.data);
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

  const handleUpdateHelpClients = () => {
    openModal({
      title: 'Editar sección ayuda',
      confirmBtn: 'Aceptar',
      denyBtn: 'Cancelar',
      inputModalHelpClients: true,
      onClick: (updatedValues) => handleUpdateClick(updatedValues)
    });
  };

  const handleUpdatePhrase = () => {
    openModal({
      title: 'Editar frase motivacional',
      confirmBtn: 'Aceptar',
      denyBtn: 'Cancelar',
      inputModalPhrase: true,
      onClick: (updatedValues) => handleUpdateClick(updatedValues)
    });
  };

  const handleUpdateClick = async (updatedValues) => {
    setIsLoading(true);

    try {
      const formData = new FormData();

      Object.entries(updatedValues).forEach(([key, value]) => {
        if (value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, value);
        }
      });

      await axiosClient.post('/home-info/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

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
                  <img
                    src={
                      homeInfo?.profilePhoto || `${process.env.PUBLIC_URL}/assets/profilePhoto.jpeg`
                    }
                    alt="biography-photo"
                    className={styles.photo}
                  />
                </div>
                <div className={styles.descContainer}>
                  <h2 className={styles.title}>{homeInfo.principalTitle}</h2>
                  <p className={styles.description}>{homeInfo.biography}</p>
                </div>
              </div>
            </section>
            <section className={styles.containerSectionOne}>
              <div className={styles.sectionOne}>
                <span className={styles.editIconContainer} onClick={handleUpdateHelpClients}>
                  <FiEdit className={styles.editIcon} />
                </span>
                <h3 className={styles.titleSectionOne}>{homeInfo.secondaryTitle}</h3>
                <div className={styles.articleOne}>
                  <p className={styles.paragraphSectionOne}>{homeInfo.descriptionLeft}</p>
                  <img
                    src={homeInfo?.helpPhoto1 || `${process.env.PUBLIC_URL}/assets/sopa.png`}
                    alt="help-photo1"
                    className={styles.photoSectionOne}
                  />
                </div>
                <div className={styles.articleTwo}>
                  <p className={styles.paragraphSectionOne}>{homeInfo.descriptionRight}</p>
                  <img
                    src={homeInfo?.helpPhoto2 || `${process.env.PUBLIC_URL}/assets/sopa.png`}
                    alt="help-photo2"
                    className={styles.photoSectionOne}
                  />
                </div>
              </div>
            </section>
            <section className={styles.motivationalPhotoContainer}>
              <span className={styles.editIconContainer} onClick={handleUpdatePhrase}>
                <FiEdit className={styles.editIcon} />
              </span>
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
