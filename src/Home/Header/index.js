import { useContext } from "react";
import { ThemeContext } from "../../themeContext";
import { motion } from "framer-motion";
import useScript from "./useScript";
import "./header.scss";

function Header({url}) {
    const { theme } = useContext(ThemeContext);
    useScript(url)

    return (
        <div className={`heroSection ${theme}home`}>
            <div className="background">
                <motion.div initial={{width: "0%"}} animate={{width: ["0%", "100%", "48%", "51%", "50%"]}} className="header-section1"></motion.div>
                <motion.div className="header-section2"></motion.div>
            </div>
            
            <div className="text">
            <canvas id="canvas" />
                <motion.div animate={{scale: [10, 0.8, 1.3, 0.9, 1.1, 1]}} transition={{duration: 1}} className="content">
                    <div className="only-text">
                        <h6>Welcome, to my digital masterpiece</h6>
                        <h5>I am</h5>
                        <h1>Aryan</h1>
                        <h3>Creating innovative solutions with code <br /> one line at a time</h3>
                    </div>
                    <motion.button initial={{opacity: 0, y: "50px"}} animate={{opacity: 1, y: ["100px", "50px", "0px"]}} transition={{delay: 1}}>
                        Explore my work
                        <div className="backgrounds">
                            <div className="bg1"></div>
                            <div className="bg2"></div>
                            <div className="bg3">
                                <div className="background1"></div>
                                <div className="background2"></div>
                            </div>
                        </div>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}

export default Header;