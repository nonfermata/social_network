import React from "react"
import {NavLink} from "react-router-dom"
import classes from './Menu.module.css'

const Menu = props => {
    return (
        <nav>
            <ul className={classes.menu}>
                <li className={classes.item}>
                    <NavLink to="/profile" className={link => link.isActive ? classes.active : null}>
                        profile
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/dialogs" className={link => link.isActive ? classes.active : null}>
                        dialogs
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/news" className={link => link.isActive ? classes.active : null}>
                        news
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/music" className={link => link.isActive ? classes.active : null}>
                        music
                    </NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/settings" className={link => link.isActive ? classes.active : null}>
                        settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    )

}

export default Menu


