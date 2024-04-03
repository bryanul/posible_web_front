import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Acordioninfo(props) {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([""]));

    return (
        <Accordion
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            style={{textAlign:'center'}}
        >
            <AccordionItem key="1" aria-label="Accordion 1" title="Más información" style={{textAlign:'justify'}}>
                {props.accordion}
            </AccordionItem>
        </Accordion>
    );
}
