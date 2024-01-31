import React, { useState, useEffect } from 'react';
import styles from './blog.module.css';
import axios from 'axios';

function Blog() {
  const [mediaData, setMediaData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://graph.instagram.com/${process.env.REACT_APP_CLIENT_ID}/media?fields=id,caption,media_type,media_url,username&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`
      )
      .then((response) => {
        setMediaData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      {mediaData.map((media) => (
        <div key={media.id} className={styles.containerImg}>
          <div className={styles.subContainerImg}>
            {media.media_type === 'IMAGE' || media.media_type === 'CAROUSEL_ALBUM' ? (
              <img src={media.media_url} alt={media.caption} />
            ) : (
              <video src={media.media_url} alt={media.caption} controls />
            )}
            <div className={styles.containerImg}>
              <p>{media.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
