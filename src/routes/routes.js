import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import Teste from "../pages/Teste";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/areas-de-atuaçao" element={<Services />} ></Route>
                <Route path="/sobre-nós" element={<AboutUs />} ></Route>
                <Route path="/política-de-privacidade" element={<PrivacyPolicy /> } ></Route>
                <Route path="/teste" element={<Teste /> } ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;