import React from 'react'
import styles from "./About.module.css";
const About = () => {
  return (
   <section  className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>

   <div className={styles.content}>
    <img src="assets/aboutImage.png" 
    alt="Me sitting with a laptop" className={styles.aboutImage}/>
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src="assets/cursorIcon.png"
             alt="cursor icon "/>
             <div className={styles.aboutItemtext}>
              <h3 >Frontend Developer</h3>
              <p>A passionate frontend developer with a strong foundation in HTML,CSS,JavaScript and React js,
                 dedicated to building a responsive and user-friendly website
                   </p>
                
             </div>
        </li>
    </ul>
   </div>
   </section>
  )
}

export default About