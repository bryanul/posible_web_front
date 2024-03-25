import TopnavbarESP from "../comp/TopnavbarESP";
import * as React from "react";
import Cardserv from "../comp/Cardserv";
import {Container} from "@mui/material";
import {Divider} from "@nextui-org/react";
import BackgroundImage from "../comp/BackgroundImage";
import backn from "../foto/back.jpg";
import ExpandableRectangle from "../comp/ExpandableRectangle";
import Footerweb from "../comp/Footerweb";
import useTitle from "../comp/useTitle";
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

    useTitle('Servicios | -posible.')
    return (
        <div className='w-full'>
            <BackgroundImage image={backn} overlay>
                <TopnavbarESP/>
                <div style={{
                    position: 'relative',
                    color: 'white',
                    textAlign: 'center',
                    padding: '2rem',
                }}>
                    <h1 className='py-5 font-bold text-white'
                        style={{fontSize: '60px', textAlign: 'center'}}>nuestros servicios</h1>
                    <Container className=''>
                        <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                        <div className='grid md:grid-cols-4 pt-5 pb-3' style={{}}>
                            {servicios.map((item, index) => (
                                <Cardserv titulo={item}/>
                            ))}
                        </div>
                    </Container>
                </div>
                <div className=''
                     style={{
                         position: 'relative',
                     }}>
                    <Footerweb/>
                </div>
            </BackgroundImage>
        </div>
    )
}
export default ServiciosESP
/*
 <>
            <TopnavbarESP/>
            <div className='' style={{backgroundColor:'#e3e3db'}}>
                <div >
                    <h1 className='pt-3 pb-3 font-bold text-white' style={{fontSize: '60px', textAlign: 'center'}}>NUESTROS SERVICIOS</h1>
                    <Divider className="my-4" style={{ height: '2px', width: '300px', margin: '0 auto' }} />
                </div>
                <Container>
                    <div className='grid md:grid-cols-4 justify-center pt-5 pb-10'>
                        {servicios.map((item, index) => (
                                <Cardserv titulo={item}/>
                        ))}
                    </div>
                </Container>
            </div>
            </>
 */