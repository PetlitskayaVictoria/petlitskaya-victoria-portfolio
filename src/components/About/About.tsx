import React from 'react';
import styles from './About.module.scss';
import containerStyles from '../common/styles/Container.module.scss';
import secondaryPhoto from './../../assets/images/secondaryPhoto.jpg';
import Title from '../common/components/Title/Title';
import Paragraph from '../common/components/Paragraph/Paragraph';

const About = () => {
    return (
        <div className={styles.aBoutContainer}>
            <div className={containerStyles.container}>
                <div className={styles.textBlock}>
                    <div className={styles.left}>
                        <img src={secondaryPhoto} alt="Photo"/>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.name}>
                            <Title title="Victoria Petlitskaya" subtitle="About"/>
                            <span className={styles.jobTitle}>Front-End Developer</span>
                        </div>
                        <div className={styles.text}>
                            <Paragraph
                                summary="Quisque aliquet tempus eros, sed consequat libero volutpat quis. Sed vitae quam magna. Praesent eget enim sit amet mauris convallis malesuada."/>
                            <Paragraph
                                summary="Mauris vitae dignissim nunc, vitae facilisis nibh. Ut vitae ornare tellus, in dignissim lacus. Aliquam erat volutpat. Nulla viverra risus quis tempor cursus. Vestibulum sagittis dapibus lorem, vel scelerisque arcu congue et. Quisque id ipsum fringilla mauris ultrices suscipit ac vitae neque. Quisque aliquam lorem venenatis quam hendrerit porttitor."/>
                        </div>
                        <div className={styles.buttonContainer}>
                            <a href="" className={styles.download}>
                                <span>Download CV</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
