import React, { useRef, useEffect } from 'react';
import styles from './contacto.module.css';
import { BiPhone, BiEnvelope, BiLogoInstagram } from 'react-icons/bi';

const Contacto = () => {
  const phoneSoundRef = useRef(new Audio('audio/clickButton.mp3'));
  const playClickSound = (audioRef) => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  useEffect(() => {
    phoneSoundRef.current.load();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.title}>Encontrame a través de los siguientes medios</div>
        <ul>
          <a
            href="tel:+02477664103"
            target="_blank"
            rel="noreferrer"
            onClick={() => playClickSound(phoneSoundRef)}
          >
            <span className={styles.icons}>
              <BiPhone />
            </span>
            (02477)-664103
          </a>
          <a
            href="mailto:nutricionista.valen@gmail.com?Subject=Deseo%20obtener%20wmas%20informacion"
            target="_blank"
            rel="noreferrer"
            onClick={() => playClickSound(phoneSoundRef)}
          >
            <span className={styles.icons}>
              <BiEnvelope />
            </span>
            nutricionista.valen@gmail.com
          </a>
          <a
            href="https://www.instagram.com/nutricionista.valen.lansellota/"
            target="_blank"
            rel="noreferrer"
            onClick={() => playClickSound(phoneSoundRef)}
          >
            <span className={styles.icons}>
              <BiLogoInstagram />
            </span>
            @nutricionista.valen.lansellota
          </a>
        </ul>
        <div className={styles.mapContainer}>
          <iframe
            className={styles.map}
            id="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.055562947784!2d-60.57625298426239!3d-33.88822282749953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b9caa9cffd7a31%3A0x216c7edd338b0131!2sBlvd.%20Alsina%20981%2C%20Pergamino%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1678198926894!5m2!1ses-419!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.address}>
          <ul>
            <li>Bv. Alsina 981 - Pergamino - Buenos Aires- Argentina</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
