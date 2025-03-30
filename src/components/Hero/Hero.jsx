import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../utils';
const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}> Hi I'm Manasa</h1>
        <p className={styles.description}>I'm a fresher.I'm good at front-end. 
            Reach out if you'd like to learn more!</p>
        <a href='mailto:manasapuppala9@gmail.com' className={styles.contactBtn}>
            Contact Me</a>
        </div>
        <img src="assets/heroImage.png" alt ="Hero image of me" 
        className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
  
  </section>
  );
};

export default Hero;