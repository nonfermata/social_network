import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./users.module.css";
import User from "../../ui/user/user";
import { followChangeAC } from "../../../redux/usersReducer";
import { connect } from "react-redux";

class UsersClass extends Component {
    render() {
        return (
            <div className={classes.usersWrap}>
                {this.props.users.map((user) => {
                    return (
                        <User
                            key={user._id}
                            user={user}
                            onFollowChange={() =>
                                this.props.followChange(user._id)
                            }
                        />
                    );
                })}
            </div>
        );
    }
}
UsersClass.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);
