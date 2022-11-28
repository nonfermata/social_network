import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

const Navbar = () => {
    const menu = [
        { id: "92675180301", name: "profile" },
        { id: "92675180302", name: "dialogs" },
        { id: "92675180303", name: "news" },
        { id: "92675180304", name: "music" },
        { id: "92675180306", name: "users" },
        { id: "92675180305", name: "settings" }
    ];
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

export default Navbar;
