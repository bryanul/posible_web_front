import TopnavbarEN from "../comp/TopnavbarEN";
import * as React from "react";
import Cardserv from "../comp/Cardserv";
import {Container} from "@mui/material";
import {Divider} from "@nextui-org/react";
import BackgroundImage from "../comp/BackgroundImage";
import backn from "../foto/back.jpg";
import TopnavbarESP from "../comp/TopnavbarESP";
import Footerweb from "../comp/Footerweb";
import useTitle from "../comp/useTitle";
import {motion} from 'framer-motion'
const ServiciosEN = () => {
    const servicios = [
        "ATENCIÓN INFORMES TRADUCIR",
        "DESARROLLO Y GESTIÓN DE ENCUESTAS TRADUCIR",
        "ACTUALIZACIÓN DE BASES DE DATOS TRADUCIR",
        'CONFIRMACIÓN DE ASISTENCIA A EVENTOS TRADUCIR',
        'GENERACIÓN Y CONCERTACIÓN DE CITAS TRADUCIR',
        'FIDELIZACIÓN DE CLIENTES TRADUCIR',
        'OPERACIONES FULL FILMENT TRADUCIR',
        'OUTSOURCING DE PERSONAL (CAMPO - INHOUSE) TRADUCIR'
    ];

    useTitle('Services | -posible.')
    return (
        <div className='w-full'>
            <BackgroundImage image={backn} overlay>
                <TopnavbarEN/>
                <div style={{
                    position: 'relative',
                    color: 'white',
                    textAlign: 'center',
                    padding: '2rem',
                }}>
                    <motion.div animate={{y: 0}} transition={{duration: 1.5}} initial={{y: -100}}>
                        <h1 className='py-5 font-bold text-black'
                            style={{fontSize: '60px', textAlign: 'center'}}>our services</h1>
                    </motion.div>
                    <Container className=''>
                        <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                        <motion.div animate={{y: 0}} transition={{duration: 1.5}} initial={{y: 150}}>
                            <div className='grid md:grid-cols-4 pt-5 pb-3' style={{}}>
                                {servicios.map((item, index) => (
                                    <Cardserv titulo={item}/>
                                ))}
                            </div>
                        </motion.div>
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
export default ServiciosEN