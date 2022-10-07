import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./dialogsList.module.css";

const DialogLink = ({ id, avatarURL, name }) => {
    return (
        <li className={classes.person}>
            <img src={avatarURL} alt="avatar" />
            <NavLink to={"/dialogs/" + name} className={link => link.isActive ? classes.active : null}>
                {name}
            </NavLink>
        </li>
    )
}

export default DialogLink