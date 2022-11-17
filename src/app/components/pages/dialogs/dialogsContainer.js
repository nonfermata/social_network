import { connect } from "react-redux";
import Dialogs from "./dialogs";

const mapStateToProps = (state) => ({
    users: state.users
});

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
