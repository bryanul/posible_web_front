import {Card, CardHeader, Image, Tab, Tabs} from "@nextui-org/react";
import * as React from "react";

const TabsMV = () => {
    let tabs = [
        {
            id: "info1",
            label: "Info1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: "info2",
            label: "Info2",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
    ];
    const handleTabChange = (index, event) => {
        event.preventDefault(); // Prevent default behavior
    };
    return(
        <>
            <div className="flex w-full flex-col pb-10" >
                <Tabs aria-label="Dynamic tabs" items={tabs} size='lg' fullWidth onTabChange={handleTabChange}>
                    {(item) => (
                        <Tab key={item.id} title={item.label} style={{fontSize: '20px'}}>
                            <Card className="col-span-12 sm:col-span-4 h-[300px]">
                                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                    <h4 className="font-medium text-large">{item.content}</h4>
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Card background"
                                    className="z-0 w-full h-full object-cover"
                                />
                            </Card>
                        </Tab>
                    )}
                </Tabs>
            </div>
        </>
    )
}
export default TabsMV