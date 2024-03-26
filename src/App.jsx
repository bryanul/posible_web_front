import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import MainPageESP from "./pages/MainPageESP";
import ServiciosESP from "./pages/ServiciosESP";
import NosotrosPageESP from "./pages/NosotrosPageESP";
import MercadoObjPageESP from "./pages/MercadoObjPageESP";
import HerramientasPageESP from "./pages/HerramientasPageESP";
import ContactoPageESP from "./pages/ContactoPageESP";
import MainPageEN from "./pages/MainPageEN";
import ServiciosEN from "./pages/ServiciosEN";
import NosotrosPageEN from "./pages/NosotrosPageEN";
import MercadoObjPageEN from "./pages/MercadoObjPageEN";
import HerramientasPageEN from "./pages/HerramientasPageEN";
import ContactoPageEN from "./pages/ContactoPageEN";


function App() {
    return (
        <>
            <Routes>
                <Route
                    exact path=""
                    element={<Navigate to="/main" replace/>}
                />
                <Route exact path="/main" element={<MainPageESP />} />
                <Route exact path="/main/EN" element={<MainPageEN />} />
                <Route exact path="/servicios" element={<ServiciosESP />} />
                <Route exact path="/nosotros" element={<NosotrosPageESP />} />
                <Route exact path="/mercadoobj" element={<MercadoObjPageESP />} />
                <Route exact path="/herraop" element={<HerramientasPageESP />} />
                <Route exact path="/contacto" element={<ContactoPageESP />} />
                <Route exact path="/servicios/EN" element={<ServiciosEN />} />
                <Route exact path="/nosotros/EN" element={<NosotrosPageEN />} />
                <Route exact path="/mercadoobj/EN" element={<MercadoObjPageEN />} />
                <Route exact path="/herraop/EN" element={<HerramientasPageEN />} />
                <Route exact path="/contacto/EN" element={<ContactoPageEN />} />
            </Routes>
        </>
    );
}

export default App;
