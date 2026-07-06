import {NavLink,Link} from "react-router-dom"
import "./navbar.css";

function Navbar(){
    return(
        <>
        <nav className="navbar">
            <div className="nav-left">
            <NavLink to="/rankings" className={({ isActive }) => (isActive ? "active" : "")}>Rankings</NavLink>
            <NavLink to="/search" className={({ isActive }) => (isActive ? "active" : "")}>Search</NavLink>
            <NavLink to="/upcoming-cards" className={({ isActive }) => (isActive ? "active" : "")}>Upcoming Cards</NavLink>
            </div>


            <div className="logo">
                <Link to="/">
                    LOGO
                </Link>
            </div>


            <div className="nav-right">
            <NavLink to="/events" className={({ isActive }) => (isActive ? "active" : "")}>Events</NavLink>
            <NavLink to="/news" className={({ isActive }) => (isActive ? "active" : "")}>News</NavLink>
            <NavLink to="/help-support" className={({ isActive }) => (isActive ? "active" : "")}>Help & Support</NavLink>
            </div>
        </nav>
        </>
    );
}
export default Navbar;