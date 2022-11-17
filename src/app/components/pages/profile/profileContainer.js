import { connect } from "react-redux";
import Profile from "./profile";

const mapStateToProps = (state) => ({
    profile: state.profile
});

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;
