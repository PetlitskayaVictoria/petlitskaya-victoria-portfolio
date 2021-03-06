import React from 'react';
import styles from './Main.module.scss';
import containerStyles from '../common/styles/Container.module.scss';
import mainImage from './../../assets/images/mainPhoto.jpg';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const Main = () => {
    return (
        <div id="main" className={styles.mainBlock}>
            <Fade bottom>
            <div className={styles.background}>
                <div className={styles.leftPart}></div>
                <div className={styles.rightPart}>
                    <div className={styles.inner}>
                        <div className={styles.photo}>
                            <img src={mainImage} alt="Avatar"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={containerStyles.container}>
                <div className={styles.textContainer}>
                    <h2 className={styles.name}>Victoria</h2>
                    <h2 className={styles.surname}>Petlitskaya</h2>
                    <span>Front-End Developer</span>
                </div>

            </div>
            </Fade>
        </div>
    )
}

export default Main
