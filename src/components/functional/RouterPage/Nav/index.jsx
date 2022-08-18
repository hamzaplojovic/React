import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
    return (
        <div className="nav">
            <Link className="navItem" to="/">
                Home
            </Link>
            <Link className="navItem" to="/team">
                Team
            </Link>
            <Link className="navItem" to="/contacts">
                Contacts
            </Link>
            <Link className="navItem" to="/about">
                About
            </Link>
            <Link className="navItem" to="/users">
                Users
            </Link>
        </div>
    );
};

export default Nav;
