import TopnavbarESP from "../comp/TopnavbarESP";
import * as React from "react";
import Hand1 from '../foto/hand.png'
import Hand2 from '../foto/hand2.png'
import {Container} from "@mui/material";
import {Divider} from "@nextui-org/react";
import BackgroundImage from "../comp/BackgroundImage";
import backn from "../foto/back.jpg";
import ExpandableRectangle from "../comp/ExpandableRectangle";

export default function ContactoPageESP(){
    return (
        <div className='w-full overflow-hidden'>
            <BackgroundImage image={backn} overlay>
                <TopnavbarESP/>
                <div style={{
                    position: 'relative',
                    color: 'white',
                    textAlign: 'center',
                    margin:'0px'
                }}>
                    <h1 className='py-5 font-bold text-white'
                        style={{fontSize: '60px', textAlign: 'center'}}>CONTACTO</h1>
                        <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                        <div className='grid md:grid-cols-2 m-1.5' style={{}}>
                            <div className='transition hover:scale-105 md:order-2'
                                 style={{position: "relative", width: "100%"}}>
                                <img src={Hand2} alt='hand2' style={{width: '100%'}}/>
                                <div style={{
                                    position: "absolute",
                                    top: "31.5%",
                                    right: '26%',
                                    textAlign: "center",
                                    color: "black",
                                    width: '50%'
                                }}>
                                    EMAIL
                                    <p style={{fontSize: '12px'}}>informes@posible.pe</p>
                                </div>
                            </div>
                            <div className='transition hover:scale-105 md:order-1'
                                 style={{position: "relative", width: "100%"}}>
                                <img src={Hand1} alt='hand1' style={{}}/>
                                <div style={{
                                    position: "absolute",
                                    top: "14%",
                                    right: '5.5%',
                                    textAlign: "center",
                                    color: "black",
                                    width:  '50%',
                                }}>
                                    TELÉFONO
                                    <p style={{fontSize: '12px'}}>00000000</p>
                                </div>
                            </div>
                        </div>
                </div>
            </BackgroundImage>
        </div>
    )
}
/*
<>
            <TopnavbarESP/>
            <div className=''>
                <Container>
                    <div>
                        <h1 className='pt-3 pb-3 font-bold text-white'
                            style={{fontSize: '60px', textAlign: 'center'}}>CONTACTO</h1>
                        <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                    </div>
                    <div className='grid grid-rows-2 md:grid-cols-2 '>
                        <div className='transition hover:scale-110 md:order-2' style={{position: "relative", width: "100%", marginLeft:'0px'}}>
                            <img src={Hand2} alt='hand2' style={{width: '100%'}}/>
                            <div style={{
                                position: "absolute",
                                top: "38%",
                                right: '26%',
                                textAlign: "center",
                                color: "black",
                                width: '50%'
                            }}>
                                INFO-PRUEBA 2
                                <p style={{fontSize: '12px'}}>AQUI INFORMACION</p>
                            </div>
                        </div>
                        <div className='transition hover:scale-110 md:order-1' style={{position: "relative", width: "100%"}}>
                            <img src={Hand1} alt='hand1' style={{width: '100%'}}/>
                            <div style={{
                                position: "absolute",
                                top: "13%",
                                right: '7%',
                                textAlign: "center",
                                color: "black",
                                width: '50%'
                            }}>
                                INFO-PRUEBA 1
                                <p style={{fontSize: '12px'}}>AQUI INFORMACION</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
 */