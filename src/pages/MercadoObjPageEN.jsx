import TopnavbarEN from "../comp/TopnavbarEN";
import {Container} from "@mui/material";
import {Divider} from "@nextui-org/react";
import TabsMV from "../comp/TabsMV";
import * as React from "react";

const MercadoObjPageEN = () => {
    return(
        <>
            <TopnavbarEN/>
            <div style={{backgroundColor: '#e3e3db'}}>
                <h1 className='pt-3 pb-3 font-bold text-white'
                    style={{fontSize: '60px', textAlign: 'center'}}>TARGET MARKET</h1>

            </div>
            <div>
                <Container>
                    <Divider className="my-4" style={{ height: '2px', width: '300px', margin: '0 auto' }} />
                    <h1 className='py-5' style={{fontSize: '25px', textAlign: 'center', justifyContent: 'center'}}>
                        En <strong>Posible</strong>, buscamos lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h1>
                    <TabsMV/>
                </Container>
            </div>
        </>
    )
}
export default MercadoObjPageEN