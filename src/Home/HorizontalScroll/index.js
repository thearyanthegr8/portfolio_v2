import "./scroll.scss";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../../themeContext";

function HorizontalScroll() {
    const { theme } = useContext(ThemeContext);
    
    //Logo Array
    const logos = [
        "https://download.blender.org/branding/community/blender_community_badge_white.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
        "https://cdn.worldvectorlogo.com/logos/django.svg",
        "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
        "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
        "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
        "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
        "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg",    
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
        "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
        "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg"
    ]

    return (
        <div className={`scroll-container ${theme}scroll`}>
            <Marquee pauseOnHover speed={100} gradient={false}>
                    {logos.map(logos => <motion.div whileHover={{scale: 1.1}} className="logo-container"><img src={logos} alt="Logos" className="logos"/></motion.div>)}
            </Marquee>
        </div>
    );
}
 
export default HorizontalScroll;