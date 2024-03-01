import TopnavbarESP from "../comp/TopnavbarESP";
import {Container} from "@mui/material";
import {Divider} from "@nextui-org/react";
import * as React from "react";
import TablaHerramientas from "../comp/TablaHerramientas";
import BackgroundImage from "../comp/BackgroundImage";
import backn from "../foto/back.jpg";
import ExpandableRectangle from "../comp/ExpandableRectangle";

export default function HerramientasPageESP(){
    return (
        <div className='w-full'>
            <BackgroundImage image={backn} overlay>
                <TopnavbarESP/>
                <div style={{
                    position: 'relative',
                    color: 'black',
                    padding: '2rem',
                }}>
                    <h1 className='py-5 font-bold text-white'
                        style={{fontSize: '52px', textAlign: 'center'}}>HERRAMIENTAS</h1>
                    <Container className='mb-8' sx={{mb:8}}>
                        <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                        <TablaHerramientas/>
                    </Container>
                </div>
            </BackgroundImage>
        </div>
)
}
/*
 <>
        <TopnavbarESP/>
        <div className=''>
            <div >
                <h1 className='pt-3 pb-3 font-bold text-white'
                    style={{fontSize: '52px', textAlign: 'center'}}>HERRAMIENTAS</h1>

            </div>
            <div className='flex'>
                <Container className='mb-8'>
                    <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                    <TablaHerramientas/>
                </Container>
            </div>
        </div>
    </>
 */