import{
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import MenuPrincipal from "../pages/MenuPrincipal";

function MyRoutes() {
    return ( 
        <Router>
            <Routes>
                <Route exact path="/" element={<MenuPrincipal/>} />
            </Routes>
        </Router>
     );
}

export default MyRoutes;