import React from 'react'

import styles from "./About.module.css";
import { getImageUrl } from "../../utils"

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt="Me sitting with a laptop"
                className={styles.aboutImage} 
            />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/cursorIcon.png")} 
                        alt="cursor Image" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a Frontend developer with experience in building responsive and
                            optimized sites
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/serverIcon.png")} 
                        alt="server Image" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I have experience in developing fast and optimized backend systems
                            and APIs
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/uiIcon.png")} 
                        alt="UI Image" 
                    />
                    <div className={styles.aboutItemText}>
                        <h3>UI Designer</h3>
                        <p>
                            I have created multiple landing pages and created design systems 
                        </p>
                    </div>
                </li>
            </ul>            
        </div>
    </section>
  )
}
