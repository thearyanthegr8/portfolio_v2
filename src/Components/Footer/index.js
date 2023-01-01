import Map from "../../Assets/Images/Map.jpg";
import "./footer.scss";
import { motion } from "framer-motion";

const Footer = () => {
    const map = "https://www.google.com/maps/place/Golf+Vista+Apartment/@28.4748669,77.5137573,17z/data=!3m1!4b1!4m5!3m4!1s0x390cea886a6b86b9:0x9375cedd0c149455!8m2!3d28.4748622!4d77.5159513";

    return (
        <div className="footerContainer">
            <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.25}} className="content">
                <div className="info">
                    <h1>Aryan Tomar</h1>
                    <a href="mailto:reachme@aryantomar.com" className="email"><h3>reachme@aryantomar.com</h3></a> 
                </div>
                <div className="variousLinks">
                    <div className="socials h3Links">
                        <h2 className="title">Socials</h2>
                        <a href="https://www.instagram.com/mearyantomar/"><motion.h3 whileHover={{scale: 1.1}}>Instagram</motion.h3></a>
                        <a href="https://github.com/thearyanthegr8"><motion.h3 whileHover={{scale: 1.1}}>Github</motion.h3></a>
                        <a href="https://twitter.com/mearyantomar"><motion.h3 whileHover={{scale: 1.1}}>Twitter</motion.h3></a>
                        <a href="https://www.linkedin.com/in/aryan-tomar-1b26681b3/"><motion.h3 whileHover={{scale: 1.1}}>LinkedIn</motion.h3></a>
                        <a href="discordapp.com/users/651324376955879472"><motion.h3 whileHover={{scale: 1.1}}>Discord</motion.h3></a>
                    </div>
                    <div className="company h3Links">
                        <h2 className="title">Company</h2>
                        <a href="/"><motion.h3 whileHover={{scale: 1.1}}>Terms & Conditions</motion.h3></a>
                        <a href="/"><motion.h3 whileHover={{scale: 1.1}}>Privacy Policy</motion.h3></a>
                        <a href="/"><motion.h3 whileHover={{scale: 1.1}}>Cookies</motion.h3></a>
                    </div>
                    <div className="navigations h3Links">
                        <h2 className="title">Navigations</h2>
                        <a href="/"><motion.h3 whileHover={{scale: 1.1}}>About Me</motion.h3></a>
                        <a href="/"><motion.h3 whileHover={{scale: 1.1}}>Projects</motion.h3></a>
                        <a href="/"><motion.h3 whileHover={{scale: 1.1}}>Blog Posts</motion.h3></a>
                        <a href="/"><motion.h3 whileHover={{scale: 1.1}}>Contact Me</motion.h3></a>
                    </div>
                </div>
            </motion.div>
                <a href={map}><motion.img initial={{opacity: 0}} whileHover={{scale: 1.05}} whileInView={{opacity: 1}} src={Map} alt="" className="Map"/></a>
        </div>
    );
}
 
export default Footer;