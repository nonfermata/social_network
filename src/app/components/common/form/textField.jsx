import React from "react";
import PropTypes from "prop-types";
import classes from "./form.module.css";

const TextField = ({ name, value, onChange, placeholder }) => {
    return (
        <input
            className={classes.input}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};
TextField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default TextField;
