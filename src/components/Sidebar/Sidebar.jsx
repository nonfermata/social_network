import React from 'react'
import Menu from './Menu/Menu'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <Menu />
        </div>
    )
}

export default Sidebar