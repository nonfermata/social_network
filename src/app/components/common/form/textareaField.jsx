import React from "react";
import PropTypes from "prop-types";
import classes from "./form.module.css";

const TextareaField = ({ name, value, onChange, placeholder }) => {
    return (
        <textarea
            className={classes.textarea}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};
TextareaField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default TextareaField;
