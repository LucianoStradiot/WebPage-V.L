import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import { useModalContext, useStateContext } from '../../Components/Context';
import Modal from '../../Shared/Modal';
import axiosClient from '../../Shared/Axios';
import Spinner from '../../Shared/Spinner';

const Home = () => {
  const { modalState } = useModalContext();
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
                <div className={styles.photoContainer}>
                  <img
                    src={
                      homeInfo?.profilePhoto || `${process.env.PUBLIC_URL}/assets/profilePhoto.jpeg`
                    }
                    alt=""
                    className={styles.photo}
                  />
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
                <img
                  src={homeInfo?.helpPhoto1 || `${process.env.PUBLIC_URL}/assets/sopa.png`}
                  alt=""
                  className={styles.photoSectionOne}
                />
              </div>
              <div className={styles.articleTwo}>
                <p className={styles.paragraphSectionOne}>{homeInfo.descriptionRight}</p>
                <img
                  src={homeInfo?.helpPhoto2 || `${process.env.PUBLIC_URL}/assets/sopa.png`}
                  alt=""
                  className={styles.photoSectionOne}
                />
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

export default Home;
