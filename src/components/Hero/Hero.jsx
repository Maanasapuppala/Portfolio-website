import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from '../utils';
const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}> Hi I'm Manasa</h1>
        <p className={styles.description}> As a passionate Frontend Developer,I specialize in building responsive and interactive web applications using HTML,CSS,JavaScript and React.js.I thrive on creating seamless user experience.Explore my projects below to see how I combie functionality with creative to deliver impactful solutions. 
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