import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import { SunDim, Moon, X, Menu } from "lucide-react";
// import ThemeChanger from "./themeChanger";
// import Logo from "../Assets/Images/AT light.svg";

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [menu, setMenu] = useState('closed');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={`navbar ${theme}`}>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <svg width="48" height="29" viewBox="0 0 48 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.48 22.8H9.32L6 29H0.48L16.04 0.799998H19.88L23.52 29H18.28L17.48 22.8ZM11.6 18.4H17.28L16.64 12.16L16.68 7.76H16.48L14.88 12.2L11.6 18.4ZM46.8334 5.88H39.0734L34.1534 29H28.9934L33.8734 5.88H26.1134L27.1534 0.999998H47.8334L46.8334 5.88Z"/>
                        </svg>
                    </Link>
                </div>
                <div className={`links ${menu === "closed" ? "closeMenu" : "openMenu"}`}>
                    <Link to="/about" className="Link" onClick={() => setMenu("closed")}>About Me</Link>
                    <Link to="/projects" className="Link" onClick={() => setMenu("closed")}>Projects</Link>
                    <Link to="/blogs" className="Link" onClick={() => setMenu("closed")}>Blogs</Link>
                    <Link to="/contact" className="Link" onClick={() => setMenu("closed")}>Contact Me</Link>
                </div>
                <div className="right">
                    <button className="linkBtn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        {theme === "light" ? <SunDim className="theme-changer" size={14}/> : <Moon className="theme-changer" size={14}/>}
                    </button>
                </div>
                <div className="close">
                    <button className="linkBtn" onClick={() => setMenu(menu === "closed" ? "open" : "closed")}>
                        {menu === "closed" ? <Menu size={14} /> : <X size={14} />}
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;