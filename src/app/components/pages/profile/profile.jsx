import React from "react";
import classes from "./profile.module.css";
import ProfileCard from "../../ui/profileCard/profileCard";
import PropTypes from "prop-types";
import Posts from "../../ui/posts/posts";
import { connect } from "react-redux";

const Profile = ({ profile }) => {
    return (
        <>
            <div className={classes.topImg}></div>
            <div className={classes.profileWrap}>
                <ProfileCard
                    profileAvatarURL={profile.avatarURL}
                    name={profile.name}
                    dateOfBirth={profile.dateOfBirth}
                    city={profile.city}
                    website={profile.website}
                    phone={profile.phone}
                />
                <Posts />
            </div>
        </>
    );
};
Profile.propTypes = {
    profile: PropTypes.object
};

const mapStateToProps = ({ profile }) => ({
    profile
});

export default connect(mapStateToProps)(Profile);
