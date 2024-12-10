import React from 'react'
import styles from './detail.module.css';

const Detail = () => {
  return (
    <div className={styles.detail}>
      <div className={styles.user}>
        <img src="./avatar.png" alt="" />
        <h2>Massika Joe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={styles.info}>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className={styles.photos}>
            <div className={styles.photoItem}>
              <div className={styles.photoDetail}>
              <img src="./background.jpg" />
              <span>image_001_2024</span>
              </div>
              <img src="./download.png" alt="" className={styles.icon}/>
            </div>
            <div className={styles.photoItem}>
              <div className={styles.photoDetail}>
              <img src="./background.jpg" />
              <span>image_001_2024</span>
              </div>
              <img src="./download.png" alt="" className={styles.icon}/>
            </div>
            <div className={styles.photoItem}>
              <div className={styles.photoDetail}>
              <img src="./background.jpg" />
              <span>image_001_2024</span>
              </div>
              <img src="./download.png" alt="" className={styles.icon}/>
            </div>
          </div>
        </div>
        <div className={styles.option}>
          <div className={styles.title}>
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className={styles.logout}>Log Out</button>
      </div>
    </div>
  );
};

export default Detail;