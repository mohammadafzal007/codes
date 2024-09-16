import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar=()=>{
    return <>
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
    </div>
    </>
}

export default Navbar;