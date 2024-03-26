import TopnavbarESP from "../comp/TopnavbarESP";
import {Container, Paper} from "@mui/material";
import {Divider, Image} from "@nextui-org/react";
import TabsMV from "../comp/TabsMV";
import * as React from "react";
import videobg from "../foto/back.mp4";
import logom from "../foto/fondomain.png";
import BackgroundImage from "../comp/BackgroundImage";
import backn from "../foto/back.jpg";
import ExpandableRectangle from "../comp/ExpandableRectangle";
import Cardserv from "../comp/Cardserv";
import empresamka from '../foto//empresamrk.png'
import Footerweb from "../comp/Footerweb";
import useTitle from "../comp/useTitle";

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
                    <h1 className='py-5 font-bold text-black'
                        style={{fontSize: '60px', textAlign: 'center'}}>mercado objetivo</h1>
                    <div>
                        <Container>
                            <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
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
                                    <strong> Posible</strong>, dirige sus operaciones como el socio ideal para compañías
                                    en el desarrollo de proyectos en las áreas de marketing, publicidad, comercial,
                                    recursos humanos, soporte y otras áreas con necesidades específicas para el logro de
                                    resultados óptimos, igualmente <strong> Posible</strong> puede ser el soporte
                                    directo de las compañías de marketing y publicidad para operaciones de campo y BTL.
                                </h1>
                            </Paper>
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