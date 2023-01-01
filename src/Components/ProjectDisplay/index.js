import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import "./ProjectDisplay.scss";
import { ThemeContext } from "../../themeContext";
import { useContext } from "react";

function ProjectDisplay(props) {
    const { theme } = useContext(ThemeContext);

    const [ Read, setRead ] = useState();
    const [ lang, setLang ] = useState([]);
    const [user] = useState("thearyanthegr8")

    useEffect(() => {
        const fetchRead = async () => {
            const readRes = await fetch (`https://raw.githubusercontent.com/${user}/${props.name}/main/Summary.txt`)
            const readData = await readRes.text()
            setRead(readData)
        }

        fetchRead()
    }, [props.name, user])

    useEffect(() => {
        const fetchLang = async () => {
            const langRes = await fetch (`https://api.github.com/repos/${user}/${props.name}/languages`)
            const langData = await langRes.json()
            setLang(langData)
        }

        fetchLang();
    }, [props.name, user])

    const keys = Object.keys(lang);

    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{  opacity: 1 }} transition={{ delay: 0.5, duration: 0.2 }} className={`projectContainer ${(props.id % 2 === 0) ? "FloatRight" : "FloatLeft"} ${theme}projectDisplay`}>
            <motion.div initial={{x: ((props.id % 2 === 0) ? "-100%" : "100%"), opacity: 1}} whileInView={{x: 0, opacity: 1}} transition={{ delay: 0.3}} className={`projectContent ${(props.id % 2 === 0) ? "contentRight" : "contentLeft"}`}>
                <h5>Featured Project</h5>
                <h1>{props.name}</h1>
                <motion.div whileHover={{scale: 1.05}} className="summary">
                    <p>
                        {Read}
                    </p>
                </motion.div>
                <div className={`languages ${(props.id % 2 === 0) ? "languageRight" : "languageLeft"}`}>
                    {keys.map((item) => (
                        <p>{item}</p>
                    ))}
                </div>
                <div className={`links ${(props.id % 2 === 0) ? "linkRight" : "linkLeft"}`}>
                    <motion.a initial={{scale: 1}} whileHover={{scale: 1.15,transition: { duration: 0.1 }}} whileTap={{scale: 1.1}} target="_blank" href={props.html_url} className="Github">
                        {console.log(props.html_url)}
                        <Github />
                    </motion.a>
                </div>
            </motion.div>
            <motion.img src={(`https://raw.githubusercontent.com/${user}/${props.name}/main/Cover.jpg`)} alt="Cover" className={`coverImage ${(props.id % 2 === 0) ? "imageRight" : "imageLeft"}`} />
        </motion.div>
    );
}
 
export default ProjectDisplay;