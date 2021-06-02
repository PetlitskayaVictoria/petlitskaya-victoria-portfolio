import React from 'react';
import styles from './About.module.scss';
import containerStyles from '../common/styles/Container.module.scss';
import secondaryPhoto from './../../assets/images/secondaryPhoto.jpg';
import Title from '../common/components/Title/Title';
import Paragraph from '../common/components/Paragraph/Paragraph';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div id="about" className={styles.aBoutContainer}>
            <Fade bottom>
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
                                summary="Young energetic front-end developer looking for the opportunities to grow professionally. Having 4-year background in the IT field as a QA engineer I have a deep understanding of all the software development processes and how Agile projects are run. Taking part in the whole software life cycle and permanent desire to learn something new made me realize that the role of the front-end developer would help me fulfill my potential, develop my capabilities and enjoy the job I am doing every day. Being a part of the international teams I developed good communication skills. Respect and friendly attitude towards everyone around are the ground rules of my philosophy."/>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default About
