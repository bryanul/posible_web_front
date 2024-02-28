import TopnavbarESP from "../comp/TopnavbarESP";
import {Container} from "@mui/material";
import {Divider} from "@nextui-org/react";
import ExpandableRectangle from "../comp/ExpandableRectangle";
import * as React from "react";
import TablaHerramientas from "../comp/TablaHerramientas";

export default function HerramientasPage(){
    return(
    <>
        <TopnavbarESP/>
        <div className='h-screen w-full bgblack'>
            <div style={{backgroundColor: '#e3e3db'}}>
                <h1 className='pt-3 pb-3 font-bold text-white'
                    style={{fontSize: '60px', textAlign: 'center'}}>HERRAMIENTAS</h1>

            </div>
            <div>
                <Container className='mb-8'>
                    <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                    <TablaHerramientas/>
                </Container>
            </div>
        </div>
    </>
    )
}