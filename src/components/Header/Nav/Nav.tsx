import React from 'react';
import styles from './Nav.module.scss';
import containerStyles from '../../common/styles/Container.module.scss';

const Nav = () => {
    return (
        <div className={containerStyles.container}>
            <div className={styles.navContainer}>
                <div className={styles.menu}>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Skills </a>
                    <a href="">Projects</a>
                    <a href="">Contacts</a>
                </div>
            </div>
        </div>
    )
}

export default Nav
