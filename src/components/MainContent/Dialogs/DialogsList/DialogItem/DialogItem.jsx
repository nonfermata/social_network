import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = props => {
    let path = "/dialogs/" + props.id
    return (
        <li className={classes.item}>
            <img src={props.avaURL} alt="avatar" />
            <NavLink to={path} className={link => link.isActive ? classes.active : null}>
                {props.name}
            </NavLink>
        </li>
    )
}

export default DialogItem