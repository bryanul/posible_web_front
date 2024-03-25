import {Divider} from "@nextui-org/react";
import {Container} from "@mui/material";
import * as React from "react";
import ExpandableRectangle from "../comp/ExpandableRectangle";
import TopnavbarEN from "../comp/TopnavbarEN";
import backn from "../foto/back.jpg"
import BackgroundImage from "../comp/BackgroundImage";
import Footerweb from "../comp/Footerweb";
import useTitle from "../comp/useTitle";

const NosotrosPageEN = () => {
    useTitle('About us | -posible.')
    return(<>
        <div className='w-full'>
            <BackgroundImage image={backn} overlay>
                <TopnavbarEN/>
                <div className=''
                     style={{
                         position: 'relative',
                         color: 'white',
                         textAlign: 'center',
                         padding: '2rem',
                     }}>
                    <h1 className='py-5 font-bold text-white'
                        style={{fontSize: '60px', textAlign: 'center'}}>ABOUT US</h1>
                    <Container className='mb-4'>
                        <Divider className="my-4" style={{height: '2px', width: '300px', margin: '0 auto'}}/>
                        <ExpandableRectangle/>
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
    </>)
}
export default NosotrosPageEN