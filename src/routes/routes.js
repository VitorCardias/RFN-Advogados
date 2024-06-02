import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs";
import Servicos from "../pages/Servicos"
import PrivacyPolicy from "../pages/PrivacyPolicy"

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/areas-de-atuaçao" element={<Servicos />} ></Route>
                <Route path="/sobre-nós" element={<AboutUs />} ></Route>
                <Route path="/política-de-privacidade" element={<PrivacyPolicy /> } ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;