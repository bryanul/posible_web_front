import TopnavbarEN from "../comp/TopnavbarEN";
import * as React from "react";
import Hand1 from '../foto/hand.png'
import Hand2 from '../foto/hand2.png'
import {Container} from "@mui/material";
import {Divider} from "@nextui-org/react";

export default function ContactoPageEN(){
    return(
        <>
            <TopnavbarEN/>
            <div className='h-screen w-full bgblack'>
                <Container>
                    <div>
                        <h1 className='pt-3 pb-3 font-bold text-white'
                            style={{fontSize: '60px', textAlign: 'center'}}>CONTACT</h1>
                        <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                    </div>
                    <div className='grid grid-rows-2 md:grid-cols-2 '>
                        <div className='transition hover:scale-110 md:order-2' style={{position: "relative", width: "100%"}}>
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
    )
}