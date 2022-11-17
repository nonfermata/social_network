import React from "react";
import classes from "./dialogsList.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const DialogsList = ({ users }) => {
    return (
        <ul className={classes.dialogsList}>
            {users.map((user) => (
                <li key={user._id} className={classes.person}>
                    <img src={user.avatarURL} alt="avatar" />
                    <NavLink
                        to={"/dialogs/" + user.name}
                        className={(link) =>
                            link.isActive ? classes.active : null
                        }
                    >
                        {user.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};
DialogsList.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
};

export default DialogsList;
