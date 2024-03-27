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
import {AnimatePresence, motion} from 'framer-motion'
import {useState} from "react";
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
    const servicios2 = [
        {
            id : 1,
            title: "ATENCIÓN INFORMES"
        },
        {
            id : 2,
            title: "DESARROLLO Y GESTIÓN DE ENCUESTAS"
        },
        {
            id : 3,
            title: "ACTUALIZACIÓN DE BASES DE DATOS"
        },
        {
            id : 4,
            title: 'CONFIRMACIÓN DE ASISTENCIA A EVENTOS'
        },
        {
            id : 5,
            title: 'GENERACIÓN Y CONCERTACIÓN DE CITAS'
        },
        {
            id : 6,
            title: 'FIDELIZACIÓN DE CLIENTES'
        },
        {
            id: 7,
            title: 'OPERACIONES FULL FILMENT'
        },
        {
            id: 8,
            title: 'OUTSOURCING DE PERSONAL (CAMPO - INHOUSE)'
        }
    ]
    const [selectedId, setSelectedId] = useState(null)
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
                    <motion.div animate={{y: 0}} transition={{duration: 1.5}} initial={{y: -100}}>
                        <h1 className='py-5 font-bold text-black'
                            style={{fontSize: '60px', textAlign: 'center'}}>nuestros servicios</h1>
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
                <div className='' style={{position: 'relative',}}>
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