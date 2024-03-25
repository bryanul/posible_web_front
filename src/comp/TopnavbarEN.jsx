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
    Divider, DropdownTrigger, Button, DropdownMenu, DropdownItem, Dropdown
} from "@nextui-org/react";
import LogoP2 from "../foto/logoNAV.png";
import '../index.css'
import { useNavigate, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import english from '../foto/english.svg'
import spanish from '../foto/spain.svg'
export default function TopnavbarEN() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState(new Set(["English"]));

    const navigate = useNavigate()

    const menuItems = [
        ["ABOUT", 'nosotros/EN'],
        ["TARGET MARKET", 'mercadoobj/EN'],
        ["SERVICES", 'servicios/EN'],
        ["OPERATION TOOLS", 'herraop/EN'],
        ["CONTACT", 'contacto/EN']
    ];

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );
    const rutear = (ruta) => {
        navigate(`/${ruta}`)
    }

    useEffect(() => {
        if (selectedValue === 'Español'){
            const newPath = location.pathname.replace(/\/EN$/, "");
            navigate(newPath)
        }
    }, [selectedKeys]);

    return (<>
            <Navbar onMenuOpenChange={setIsMenuOpen} className='bgnav'>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        {!location.pathname.includes('main') &&
                            <img src={LogoP2} style={{height:'66px'}} alt="logo" className='alturasvg App-logo' onClick={()=>rutear('main/EN')}/>
                        }
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {menuItems.map(([item,ruta], index) => (
                        <NavbarItem key={`${item}-${index}`} >
                            <Link style={{ color: location.pathname.includes(ruta) ? '#b16364' : location.pathname.includes('main') ? 'inherit' : '#e3e3db'}} href=""  className='hover:underline font-semibold' onClick={()=>rutear(ruta)}>
                                {item}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button
                                    variant="light"
                                    className="capitalize"
                                >
                                    {selectedKeys}
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Single selection example"
                                variant="flat"
                                disallowEmptySelection
                                selectionMode="single"
                                selectedKeys={selectedKeys}
                                onSelectionChange={setSelectedKeys}
                            >
                                <DropdownItem key="Español" startContent={<img style={{height:'12.5px'}} src={spanish}/>}>Español</DropdownItem>
                                <DropdownItem key="English" startContent={<img style={{height:'10px'}} src={english}/>}>English</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
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
