import {Card, CardHeader, Image, Tab, Tabs, CardBody} from "@nextui-org/react";
import * as React from "react";

const TabsMV = () => {
    let tabs = [
        {
            id: "Empresas Marketing",
            label: "Empresas Marketing",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: "Empresas Publicidad",
            label: "Empresas Publicidad",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            id: "Areas de Recursos Humanos",
            label: "Areas de Recursos Humanos",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
    ];

    const handleTabChange = (index, event) => {
        event.preventDefault(); // Prevent default behavior
    };
    return(
        <>
            <div className="flex w-full flex-col pb-10" >
                <Tabs aria-label="Dynamic tabs" variant='underlined' items={tabs} size='lg' fullWidth onTabChange={handleTabChange}>
                    {(item) => (
                        <Tab key={item.id} title={item.label}>
                            <Card>
                                <CardBody>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </CardBody>
                            </Card>
                        </Tab>
                    )}
                </Tabs>
            </div>
        </>
    )
}
export default TabsMV