import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";
import PropTypes from "prop-types";

const Navbar = ({ menu }) => {
    return (
        <nav>
            <ul className={classes.menu}>
                {menu.map((item) => (
                    <li key={item.id} className={classes.item}>
                        <NavLink
                            to={"/" + item.name}
                            className={(link) =>
                                link.isActive ? classes.active : null
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
Navbar.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.object)
};

export default Navbar;
