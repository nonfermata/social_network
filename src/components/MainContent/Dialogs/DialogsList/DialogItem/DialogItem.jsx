import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./dialogItem.module.css";

const DialogItem = ({ id, avatarURL, name }) => {
    let path = "/dialogs/" + id
    return (
        <li className={classes.item}>
            <img src={avatarURL} alt="avatar" />
            <NavLink to={path} className={link => link.isActive ? classes.active : null}>
                {name}
            </NavLink>
        </li>
    )
}

export default DialogItem