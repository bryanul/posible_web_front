import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User } from "@nextui-org/react";
import { columns, users } from "./data";

export default function TablaHerramientas() {
    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <User
                        avatarProps={{ radius: "lg", src: user.avatar }}
                        name={cellValue}
                    ></User>
                );
            case "role":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{cellValue}</p>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    return (
        <div style={{ margin: "auto" }} className="">
            <Table aria-label="Example table with custom cells" className="pt-5" style={{}}>
                <TableHeader columns={columns} style={{ display: "flex", justifyContent: "center" }}>
                    {(column) => (
                        <TableColumn key={column.uid} align="">
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={users}>
                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell><div className='text-center'>{renderCell(item, columnKey)}</div></TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}