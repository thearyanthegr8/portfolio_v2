import { useContext } from "react";
import { ThemeContext } from "../themeContext";
import "./home.scss";

const HomePage = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`background`}>
            <div className="section1"></div>
            <div className="section2 "></div>
        </div>
    );
}
 
export default HomePage;