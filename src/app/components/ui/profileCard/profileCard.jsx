import React from "react";
import classes from "./profileCard.module.css";
import PropTypes from "prop-types";

const ProfileCard = ({
    profileAvatarURL,
    name,
    location,
    status
}) => {
    const { userCard, avatar, description, tittleName, livesIn, livesInValue } =
        classes;
    return (
        <div className={userCard}>
            <img className={avatar} src={profileAvatarURL} alt="avatar" />
            <div className={description}>
                <div>
                    <h1 className={tittleName}>{name}</h1>
                    <p className={livesIn}>
                        Lives in:{" "}
                        <span className={livesInValue}>
                            {location.city + ", " + location.country}
                        </span>
                    </p>
                </div>
                <p className={classes.status}>{status}</p>
            </div>
        </div>
    );
};
ProfileCard.propTypes = {
    profileAvatarURL: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
    location: PropTypes.object
};

export default ProfileCard;
