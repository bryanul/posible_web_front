import TopnavbarEN from "../comp/TopnavbarEN";
import {Divider} from "@nextui-org/react";
import {Container} from "@mui/material";
import * as React from "react";
import ExpandableRectangle from "../comp/ExpandableRectangle";

const NosotrosPageEN = () => {
    return(<>
        <TopnavbarEN/>
        <div className='h-screen w-full bgblack'>
            <div style={{backgroundColor: '#e3e3db'}}>
                <h1 className='pt-3 pb-3 font-bold text-white'
                    style={{fontSize: '60px', textAlign: 'center'}}>ABOUT US</h1>

            </div>
            <div>
                <Container className='mb-8'>
                    <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                    <ExpandableRectangle className='mb-8'/>
                </Container>
            </div>
        </div>
    </>)
}
export default NosotrosPageEN