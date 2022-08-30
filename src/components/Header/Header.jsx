import React from 'react'
import classes from './Header.module.css'
import logo from './logo.png'

const Header = () => {
    return (
        <header className={classes.myHeader}>
            <img src={logo} alt='logo' />
            <p className={classes.header__text}>This is my header</p>
        </header>
    )
}

export default Header

