import React from "react";
import classes from "./dialogsList.module.css";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const DialogsList = ({ users }) => {
    return (
        <ul className={classes.dialogsList}>
            {users.map((user) => (
                <li key={user._id} className={classes.person}>
                    <Link to={"/" + user._id}>
                        <img
                            src={user.avatarURL}
                            alt="avatar"
                            title="Go to user profile"
                        />
                    </Link>
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
