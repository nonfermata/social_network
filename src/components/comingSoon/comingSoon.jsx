import React from 'react';
import classes from "./comingSoon.module.css";

const ComingSoon = ({pageName}) => {
    return (
        <div className={classes.comingSoonWrap}>
            <h3>{pageName}</h3>
            <p className={classes.comingMessage}><br/>Comming soon...</p>
        </div>
    );
};

export default ComingSoon;