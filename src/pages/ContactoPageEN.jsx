import TopnavbarEN from "../comp/TopnavbarEN";
import * as React from "react";
import Hand1 from '../foto/hand.png'
import Hand2 from '../foto/hand2.png'
import {Divider} from "@nextui-org/react";
import BackgroundImage from "../comp/BackgroundImage";
import backn from "../foto/back.jpg";
import Footerweb from "../comp/Footerweb";
import useTitle from "../comp/useTitle";

export default function ContactoPageEN(){
    useTitle('Contact | -posible.');
    return (
        <div className='w-full overflow-hidden'>
            <BackgroundImage image={backn} overlay>
                <TopnavbarEN/>
                <div style={{
                    position: 'relative',
                    color: 'white',
                    textAlign: 'center',
                    margin: '0px'
                }}>
                    <h1 className='py-5 font-bold text-black'
                        style={{fontSize: '60px', textAlign: 'center'}}>contact</h1>
                    <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                    <div className='grid md:grid-cols-2 m-1.5' style={{}}>
                        <div className='transition hover:scale-110 md:order-2'
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
                        <div className='transition hover:scale-110 md:order-1'
                             style={{position: "relative", width: "100%"}}>
                            <img src={Hand1} alt='hand1' style={{}}/>
                            <div style={{
                                position: "absolute",
                                top: "14%",
                                right: '5.5%',
                                textAlign: "center",
                                color: "black",
                                width: '50%',
                            }}>
                                PHONE
                                <p style={{fontSize: '12px'}}>00000000</p>
                            </div>
                        </div>
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