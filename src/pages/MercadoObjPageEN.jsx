import TopnavbarEN from "../comp/TopnavbarEN";
import {Container, Paper} from "@mui/material";
import {Divider} from "@nextui-org/react";
import TabsMV from "../comp/TabsMV";
import * as React from "react";
import BackgroundImage from "../comp/BackgroundImage";
import backn from "../foto/back.jpg";
import TopnavbarESP from "../comp/TopnavbarESP";
import Footerweb from "../comp/Footerweb";
import useTitle from "../comp/useTitle";

const MercadoObjPageEN = () => {
    useTitle('Target Market | -posible.')
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
                    <h1 className='py-5 font-bold text-white'
                        style={{fontSize: '60px', textAlign: 'center'}}>TARGET MARKET</h1>
                    <div>
                        <Container>
                            <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                            <Paper elevation={3}
                                   sx={{
                                       borderRadius: "30px",
                                       p: 2,
                                       mb: 14,
                                       mt: 4,
                                       overflow: "hidden",
                                       maxWidth: '100%',
                                       maxHeight: '100%',
                                       backgroundColor: '#b16364',
                                       color: 'white',
                                       fontSize: '25px'
                                   }}>

                                <h1 className='py-5'
                                    style={{fontSize: '25px', textAlign: 'center', justifyContent: 'center'}}>
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
export default MercadoObjPageEN