import React from 'react'
import Menu from './menu/menu'
import classes from './sidebar.module.css'

const Sidebar = ({menu}) => {
    return (
        <div className={classes.sidebar}>
            <Menu menu={menu} />
        </div>
    )
}

export default Sidebar