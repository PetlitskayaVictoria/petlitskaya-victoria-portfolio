import React, {useState} from 'react';
import styles from './BurgerNav.module.scss';
import containerStyles from '../../common/styles/Container.module.scss';
import Link from 'react-scroll/modules/components/Link';
import burgerIcon from '../../../assets/images/burger.svg';

const BurgerNav = () => {

    const [isShown, setIsShown] = useState(false)
    const toggleIsShown = () => {
        setIsShown(!isShown)
    }

    return (
        <div className={containerStyles.container}>
            <div className={styles.burgerNavContainer}>
                <div className={styles.burgerIcon} onClick={toggleIsShown}>
                    <img src={burgerIcon} alt={"burgerIcon"}/>
                </div>
                {isShown && <div className={styles.menu}>
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
                </div>}
            </div>
        </div>
    )
}

export default BurgerNav
