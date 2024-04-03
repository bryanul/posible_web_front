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
        "VoIP telephony", "Call recording", "SMS and mass mail campaigns", "Integration with communication channels such as WhatsApp and social networks in operations that require it", "Technological tools for InHouse operations", "Interactive voice response (IVR)", "Information security", "Constant training of all staff", "ICT integration", "Web tools such as landing pages or information pages as support for operations which require it"
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
                                {herrs.map((item, index) => (
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