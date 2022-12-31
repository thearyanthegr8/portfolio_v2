import "./about.scss";
import { ThemeContext } from "../../themeContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import Portrait from "../../Assets/Images/Profile Picture.jpg";
import { Link } from "react-router-dom";

const About = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`aboutSection ${theme}about`}>
            <motion.div initial={{ x: "-100%", opacity: 0 }} whileInView={{ x: "0%", opacity: 1 }} transition={{ delay: 0.2 }} className="aboutContent">
                <h5>About me</h5>
                <h1>A closer look at the person behind the projects</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Lectus diam vitae bibendum sed malesuada sit pellentesque. Tellus in suspendisse sed sapien potenti nisi aliquam lobortis risus. Arcu faucibus in proin et. Etiam pellentesque mattis sit fames elementum posuere gravida mollis.
                    Id massa diam nunc donec auctor accumsan scelerisque. Amet condimentum ut viverra egestas eu cras id id.</p>
                <motion.div className="button" initial={{opacity: 0, y: "50px"}} animate={{opacity: 1, y: ["25px", "0px"]}} transition={{delay: 0.75}}>
                    <Link to="/about"> 
                        <motion.button >
                            Know More
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
            <motion.div initial={{ x: "100%", opacity: 0 }} whileInView={{ x: "0%", opacity: 1 }} transition={{ delay: 0.2 }}  className="aboutPicture">
                <img src={Portrait} alt="" />
            </motion.div>
        </div>
    );
}
 
export default About;