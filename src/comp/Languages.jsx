import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Languages() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Español"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="light"
                    className="capitalize"
                >
                    {selectedKeys}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownItem key="Español">Español</DropdownItem>
                <DropdownItem key="English">English</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
