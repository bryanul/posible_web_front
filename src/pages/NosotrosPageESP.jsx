import TopnavbarESP from "../comp/TopnavbarESP";
import {Divider, Image} from "@nextui-org/react";
import {Container} from "@mui/material";
import * as React from "react";
import ExpandableRectangle from "../comp/ExpandableRectangle";
import videobg from "../foto/back.mp4";
import logom from "../foto/fondomain.png";
import TopnavbarEN from "../comp/TopnavbarEN";
import backn from "../foto/back.jpg"
import BackgroundImage from "../comp/BackgroundImage";
import useTitle from "../comp/useTitle";

const NosotrosPageESP = () => {
    useTitle('Nosotros | -posible.')
    return(<>
            <div className='w-full'>
                <BackgroundImage image={backn} overlay>
                    <TopnavbarESP/>
                    <div style={{
                        position: 'relative',
                        color: 'white',
                        textAlign: 'center',
                        padding: '2rem',
                    }}>
                        <h1 className='py-5 font-bold text-white'
                            style={{fontSize: '60px', textAlign: 'center'}}>NOSOTROS</h1>
                        <Container className='mb-8'>
                            <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                            <ExpandableRectangle/>
                        </Container>
                    </div>
                </BackgroundImage>
            </div>
    </>)
}
export default NosotrosPageESP