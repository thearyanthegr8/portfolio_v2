import { React, useEffect, useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { SunDim, Moon, X, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeContext } from "../themeContext";
// import ThemeChanger from "./themeChanger";
// import Logo from "../Assets/Images/AT light.svg";

const Navbar = () => {
    // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const { theme, toggleFunction } = useContext(ThemeContext);

    const [menu, setMenu] = useState('closed');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <motion.div className={`navbar ${theme}navbar `} initial={{y:"-10vh"}} animate={{y: ["-10vh", "5vh", "-2vh", "1vh", "0vh"]}} transition={{duration: 0.8}}>
            <div className="container">
                <motion.div whileHover={{scale: 1.15,transition: { duration: 0.1 }}} whileTap={{scale: 1.1}} className="logo">
                    <Link to="/">
                        <svg width="48" height="29" viewBox="0 0 48 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.48 22.8H9.32L6 29H0.48L16.04 0.799998H19.88L23.52 29H18.28L17.48 22.8ZM11.6 18.4H17.28L16.64 12.16L16.68 7.76H16.48L14.88 12.2L11.6 18.4ZM46.8334 5.88H39.0734L34.1534 29H28.9934L33.8734 5.88H26.1134L27.1534 0.999998H47.8334L46.8334 5.88Z"/>
                        </svg>
                    </Link>
                </motion.div>
                <motion.div className={`links ${menu === "closed" ? "closeMenu" : "openMenu"}`}>
                        <motion.div whileHover={{scale: 1.15,transition: { duration: 0.1 }}} whileTap={{scale: 1.1}}><NavLink to="/about" className="Link" onClick={() => setMenu("closed")}>About Me</NavLink></motion.div>
                        <motion.div whileHover={{scale: 1.15,transition: { duration: 0.1 }}} whileTap={{scale: 1.1}}><NavLink to="/projects" className="Link" onClick={() => setMenu("closed")}>Projects</NavLink></motion.div>
                        <motion.div whileHover={{scale: 1.15,transition: { duration: 0.1 }}} whileTap={{scale: 1.1}}><NavLink to="/blogs" className="Link" onClick={() => setMenu("closed")}>Blogs</NavLink></motion.div>
                        <motion.div whileHover={{scale: 1.15,transition: { duration: 0.1 }}} whileTap={{scale: 1.1}}><NavLink to="/contact" className="Link" onClick={() => setMenu("closed")}>Contact Me</NavLink></motion.div>
                </motion.div>
                <div className="right">
                    <motion.button whileHover={{scale: 1.15,transition: { duration: 0.1 }}} className="linkBtn" onClick={toggleFunction}>
                        {theme === "light" ? <SunDim className="theme-changer" size={14}/> : <Moon className="theme-changer" size={14}/>}
                    </motion.button>
                </div>
                <div className="close">
                    <motion.button whileHover={{scale: 1.15,transition: { duration: 0.1 }}} className="linkBtn" onClick={() => setMenu(menu === "closed" ? "open" : "closed")}>
                        {menu === "closed" ? <Menu size={14} /> : <X size={14} />}
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}
 
export default Navbar;