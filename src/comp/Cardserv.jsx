import React from "react";
import {Card, CardHeader, CardBody} from "@nextui-org/react";
import Acordioninfo from "./Acordioninfo";

export default function Cardserv(props) {
    return (
            <Card className="py-4 m-3 transition hover:scale-105" style={{color:"white", backgroundColor: '#b16364'}}>
                <CardHeader className="flex justify-center items-center">
                        <h3 className="font-bold text-large">{props.titulo}</h3>
                </CardHeader>
                <CardBody className="overflow-visible py-2 display-flex flex-column align-items-center">
                <p className="text-tiny uppercase "></p>
                    <Acordioninfo/>
                </CardBody>
            </Card>
    );
}