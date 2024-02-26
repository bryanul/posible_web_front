import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import Acordioninfo from "./Acordioninfo";

export default function Cardserv(props) {
    return (
            <Card className="py-4" style={{color:"black"}}>
                <CardHeader>
                    <h3 className="font-bold text-large" style={{textAlign: 'center'}}>{props.titulo}</h3>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <p className="text-tiny uppercase ">Lorem Ipsum verfsek efeernfkje deafa</p>
                    <Acordioninfo/>
                </CardBody>
            </Card>
    );
}