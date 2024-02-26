import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Acordioninfo() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([""]));

    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <Accordion
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
        >
            <AccordionItem key="1" aria-label="Accordion 1" title="Más información">
                {defaultContent}
            </AccordionItem>
        </Accordion>
    );
}
