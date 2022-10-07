import React from 'react'
import {NavLink} from "react-router-dom";
import classes from './header.module.css'
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className={classes.header}>
            <NavLink to="/profile" className={classes.link}>
                <img className={classes.logo} src={logo} alt='logo'/>
            </NavLink>
        </header>
    )
}

export default Header

