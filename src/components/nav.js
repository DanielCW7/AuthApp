import { Link } from "react-router-dom";
import LogoutButton from "./logout";


const Navbar = () => {
    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to="/login"> Login </Link>
            <LogoutButton />
        </div>
    )
}

export default Navbar