import React from 'react';
import styles from './Footer.module.css'
import containerStyles from "../common/styles/Container.module.css";


const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={containerStyles.container} >
                <div className={styles.footerContainer}>
                    <h2>Victoria Petlitskaya</h2>
                    <div className={styles.socialNetworks}>
                        <div className={styles.socialNetwork}></div>
                        <div className={styles.socialNetwork}></div>
                        <div className={styles.socialNetwork}></div>
                        <div className={styles.socialNetwork}></div>
                    </div>
                    <span>2021 All rights reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;
