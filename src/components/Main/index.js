import Contact from "../Contact";
import Curses from "../Curses";
import Footer from "../Footer";
import Mind from "../Mind";
import Sale from "../Sale";
import ShowMore from "../ShowMore";

export default function Main (){
    return(
        <main>
            <Curses/>
            <ShowMore/>
            <Sale/>
            <Mind/>
            <Contact/>
            <Footer/>
        </main>
    );
}