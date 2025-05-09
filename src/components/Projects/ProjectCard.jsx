import React from 'react'
import styles from "./projectCard.module.css"
const ProjectCard = ({project:{title,description,imageSrc,skills,demo,source}}) => {
    {/*const project=props.project*/}
  return (
   
        <div className={styles.container}>
         <img src="assets/project.png"
         alt = {`Image of ${title}`}className={styles.image}
         />
         <h3 className={styles.title}>{title}</h3>
         <p className={styles.description}>{description}</p>
         <ul className={styles.skills}>
           {skills.map((skill,id) => {
            return <li key={id} className={styles.skill}>{skill}</li>;
           })}
         </ul>
         <div className={styles.links}>
           {/*<a href = {demo} className={styles.link}>
            Demo</a>*/}
           <a href ={source} className={styles.link}>
            Source</a>
         </div>
       
     </div>
  )
}

export default ProjectCard;