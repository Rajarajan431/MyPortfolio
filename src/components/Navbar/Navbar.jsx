import React, { useState } from 'react'
import styles from "./Navbar.module.css"

import { getImageUrl } from "../../utils";
 
export const Navbar = () => {
    const[menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>
            MyPortfolio
        </a>

        <div className={styles.menu}>
            <img 
                src={menuOpen 
                        ? getImageUrl("nav/closeIcon.png")
                        : getImageUrl("nav/menuIcon.png")
                    } 
                alt="menu-btn" 
                className={styles.menuBtn} 
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
                onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                
                <li>
                    <a href="#experience">Experince</a>
                </li>
                
                <li>
                    <a href="#projects">Projects</a>
                </li>
                
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
