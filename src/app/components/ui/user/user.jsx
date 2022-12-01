import React from "react";
import classes from "./user.module.css";
import PropTypes from "prop-types";
import Button from "../../common/button/button";
import { Link } from "react-router-dom";

const User = ({ user, onFollowChange }) => {
    return (
        <div className={classes.userWrap}>
            <div className={classes.leftBlockWrap}>
                <div className={classes.name}>{user.name}</div>
                <Link to={"/" + user._id}>
                    <img className={classes.avatar} src={user.avatarURL} title="Go to profile page"/>
                </Link>
                <div className={classes.status}>{user.status}</div>
            </div>
            <div className={classes.rightBlockWrap}>
                <div className={classes.countryCityWrap}>
                    <div className={classes.city}>{user.location.city},</div>
                    <div className={classes.country}>
                        {user.location.country}
                    </div>
                </div>
                <Button
                    title={user.followed ? "Unfollow" : "Follow"}
                    onClick={onFollowChange}
                    extraClass={user.followed ? "unfollowBtn" : "followBtn"}
                >
                    {user.followed ? "Unfollow" : "Follow"}
                </Button>
            </div>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object,
    onFollowChange: PropTypes.func
};

export default User;
