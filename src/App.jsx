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
                    path="*"
                    element={<Navigate to="/main" replace/>}
                />
                <Route path="/main" element={<MainPageESP />} />
                <Route path="/main/EN" element={<MainPageEN />} />
                <Route path="/servicios" element={<ServiciosESP />} />
                <Route path="/nosotros" element={<NosotrosPageESP />} />
                <Route path="/mercadoobj" element={<MercadoObjPageESP />} />
                <Route path="/herraop" element={<HerramientasPageESP />} />
                <Route path="/contacto" element={<ContactoPageESP />} />
                <Route path="/servicios/EN" element={<ServiciosEN />} />
                <Route path="/nosotros/EN" element={<NosotrosPageEN />} />
                <Route path="/mercadoobj/EN" element={<MercadoObjPageEN />} />
                <Route path="/herraop/EN" element={<HerramientasPageEN />} />
                <Route path="/contacto/EN" element={<ContactoPageEN />} />
            </Routes>
        </>
    );
}

export default App;
