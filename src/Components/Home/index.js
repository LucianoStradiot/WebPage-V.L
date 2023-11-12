import React from 'react';
import styles from './home.module.css';

const Home = () => {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.subContainer}>
          <img src="assets/profilePhoto.png" alt="Profile-photo" className={styles.profilePhoto} />
        </div>
        <div className={styles.subContainer}>
          <p className={styles.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore blanditiis quod,
            aspernatur placeat quidem laboriosam suscipit fugiat commodi facilis voluptatibus ex
            exercitationem minima architecto. Velit praesentium eaque necessitatibus ad impedit?
            Soluta earum tempore omnis debitis optio itaque architecto, facilis, praesentium ullam
            sed dolor consequatur ut, similique accusamus nam. Dolorem qui unde sit molestiae est
            explicabo fuga recusandae nihil suscipit eius.
          </p>
        </div>
      </section>
      <section>
        <div>recetas</div>
      </section>
    </main>
  );
};

export default Home;
