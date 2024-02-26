import * as React from "react";
import TopnavbarESP from "../comp/TopnavbarESP";
import {Image} from "@nextui-org/react";
import logom from '../foto/logomain.jpg'
const MainPageESP = () => {
    return(<>
        <TopnavbarESP/>
        <div className='h-screen w-full bgblack py-5' style={{display: 'flex', justifyContent: 'center'}}>
            <Image src={logom} isZoomed isBlurred className="w-full"/>
        </div>
    </>)
}
export default MainPageESP