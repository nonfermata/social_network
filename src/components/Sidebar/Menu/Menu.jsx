import React from "react"
import {NavLink} from "react-router-dom"
import classes from './menu.module.css'

const Menu = ({menu}) => {
    return (
        <nav>
            <ul className={classes.menu}>
                {menu.map((item) => (
                    <li key={item.id} className={classes.item}>
                        <NavLink to={"/" + item.name} className={link => link.isActive ? classes.active : null}>
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default Menu


