import {Card, CardHeader, Image, CardBody} from "@nextui-org/react";
import empresamka from '../foto//empresamrk.png'
import React from "react";
import Acordioninfo from "./Acordioninfo";

export default function CardHerr(props){
    return(
        <Card className="py-4 m-3 transition hover:scale-105" style={{backgroundColor:'transparent'}}>
            <CardHeader className="flex justify-center items-center">
                <h3 className="font-bold text-large" style={{color:'white'}}>{props.titulo}</h3>
            </CardHeader>
        </Card>
    )
}