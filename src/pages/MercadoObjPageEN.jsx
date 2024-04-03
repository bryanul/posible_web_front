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
import {motion} from 'framer-motion'

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
                    <motion.div animate={{y: 0}} transition={{duration: 1.5}} initial={{y: -100}}>
                        <h1 className='py-5 font-bold text-black'
                            style={{fontSize: '60px', textAlign: 'center'}}>target market</h1>
                    </motion.div>
                        <div>
                            <Container>
                                <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                                <motion.div animate={{y: 0}} transition={{duration: 1.5}} initial={{y: 150}}>
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
                                            <strong> Posible</strong> directs its operations as the ideal partner for companies in the development of projects in the areas of marketing, advertising, commercial, human resources, support and other areas with specific needs for the achievement of optimal results, also can be the direct support of the marketing and advertising companies in all types of project
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
export default MercadoObjPageEN