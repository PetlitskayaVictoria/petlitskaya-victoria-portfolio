import React from 'react';
import styles from './Footer.module.scss';
import containerStyles from "../common/styles/Container.module.scss";
import linkedin from './../../assets/images/social-networks/linkedin.svg';
import facebook from './../../assets/images/social-networks/facebook.svg';
import instagram from './../../assets/images/social-networks/instagram.svg';
import github from './../../assets/images/social-networks/github.png';


const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={containerStyles.container}>
                <div className={styles.footerContainer}>
                    <div className={styles.data}>
                        <span>Victoria Petlitskaya</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className={styles.data}>
                        <span>Minsk,</span>
                        <span>Belarus</span>
                    </div>
                    <div className={styles.data}>
                        <span>victoriapetlitskaya@gmail.com</span>
                        <span>+375 29 107-15-95</span>
                    </div>
                    <div className={styles.data + " " + styles.socialNetworks}>
                        <div className={styles.socialNetwork}>
                            <a href="https://github.com/PetlitskayaVictoria" target="_blank">
                                <img src={github} alt="github"/>
                            </a>
                        </div>
                        <div className={styles.socialNetwork}>
                            <a href="https://www.linkedin.com/in/victoria-petlitskaya/" target="_blank">
                                <img src={linkedin} alt="linkedin"/>
                            </a>
                        </div>
                        <div className={styles.socialNetwork}>
                            <a href="https://www.facebook.com/victoria.petlitskaya/" target="_blank">
                                <img src={facebook} alt="facebook"/>
                            </a>
                        </div>
                        <div className={styles.socialNetwork}>
                            <a href="https://www.instagram.com/petlitskaya_kvi/" target="_blank">
                                <img src={instagram} alt="instagram"/>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
