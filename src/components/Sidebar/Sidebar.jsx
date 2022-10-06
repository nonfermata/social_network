import React from 'react'
import Menu from './menu/menu'
import classes from './sidebar.module.css'
import {mainMenu} from "../../data/mainMenu";

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <Menu menu={mainMenu} />
        </div>
    )
}

export default Sidebar