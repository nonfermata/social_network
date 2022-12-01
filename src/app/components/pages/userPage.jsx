import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./profile/profile.module.css";
import ProfileCard from "../ui/profileCard/profileCard";
import Loader from "../../utils/loader/loader";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const UserPage = ({ users }) => {
    const { userId } = useParams();
    const [profile, setProfile] = useState();
    useEffect(() => {
        setProfile(users.find((user) => user._id === (userId || "9253678000")));
    }, [users]);
    if (profile) {
        return (
            <>
                <div className={classes.topImg}></div>
                <div className={classes.profileWrap}>
                    <ProfileCard
                        profileAvatarURL={profile.avatarURL}
                        name={profile.name}
                        location={profile.location}
                        status={profile.status}
                    />
                </div>
            </>
        );
    }
    return <Loader />;
};
UserPage.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = ({ users }) => ({
    users
});

export default connect(mapStateToProps)(UserPage);
