import React from 'react'

import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rajarajan</h1>
        <p className={styles.description}>
        A passionate fullstack developer skilled in ReactJS, 
        TailwindCSS, NodeJS, and MongoDB, building dynamic, user-focused 
        web applications with modern technologies.
        </p>
        <a href="mailto:johnyblaze431@gmail.com" 
          className={styles.contactBtn}>
            Contact Me
        </a>
      </div>
      <img 
        src={getImageUrl("hero/heroImage.png")} 
        alt="Hero Image" 
        className={styles.heroImage}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  )
}
