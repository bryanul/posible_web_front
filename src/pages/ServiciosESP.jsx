import TopnavbarESP from "../comp/TopnavbarESP";
import * as React from "react";
import Cardserv from "../comp/Cardserv";
import {Container} from "@mui/material";
import {Divider} from "@nextui-org/react";
import Footer from "../comp/Footer";
const ServiciosESP = () => {
    const servicios = [
        "ATENCIÓN INFORMES",
        "DESARROLLO Y GESTIÓN DE ENCUESTAS",
        "ACTUALIZACIÓN DE BASES DE DATOS",
        'CONFIRMACIÓN DE ASISTENCIA A EVENTOS',
        'GENERACIÓN Y CONCERTACIÓN DE CITAS',
        'FIDELIZACIÓN DE CLIENTES',
        'OPERACIONES FULL FILMENT',
        'OUTSOURCING DE PERSONAL (CAMPO - INHOUSE)'
    ];


    return(
        <>
            <TopnavbarESP/>
            <div className='h-screen w-full bgblack'>
                <div >
                    <h1 className='pt-3 pb-3 font-bold text-white' style={{fontSize: '60px', textAlign: 'center'}}>NUESTROS SERVICIOS</h1>
                    <Divider className="my-4" style={{ height: '2px', width: '300px', margin: '0 auto' }} />
                </div>
                <Container>
                    <div className='grid md:grid-cols-4 justify-center gap-5 pt-5 pb-10'>
                        {servicios.map((item, index) => (
                                <Cardserv titulo={item}/>
                        ))}
                    </div>
                </Container>
            </div>
            </>
    )
}
export default ServiciosESP