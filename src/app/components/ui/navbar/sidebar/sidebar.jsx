import React from "react";
import classes from "./sidebar.module.css";
import NavbarContainer from "../navbarContainer";

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <NavbarContainer />
        </div>
    );
};

export default Sidebar;
