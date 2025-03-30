import React from 'react';
import styles from "./Contact.module.css"

const Contact = () => {
  return (
   <footer className={styles.container} id="contact">
    <div className={styles.text}>
        <h2 >Contact</h2>

    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src="assets/emailIcon.png" alt="Email icon"/>
            <a href="Mailto=manasapuppala9@gmail.com">manasapuppala9@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src="assets/linkedinIcon.png" alt="Linkedin icon"/>
            <a href="https://www.linkedin.com/in/maanasapuppala">linkedin.com/maanasapuppala</a>
        </li>
        <li className={styles.link}>
            <img src="assets/githubIcon.png" alt="Github icon"/>
            <a href="https://www.github.com/Maanasapuppala">github.com/Maanasapuppala</a>
        </li>
    </ul>
   </footer>
  )
}

export default Contact