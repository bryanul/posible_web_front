import TopnavbarESP from "../comp/TopnavbarESP";
import * as React from "react";
import Hand1 from '../foto/hand.png'
import Hand2 from '../foto/hand2.png'
import {Container} from "@mui/material";
import {Divider} from "@nextui-org/react";
import BackgroundImage from "../comp/BackgroundImage";
import backn from "../foto/back.jpg";
import ExpandableRectangle from "../comp/ExpandableRectangle";
import Footerweb from "../comp/Footerweb";
import useTitle from "../comp/useTitle";
import {motion} from 'framer-motion'

export default function ContactoPageESP(){
    useTitle('Contacto | -posible.');
    return (
        <div className='w-full overflow-hidden'>
            <BackgroundImage image={backn} overlay>
                <TopnavbarESP/>
                <div style={{
                    position: 'relative',
                    color: 'white',
                    textAlign: 'center',
                }}>
                    <motion.div animate={{y: 0}} transition={{duration: 1.5}} initial={{y: -100}}>
                        <h1 className='pb-5 pt-10 font-bold text-black'
                            style={{fontSize: '60px', textAlign: 'center'}}>contacto</h1>
                    </motion.div>
                        <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                        <div className='grid md:grid-cols-2 m-1.5' style={{}}>
                            <motion.div className='transition hover:scale-110 md:order-2' animate={{x: 0}}
                                        transition={{duration: 1.5}} initial={{x: 100}}
                                        style={{position: "relative", width: "100%"}}>
                                <div className='transition hover:scale-110'>
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
                            </motion.div>
                            <motion.div className='transition hover:scale-110 md:order-1' animate={{x: 0}}
                                        transition={{duration: 1.5}} initial={{x: -100}}
                                        style={{position: "relative", width: "100%"}}>
                                <div className='transition hover:scale-110'>
                                    <img src={Hand1} alt='hand1' style={{}}/>
                                    <div style={{
                                        position: "absolute",
                                        top: "14%",
                                        right: '5.5%',
                                        textAlign: "center",
                                        color: "black",
                                        width: '50%',
                                    }}>
                                        TELÉFONO
                                        <p style={{fontSize: '12px'}}>00000000</p>
                                    </div>
                                </div>
                            </motion.div>
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