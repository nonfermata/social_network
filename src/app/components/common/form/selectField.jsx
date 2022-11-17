import React from "react";
import PropTypes from "prop-types";
import classes from "./form.module.css";

const SelectField = ({ defaultOption, options, value, name, onChange }) => {
    return (
        <div>
            <select
                className={classes.select}
                onChange={onChange}
                value={value}
                name={name}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {options.map((option) => (
                    <option key={option._id} value={option._id}>
                        {option.name}
                    </option>
                ))}
                ;
            </select>
        </div>
    );
};
SelectField.propTypes = {
    defaultOption: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
};

export default SelectField;
