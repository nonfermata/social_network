import React from "react";
import classes from "./profile.module.css";
import ProfileCard from "../../ui/profileCard/profileCard";
import PropTypes from "prop-types";
import PostsContainer from "../../ui/posts/postsContainer";

const Profile = ({ profile }) => {
    return (
        <div className={classes.profile}>
            <div className={classes.topImg}></div>
            <div className={classes.content}>
                <ProfileCard
                    profileAvatarURL={profile.avatarURL}
                    name={profile.name}
                    dateOfBirth={profile.dateOfBirth}
                    city={profile.city}
                    website={profile.website}
                    phone={profile.phone}
                />
                <PostsContainer />
            </div>
        </div>
    );
};
Profile.propTypes = {
    profile: PropTypes.object
};

export default Profile;
