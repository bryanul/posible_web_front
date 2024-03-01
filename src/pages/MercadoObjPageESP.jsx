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
import CardObj from "../comp/CardObj";
import Cardserv from "../comp/Cardserv";
import empresamka from '../foto//empresamrk.png'

const MercadoObjPageESP = () => {
    const objs = [
        "EMPRESAS MARKETING",
        "EMPRESAS PUBLICIDAD",
        "AREA DE RECURSOS HUMANOS",
        "EMPRESAS MARKETING 2",
        "EMPRESAS PUBLICIDAD 2",
        "AREA DE RECURSOS HUMANOS 2"
    ];
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
                    <h1 className='pt-3 pb-3 font-bold text-white'
                        style={{fontSize: '60px', textAlign: 'center'}}>MERCADO OBJETIVO</h1>
                    <div>
                        <Container >
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
                                    className='grid md:grid-cols-3 '>
                                {objs.map((item, index) => (
                                    <CardObj titulo={item}/>
                                ))}
                            </Paper>
                        </Container>
                    </div>
                </div>
            </BackgroundImage>
        </div>
    )
}
export default MercadoObjPageESP

/* <Paper elevation={3}
                                   sx={{
                                           backgroundColor: '#b16364',
                                           borderRadius: "30px",
                                           p: 2,
                                           mb: 25,
                                           mt: 4,
                                           overflow: "hidden",
                                            color: '#e3e3db',
                                       maxWidth: '100%',
                                       maxHeight: '100%'}}
                                    className='grid grid-cols-3 '>
                                {objs.map((item, index) => (
                                    <CardObj titulo={item}/>
                                ))}
                            </Paper>*/