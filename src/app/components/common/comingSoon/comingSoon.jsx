import React from "react";
import classes from "./comingSoon.module.css";
import PropTypes from "prop-types";

const ComingSoon = ({ pageName }) => {
    return (
        <div className={classes.comingSoonWrap}>
            <h3>{pageName}</h3>
            <p className={classes.comingMessage}>
                <br />
                Coming soon...
            </p>
        </div>
    );
};
ComingSoon.propTypes = {
    pageName: PropTypes.string
};

export default ComingSoon;
