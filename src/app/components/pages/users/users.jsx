import React from "react";
import PropTypes from "prop-types";
import classes from "./users.module.css";
import User from "../../ui/user/user";
import { connect } from "react-redux";
import { followChangeAC } from "../../../redux/usersReducer";

const Users = ({ users, followChange }) => {
    return (
        <div className={classes.usersWrap}>
            {users.map((user) => {
                return (
                    <User
                        key={user._id}
                        user={user}
                        onFollowChange={() => followChange(user._id)}
                    />
                );
            })}
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    followChange: PropTypes.func
};

const mapStateToProps = ({ users }) => ({
    users
});

const mapDispatchToProps = (dispatch) => ({
    followChange: (userId) => {
        dispatch(followChangeAC(userId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
