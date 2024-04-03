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
    const servicios2 = [
        {
            id : 1,
            title: "ATENCIÓN INFORMES",
            info: 'Las operaciones de atención de informes son uno de los puntos que debe diferenciarte cuando tienes alguna operación de servicios, productos o temporales. Debes contar en todo momento con personal disponible, resolviendo dudas y dando información por algo específico. En POSIBLE tenemos servicios integrales que cubren estas necesidades sin tener que contratar personal adicional para ello, sino que nosotros lo hacemos por ti.'
        },
        {
            id : 2,
            title: "DESARROLLO Y GESTIÓN DE ENCUESTAS",
            info: 'Cuando las empresas cuentan con un Target específico que cumplir en el desarrollo, mantenimiento o mejorar un producto, bien o servicio. En POSIBLE podemos aplicar una encuesta o desarrollarla desde cero para ser aplicado en un estudio de mercado, análisis de productos, consumidor o estudios de áreas específicas de una empresa, las encuestas pueden ser desarrolladas de forma virtual o presencial adecuándonos a la necesidad del cliente.'
        },
        {
            id : 3,
            title: "ACTUALIZACIÓN DE BASES DE DATOS",
            info: 'La mayoría de compañías con fines comerciales cuentan con sus bancos de bases las cuales a lo largo de periodos van necesitando ser enriquecidas o actualizarse  con información actual la cual permite llegar a un alto porcentaje de efectividad para ellos POSIBLE ofrece sus variadas herramientas de gestión para el logro efectivo de esta necesidad.'
        },
        {
            id : 4,
            title: 'CONFIRMACIÓN DE ASISTENCIA A EVENTOS',
            info: 'Si tu compañía cuenta con eventos por desarrollar o reuniones masivas y necesitas lograr la mayor cantidad de asistentes. En POSIBLE gestionaremos un contacto efectivo con estos listados antes y durante la fecha del evento con la finalidad de confirmar la recepción de la invitación, cubrir dudas al respecto, y gestionaremos aún en la fecha del evento para que los invitados logren sus asistencias sin retraso alguno de esta manera lograremos que tu compañía cuente con el resultado que buscas.'
        },
        {
            id : 5,
            title: 'GENERACIÓN Y CONCERTACIÓN DE CITAS',
            info: 'Uno de los principales objetivos de las áreas comerciales es lograr reuniones efectivas con prospectos o clientes, para esto POSIBLE generará leads con las bases propias de los clientes o sobre nuestras bases, buscando como principal objetivo una reunión efectiva en la fecha y hora adecuada de esta manera los asesores lograrán las oportunidades en menos tiempo solo orientándose a resultados.'
        },
        {
            id : 6,
            title: 'FIDELIZACIÓN DE CLIENTES',
            info: 'En POSIBLE podemos adecuarnos a tus necesidades de mantener y recuperar a tus clientes, ofrecemos servicios emocionales de gran valor añadido para fidelizar clientes, retener a los recién llegados y para atraer a otros nuevos, podemos ofrecer una atención personalizada las 24h y omnicanal, considerando que tus clientes son lo más importante siempre trabajaremos con creatividad, corazón y cuidado.'
        },
        {
            id: 7,
            title: 'OPERACIONES FULL FILMENT',
            info: 'Si cuentas con la necesidad de gestionar alguna campaña que inicia en el contacto con clientes para poder ofrecerles algún producto, aplicando validaciones y terminando en la entrega del mismo, POSIBLE puede lo puede desarrollar desde cero hasta la entrega efectiva mediante procesos y uso de herramientas inteligentes para una operación de alto nivel.'
        },
        {
            id: 8,
            title: 'OUTSOURCING DE PERSONAL (CAMPO - INHOUSE)',
            info: 'POSIBLE puede cubrir toda necesidad de personal con perfiles únicos para tus diferentes operaciones comerciales, administrativas, tecnológicas, etc. Podemos implantar este personal donde sea la necesidad de aplicarse como gestiones de campo, InHouse (en tus instalaciones) o en las nuestras. Las operaciones pueden ser temporales o permanentes.'
        }
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
                    <motion.div animate={{y: 0}} transition={{duration: 1.5}} initial={{y: -100}}>
                        <h1 className='py-5 font-bold text-black'
                            style={{fontSize: '60px', textAlign: 'center'}}>nuestros servicios</h1>
                    </motion.div>
                    <Container className=''>
                        <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                        <motion.div animate={{y: 0}} transition={{duration: 1.5}} initial={{y: 150}}>
                            <div className='grid md:grid-cols-4 pt-5 pb-3' style={{}}>
                                {servicios2.map((item, index) => (
                                    <Cardserv titulo={item.title} info={item.info}/>
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