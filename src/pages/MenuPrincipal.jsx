import Navigation from "../components/Navigation";
import { Light, Dark } from "../styles/Themes";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import RoadMap from "../components/sections/RoadMap";
import ShowCase from "../components/sections/ShowCase";
import Team from "../components/sections/Team";
import Preguntas from "../components/sections/Preguntas";
import Footer from "../components/sections/Footer";
import ScrollToTop from "../components/ScrollToTop";

function MenuPrincipal() {
    return ( 
        <main>
            <GlobalStyles />
            <ThemeProvider theme={Light}>
                <Navigation />
                <Home />
                <About />
                <RoadMap />
                <ShowCase />
                <Team />
                <Preguntas />
                <Footer />
                <ScrollToTop />

            </ThemeProvider>
        </main>
     );
}

export default MenuPrincipal;