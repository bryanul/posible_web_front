import {Card, CardHeader, Image, CardBody} from "@nextui-org/react";
import empresamka from '../foto//empresamrk.png'

export default function CardObj(props){
    return(
        <Card className="py-4 m-3 hover:scale-105" style={{backgroundColor:'transparent'}}>
            <CardHeader className="py-2 px-4 flex justify-center items-center">
                <h4 className="font-bold text-large">{props.titulo}</h4>
            </CardHeader>
        </Card>
    )
}