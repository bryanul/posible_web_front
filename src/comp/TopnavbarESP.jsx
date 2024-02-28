import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Divider
} from "@nextui-org/react";
import LogoP2 from "../foto/logoT.png";
import '../index.css'
import Languages from "./Languages";
import { useNavigate, useLocation } from "react-router-dom";
export default function TopnavbarESP() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const navigate = useNavigate()
    const location = useLocation();
    const menuItems = [
        ["NOSOTROS", 'nosotros'],
        ["MERCADO\nOBJETIVO", 'mercadoobj'],
        ["SERVICIOS", 'servicios'],
        ["HERRAMIENTAS DE OPERACIÓN", 'herraop']
    ];

    const rutear = (ruta) => {
        navigate(`/${ruta}`)
    }

    return (<>
        <Navbar onMenuOpenChange={setIsMenuOpen} className='bgblack'>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    {!location.pathname.includes('main') &&
                    <img src={LogoP2} alt="logo" className='alturasvg App-logo' onClick={()=>rutear("main")}/>
                    }
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map(([item,ruta], index) => (
                    <NavbarItem key={`${item}-${index}`} >
                        <Link style={{ color: location.pathname.includes(ruta) ? '#b16364' : 'inherit' }} href=""  className='hover:underline font-bold' onClick={()=>rutear(ruta)}>
                            {item}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Languages/>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map(([item,ruta], index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            style={{ color: location.pathname.includes(ruta) ? '#b16364' : 'inherit' }}
                            className="w-full font-bold"
                            href="#"
                            size="lg"
                            onClick={()=>rutear(ruta)}
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
        <Divider className="my-4" style={{height: '1px', width: '550px', margin: '0 auto'}} sx={{backgroundColor: 'white' }}/>
    </>
    );
}
