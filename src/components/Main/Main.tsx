import React from 'react';
import styles from './Main.module.css'
import containerStyles from './../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={containerStyles.container}>
                <div className={styles.textContainer}>
                    <span>Hi there!</span>
                    <h1>Victoria Petlitskaya</h1>
                    <p>Front-End Developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    )
}

export default Main;
