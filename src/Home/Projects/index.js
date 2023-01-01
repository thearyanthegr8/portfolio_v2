import "./projects.scss";
import { ThemeContext } from "../../themeContext";
import { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import Loading from "../../Components/Loading";
import ProjectDisplay from "../../Components/ProjectDisplay";
import { Link } from "react-router-dom";

function Project() {
    const { theme } = useContext(ThemeContext);

    // const [repoData, setRepoData] = useState();
    // async function repoDataURL() {
    //     //Get repo data about github user
    //     await fetch("https://api.github.com/users/thearyanthegr8/repos")
    //         .then((res) => res.json())
    //         .then(
    //             (result) => {
    //                 console.log(result);
    //                 const list = result.sort((a, b) => {
    //                     if (a.stargazers_count > b.stargazers_count) return -1
    //                     else if (a.stargazers_count < b.stargazers_count) return 1
    //                     return 0
    //                 })
    //                 .map((item, index) => {
    //                     if (index >= 2) return null;
                        
    //                     return(
                            
    //                     <div key={index}>
    //                         {item.name}
    //                     </div>
    //                 )}
    //                 )
    //                 setRepoData(list);
    //             },
    //             (error) => {
    //                 console.log(error);
    //             }
    //         )

        
    // }

    const [items, setItems] = useState([])
    const [users] = useState("thearyanthegr8")

    useEffect(() => {
        const fetchRepos = async () => {
            const res = await fetch (`https://api.github.com/users/${users}/starred`)
            const data = await res.json()
            console.log(data)
            setItems(data)
        }

        fetchRepos()
    }, [users])
    

    return (
        <div className={`projectSection ${theme}project`}>
            <motion.div initial={{ x: "-100%", opacity: 0 }} whileInView={{ x: "0%", opacity: 1 }} transition={{ delay: 0.2 }} className="projectTitle">
                <h5>My Projects</h5>
                <h1>Transforming visions into reality with code</h1>
            </motion.div>
            {!items ? <Loading /> : <>
                {items.map((item) => (
                    <ProjectDisplay key={item.id} {...item}/>
                ))}
            </> }
            <motion.div className="button" initial={{opacity: 0, y: "50px"}} whileInView={{opacity: 1, y: ["10px", "0px"]}} transition={{delay: 0.2}}>
                <Link to="/projects"> 
                    <motion.button >
                        Explore More
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
}
 
export default Project;