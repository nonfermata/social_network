import React from 'react'
import classes from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <nav className={classes.myNav}>
                <ul>
                    <li><a href="#">profile</a></li>
                    <li><a href="#">messages</a></li>
                    <li><a href="#">news</a></li>
                    <li><a href="#">music</a></li>
                    <li><a href="#">settings</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar