import Header from "./Header";
import HorizontalScroll from "./HorizontalScroll";
import "./home.scss";
import About from "./About";
import Project from "./Projects";
import Footer from "../Components/Footer";

function HomePage() {

    return (
        <>
            <Header />
            <HorizontalScroll />
            <About />
            <Project />
            <Footer />
        </>
    );
}
 
export default HomePage;