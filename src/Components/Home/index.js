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
      <section className={styles.containerRecipes}>
        <h3>Chamuyo de ayudar al cliente</h3>
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
        <h3>Frase motivacional en grande</h3>
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
