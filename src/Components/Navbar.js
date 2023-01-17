import { NavLink,useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";


export const Navbar = () => {
    const navLinkStyle = ({isActive}) => {

        return{
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline',

        }

    }
    const navigate = useNavigate();
    const handleClick = () => {
        auth.logout();
        navigate('/');
    }
    const auth = useAuth();
    return ( 
        <nav>
            <NavLink style={navLinkStyle} to="/">Home</NavLink>
            <NavLink style={navLinkStyle} to="/about">About</NavLink>
            <NavLink style={navLinkStyle} to="/products">Products</NavLink>
            <NavLink style={navLinkStyle} to="/users">Users</NavLink>
            <NavLink style={navLinkStyle} to="/profile">Profile</NavLink>
            {
               !auth.user ?  <NavLink style={navLinkStyle} to="/login">Login</NavLink> :
               <NavLink style={navLinkStyle} to="/" onClick={handleClick}>Logout</NavLink>
            }
        </nav>
     );
}

export default Navbar ;