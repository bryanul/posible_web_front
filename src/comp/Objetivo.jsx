import {Divider} from "@nextui-org/react";


export default function Objetivo() {
    return (
        <>
            <div className="flex flex-col md:flex-row h-5 items-center space-x-4 justify-center p-10">
                <div>
                    <h1 style={{fontSize: '30px'}}>Empresa 1</h1>
                </div>
                <Divider orientation="vertical" style={{width: '2px'}}/>
                <div>
                    <h1 style={{fontSize: '30px'}}>Empresa 2</h1>
                </div>
                <Divider orientation="vertical" style={{width: '2px'}}/>
                <div>
                    <h1 style={{fontSize: '30px'}}>Empresa 3</h1>
                </div>
                <Divider orientation="vertical" style={{width: '2px'}}/>
                <div>
                    <h1 style={{fontSize: '30px'}}>Empresa 4</h1>
                </div>
            </div>
        </>
    )
}