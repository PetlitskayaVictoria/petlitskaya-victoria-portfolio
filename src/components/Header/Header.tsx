import React from 'react';
import styles from './Header.module.scss';
import Nav from "./Nav/Nav";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Nav/>
        </div>
    )
}

export default Header