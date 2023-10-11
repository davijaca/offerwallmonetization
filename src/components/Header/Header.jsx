import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";


export default function Header() {

    const coolGradient = "rgba(154, 198, 229, 0.1)";
    
    
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavColor(coolGradient) : setnavColor("transparent");
      
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);

    return(
        <>
    <div>
            <div className={styles.mainBox}>
                <div className={styles.headerBox}>
                    <div className={styles.right}>
                        <div className={styles.rightImg}>
                            <img src="/images/header_logo.png" alt="Logo"/>

                        </div>
                        <div className={styles.headerTitle}>
                            <span>
                            <span className={styles.headerTitleItem}>
                                offerwall
                            <br />
                            </span>
                            <span className={styles.headerTitleItem2}>
                                monetization
                            </span>
                            </span>{" "}
                        </div>
                        <nav
                          style={{
                            backgroundColor: navColor,
                            transition: "all 1s"
                          }}
                        >
                            <a className={styles.topMenuItem} href="/">Home</a>
                            {/*<a className={styles.topMenuItem}>How it Works</a>*/}
                            <a className={styles.topMenuItem} href="/blog">Blog</a>
                            <a className={styles.topMenuItem}>About Us</a>
                        </nav>
                    </div>
                    <a href="/contact">
                    <div className={styles.contact}>
                        <div className={styles.contactButton}>Request Contact</div>
                    </div>
                    </a>
                </div>
            </div>
    </div>
        </>
    )
}






