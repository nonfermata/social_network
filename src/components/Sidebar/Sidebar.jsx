import React from 'react'
import Menu from './menu/menu'
import classes from './sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <Menu />
        </div>
    )
}

export default Sidebar