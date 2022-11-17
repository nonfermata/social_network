import { connect } from "react-redux";
import Navbar from "./navbar";

const mapStateToProps = (state) => ({
    menu: state.menu
});

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
