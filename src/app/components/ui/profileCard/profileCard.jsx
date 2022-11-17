import React from "react";
import classes from "./profileCard.module.css";
import PropTypes from "prop-types";

const ProfileCard = ({
    profileAvatarURL,
    name,
    dateOfBirth,
    city,
    website,
    phone
}) => {
    const { userCard, avatar, description, tittleName, value, contacts } =
        classes;
    return (
        <div className={userCard}>
            <img className={avatar} src={profileAvatarURL} alt="avatar" />
            <div className={description}>
                <h1 className={tittleName}>{name}</h1>
                <p>
                    Date of birth: <span className={value}>{dateOfBirth}</span>
                </p>
                <p>
                    City: <span className={value}>{city}</span>
                </p>
                <div className={contacts}>
                    <p>
                        Web-site: <span className={value}>{website}</span>
                    </p>
                    <p>
                        Telephon: <span className={value}>{phone}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
ProfileCard.propTypes = {
    profileAvatarURL: PropTypes.string,
    name: PropTypes.string,
    dateOfBirth: PropTypes.string,
    city: PropTypes.string,
    website: PropTypes.string,
    phone: PropTypes.string
};

export default ProfileCard;
