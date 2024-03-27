import TopnavbarEN from "../comp/TopnavbarEN";
import {Container, Paper} from "@mui/material";
import {Divider} from "@nextui-org/react";
import * as React from "react";
import TablaHerramientas from "../comp/TablaHerramientas";
import BackgroundImage from "../comp/BackgroundImage";
import backn from "../foto/back.jpg";
import TopnavbarESP from "../comp/TopnavbarESP";
import CardHerr from "../comp/CardHerr";
import Footerweb from "../comp/Footerweb";
import useTitle from "../comp/useTitle";
import {motion} from 'framer-motion'

export default function HerramientasPageEN(){
    useTitle('Operation tools | -posible.');
    const herrs = [
        ["Telefonía VOIP", "Números telefónicos dedicados exclusivos para todas las operaciones\n" +
        "(la implementación de estos números telefónicos en todas los clientes y sus operaciones son sin costo)"],
        ["Grabación de llamadas",""],
        ["Campañas de SMS y correos masivos",""],
        ["Integración con canales de comunicación como WhatsApp y redes sociales en las operaciones que lo requieran",""],
        ["Herramientas tecnólogas propias para operaciones InHouse",""],
        ["Respuesta de voz interactiva (IVR)",""],
        ["Seguridad de la información",""],
        ["Capacitación constante de todo el personal",""],
        ["Integración CTI",""],
        ["Herramientas web como landing pages o páginas informativas como soporte a operaciones que lo requieran",""]
    ];
    return(
        <div className='w-full'>
            <BackgroundImage image={backn} overlay>
                <TopnavbarEN/>
                <div style={{
                    position: 'relative',
                    color: 'black',
                    textAlign: 'center',
                    padding: '2rem',
                }}>
                    <motion.div animate={{y: 0}} transition={{duration: 1.5}} initial={{y: -100}}>
                        <h1 className='py-5 font-bold text-black'
                            style={{fontSize: '52px', textAlign: 'center'}}>operation tools</h1>
                    </motion.div>
                    <Container className=''>
                        <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                        <motion.div animate={{y: 0}} transition={{duration: 1.5}} initial={{y: 150}}>
                            <Paper elevation={3}
                                   sx={{
                                       borderRadius: "30px",
                                       p: 2,
                                       mb: 4,
                                       mt: 4,
                                       overflow: "hidden",
                                       backgroundColor: '#b16364',
                                       maxWidth: '100%',
                                       maxHeight: '100%'
                                   }}
                                   className='grid grid-cols-1 '>
                                {herrs.map(([item, descrip], index) => (
                                    <CardHerr titulo={item}/>
                                ))}
                            </Paper>
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