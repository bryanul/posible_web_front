import * as React from "react";
import TopnavbarESP from "../comp/TopnavbarESP";
import {Image} from "@nextui-org/react";
import logom from '../foto/fondomain.png'
import videobg from '../foto/back.mp4';
import useTitle from '../comp/useTitle';
const MainPageESP = () => {
    useTitle('-posible. | AGENCIA');
    return (
        <div className='main'>
            <div className='overlay'></div>
            <video src={videobg} autoPlay loop muted className="min-h-screen"/>
            <div className='contentnav'>
                <TopnavbarESP/>
            </div>
            <div className='content'>
                <Image src={logom} isZoomed className="w-[75%] text-center" style={{margin: 'auto'}}/>
            </div>
        </div>
    )
}
export default MainPageESP