import myimg from "./Nicon.png";
import mybars from "./menu.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();

    const navhome = () => {
        navigate("/");
    }
    const navform = () => {
        navigate("/loans");
    }

    return ( 
        <nav className="navbar">
            <label onClick={()=> {}}><img className="navlogo" src={myimg} alt="logo" /></label>
            <input type="checkbox" id="bars"></input>
            <label htmlFor="bars"><img className="menudrop" src={mybars} alt="bars" /></label>
            <ul className="navlist">
                <li onClick={navhome}className="navicons" >HOME</li>
                <li onClick={navform}className="navicons" >LOANS</li>         
            </ul>
            
        </nav>
    );
}

export default Navbar