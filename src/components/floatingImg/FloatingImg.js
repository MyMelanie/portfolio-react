import React from 'react'
import styles from './FloatingImg.module.css'
import img from './img_bg.png'


const FloatingImg = () => {
    return (
      <div className={styles.container}>
        <img src={img} alt={'img'} className={styles.image} />
      </div>
    );
  };
  

export default FloatingImg