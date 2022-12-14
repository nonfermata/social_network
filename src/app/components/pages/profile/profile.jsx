import React, { useEffect, useState } from "react";
import classes from "../profile/profile.module.css";
import ProfileCard from "../../ui/profileCard/profileCard";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import Posts from "../../ui/posts/posts";
import { connect } from "react-redux";
import Loader from "../../../utils/loader/loader";

const Profile = ({ users }) => {
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
                    <Posts users={users} />
                </div>
            </>
        );
    }
    return <Loader />;
};
Profile.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = ({ users }) => ({
    users
});

export default connect(mapStateToProps)(Profile);
