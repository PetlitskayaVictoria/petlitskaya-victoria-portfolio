import React from 'react';
import styles from './Nav.module.scss';
import containerStyles from '../../common/styles/Container.module.scss';
import Link from 'react-scroll/modules/components/Link';

const Nav = () => {
    return (
        <div className={containerStyles.container}>
            <div className={styles.navContainer}>
                <div className={styles.menu}>
                    <Link
                        activeClass={styles.active}
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={- 1}
                        duration={500}
                    >Main</Link>
                    <Link
                        activeClass={styles.active}
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={- 1}
                        duration={500}
                    >About</Link>
                    <Link
                        activeClass={styles.active}
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={- 1}
                        duration={500}
                    >Skills</Link>
                    <Link
                        activeClass={styles.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                    >Projects</Link>
                    <Link
                        activeClass={styles.active}
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={1}
                        duration={500}
                    >Contacts</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav
