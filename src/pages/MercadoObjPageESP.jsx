import TopnavbarESP from "../comp/TopnavbarESP";
import {Container, Paper} from "@mui/material";
import {Divider} from "@nextui-org/react";
import * as React from "react";
import BackgroundImage from "../comp/BackgroundImage";
import backn from "../foto/back.jpg";
import Footerweb from "../comp/Footerweb";
import useTitle from "../comp/useTitle";
import {motion} from 'framer-motion'
const MercadoObjPageESP = () => {
    useTitle('Mercado objetivo | -posible.')
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
                            style={{fontSize: '60px', textAlign: 'center'}}>mercado objetivo</h1>
                    </motion.div>
                        <div>
                            <Container>
                                <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                                <motion.div animate={{y: 0}} transition={{duration: 1.5}} initial={{y: 150}}>
                                    <Paper elevation={3}
                                           className='p-3 md:p-4'
                                           sx={{
                                               borderRadius: "30px",
                                               mb: 14,
                                               mt: 4,
                                               overflow: "hidden",
                                               maxWidth: '100%',
                                               maxHeight: '100%',
                                               backgroundColor: '#b16364',
                                               color: 'white',
                                               fontSize: '25px'
                                           }}>

                                        <h1 className='py-5 text-xl md:text-[25px]/[35px]'
                                            style={{textAlign: 'center', justifyContent: 'center'}}>
                                            <strong> Posible</strong>, dirige sus operaciones como el socio ideal para
                                            compañías
                                            en el desarrollo de proyectos en las áreas de marketing, publicidad,
                                            comercial,
                                            recursos humanos, soporte y otras áreas con necesidades específicas para el
                                            logro de
                                            resultados óptimos, igualmente <strong> Posible</strong> puede ser el
                                            soporte
                                            directo de las compañías de marketing y publicidad para operaciones de campo
                                            y
                                            BTL.
                                        </h1>
                                    </Paper>
                                </motion.div>
                            </Container>
                        </div>
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
export default MercadoObjPageESP