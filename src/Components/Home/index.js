import React from 'react';
import styles from './home.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles.photoContainer}>
            <img src="assets/profilePhoto.jpeg" alt="" className={styles.photo} />
          </div>
          <div className={styles.descContainer}>
            <h2 className={styles.title}>Lic. Valentina Lansellota</h2>
            <p className={styles.description}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore blanditiis quod,
              aspernatur placeat quidem laboriosam suscipit fugiat commodi facilis voluptatibus ex
              exercitationem minima architecto. Velit praesentium eaque necessitatibus ad impedit?
              Soluta earum tempore omnis debitis optio itaque architecto, facilis, praesentium ullam
              sed dolor consequatur ut, similique accusamus nam. Dolorem qui unde sit molestiae est
              explicabo fuga recusandae nihil suscipit eius.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.sectionOne}>
        <h3 className={styles.titleSectionOne}>Chamuyo de ayudar al cliente</h3>
        <div className={styles.articleOne}>
          <p className={styles.paragraphSectionOne}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore blanditiis quod,
            aspernatur placeat quidem laboriosam suscipit fugiat commodi facilis voluptatibus ex
            exercitationem minima architecto. Velit praesentium eaque necessitatibus ad impedit?
            Soluta earum tempore omnis debitis optio itaque architecto, facilis, praesentium ullam
            sed dolor consequatur ut, similique accusamus nam. Dolorem qui unde sit molestiae est
            explicabo fuga recusandae nihil suscipit eius
          </p>
          <img src="assets/sopa.png" alt="" className={styles.photoSectionOne} />
        </div>
        <div className={styles.articleTwo}>
          <p className={styles.paragraphSectionOne}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore blanditiis quod,
            aspernatur placeat quidem laboriosam suscipit fugiat commodi facilis voluptatibus ex
            exercitationem minima architecto. Velit praesentium eaque necessitatibus ad impedit?
            Soluta earum tempore omnis debitis optio itaque architecto, facilis, praesentium ullam
            sed dolor consequatur ut, similique accusamus nam. Dolorem qui unde sit molestiae est
            explicabo fuga recusandae nihil suscipit eius.
          </p>
          <img src="assets/sopa.png" alt="" className={styles.photoSectionOne} />
        </div>
      </section>
      <section className={styles.containerRecipes}>
        <h3>Planes dietarios</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore blanditiis quod,
          aspernatur placeat quidem laboriosam suscipit fugiat commodi facilis voluptatibus ex
          exercitationem minima architecto. Velit praesentium eaque necessitatibus ad impedit?
          Soluta earum tempore omnis debitis optio itaque architecto, facilis, praesentium ullam sed
          dolor consequatur ut, similique accusamus nam. Dolorem qui unde sit molestiae est
          explicabo fuga recusandae nihil suscipit eius
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore blanditiis quod,
          aspernatur placeat quidem laboriosam suscipit fugiat commodi facilis voluptatibus ex
          exercitationem minima architecto. Velit praesentium eaque necessitatibus ad impedit?
          Soluta earum tempore omnis debitis optio itaque architecto, facilis, praesentium ullam sed
          dolor consequatur ut, similique accusamus nam. Dolorem qui unde sit molestiae est
          explicabo fuga recusandae nihil suscipit eius.
        </p>
      </section>
      <section className={styles.containerRecipes}>
        <h3>Frase motivacional en grande</h3>
      </section>
      <section className={styles.containerRecipes}>
        <h3>Descripcion de la clinica donde atiende</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore blanditiis quod,
          aspernatur placeat quidem laboriosam suscipit fugiat commodi facilis voluptatibus ex
          exercitationem minima architecto. Velit praesentium eaque necessitatibus ad impedit?
          Soluta earum tempore omnis debitis optio itaque architecto, facilis, praesentium ullam sed
          dolor consequatur ut, similique accusamus nam. Dolorem qui unde sit molestiae est
          explicabo fuga recusandae nihil suscipit eius.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore blanditiis quod,
          aspernatur placeat quidem laboriosam suscipit fugiat commodi facilis voluptatibus ex
          exercitationem minima architecto. Velit praesentium eaque necessitatibus ad impedit?
          Soluta earum tempore omnis debitis optio itaque architecto, facilis, praesentium ullam sed
          dolor consequatur ut, similique accusamus nam. Dolorem qui unde sit molestiae est
          explicabo fuga recusandae nihil suscipit eius.
        </p>
      </section>
    </main>
  );
};

export default Home;
