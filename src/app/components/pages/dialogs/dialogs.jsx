import React from "react";
import { Route, Routes } from "react-router-dom";
import classes from "./dialogs.module.css";
import DialogsList from "../../ui/dialogs/dialogsList/dialogsList";
import PropTypes from "prop-types";
import Dialog from "../../ui/dialogs/dialog/dialog";
import { connect } from "react-redux";

const Dialogs = ({ users }) => {
    return (
        <div className={classes.dialogsWrap}>
            <DialogsList users={users} />
            <div className={classes.separator}></div>
            <Routes>
                {users.map((item) => (
                    <Route
                        key={item._id}
                        path={item.name}
                        element={
                            <Dialog
                                userId={item._id}
                                userAvatarURL={item.avatarURL}
                            />
                        }
                    />
                ))}
            </Routes>
        </div>
    );
};
Dialogs.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = ({ users }) => ({
    users
});

export default connect(mapStateToProps)(Dialogs);
