import TopnavbarESP from "../comp/TopnavbarESP";
import {Container, Paper} from "@mui/material";
import {Divider} from "@nextui-org/react";
import * as React from "react";
import TablaHerramientas from "../comp/TablaHerramientas";
import BackgroundImage from "../comp/BackgroundImage";
import backn from "../foto/back.jpg";
import ExpandableRectangle from "../comp/ExpandableRectangle";
import CardHerr from "../comp/CardHerr";
import Cardserv from "../comp/Cardserv";

export default function HerramientasPageESP(){
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
        ["Desarrolladores de herramientas web como landing pages o páginas informativas como soporte a operaciones que lo requieran",""]
    ];
    return (
        <div className='w-full'>
            <BackgroundImage image={backn} overlay>
                <TopnavbarESP/>
                <div style={{
                    position: 'relative',
                    color: 'black',
                    textAlign: 'center',
                    padding: '2rem',
                }}>
                    <h1 className='py-5 font-bold text-white'
                        style={{fontSize: '52px', textAlign: 'center'}}>HERRAMIENTAS DE VALOR</h1>
                    <Container className='mb-8' sx={{mb:8}}>
                        <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                        <Paper elevation={3}
                               sx={{
                                   borderRadius: "30px",
                                   p: 2,
                                   mb: 25,
                                   mt: 4,
                                   overflow: "hidden",
                                   color: '#e3e3db',
                                   maxWidth: '100%',
                                   maxHeight: '100%'}}
                               className='grid grid-cols-1 '>
                            {herrs.map(([item, descrip], index) => (
                                <CardHerr titulo={item}/>
                            ))}
                        </Paper>
                    </Container>
                </div>
            </BackgroundImage>
        </div>
    )
}
/*
 <>
        <TopnavbarESP/>
        <div className=''>
            <div >
                <h1 className='pt-3 pb-3 font-bold text-white'
                    style={{fontSize: '52px', textAlign: 'center'}}>HERRAMIENTAS</h1>

            </div>
            <div className='flex'>
                <Container className='mb-8'>
                    <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                    <TablaHerramientas/>
                </Container>
            </div>
        </div>
    </>
 */