import React from 'react';
import styles from './Header.module.scss';
import Nav from "./Nav/Nav";
import BurgerNav from "./BurgerNav/BurgerNav";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <Nav/>
            <BurgerNav />
        </div>
    )
}

export default Header
