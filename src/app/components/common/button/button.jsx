import React from "react";
import classes from "./button.module.css";
import PropTypes from "prop-types";

const Button = ({ children, extraClass, title, onClick }) => {
    const buttonClass = extraClass
        ? classes.btn + " " + classes[extraClass]
        : classes.btn;
    return (
        <button className={buttonClass} title={title} onClick={onClick}>
            {children}
        </button>
    );
};
Button.propTypes = {
    children: PropTypes.string,
    extraClass: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
