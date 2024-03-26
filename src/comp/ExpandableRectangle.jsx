import React, { useState } from "react";
import { Box, Paper, Collapse } from "@mui/material";
import { Button } from "@nextui-org/react";

const ExpandableRectangle = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [showPrincipal, setShowPrincipal] = useState(true);

    const handleExpandClick = () => {
        setExpanded(!expanded);
        setTimeout(() => {
            setShowPrincipal(!showPrincipal);
        }, 200);
    };

    return (
        <Paper
            className='p-1 md:p-4'
            elevation={3}
            sx={{
                backgroundColor: '#b16364',
                borderRadius: "30px",

                mb: 18,
                mt: 4,
                overflow: "hidden",
                height: expanded ? "auto" : "auto",
                transition: "height 0.5s ease-in-out", // Add transition for height change
            }}
        >
            <Box style={{ justifyContent: 'center', textAlign: 'center', color: 'white' }}>
                <Collapse in={showPrincipal} timeout={1000} collapsedHeight="0px"> {/* Use Collapse component for smooth transition */}
                    <>
                        <h1 className='py-5 text-lg md:text-2xl' style={{ textAlign: 'center', justifyContent: 'center' }}>
                            Bienvenido a <strong>Posible</strong>, tu aliado estratégico en el mundo del marketing digital. En
                            Posible, nos apasiona impulsar el éxito de nuestros clientes a través de soluciones innovadoras y
                            estrategias personalizadas que generan resultados tangibles.
                        </h1>
                        <Button size="lg" onClick={handleExpandClick} className='hover:scale-105 transition mb-1'>
                            Nosotros
                        </Button>
                    </>
                </Collapse>
            </Box>
            <Collapse in={expanded} timeout={1000} unmountOnExit>
                <Box style={{ justifyContent: 'center', textAlign: 'center', color: 'white' }}>
                    <h1 className='py-2 text-2xl md:text-4xl' style={{ textAlign: 'center', justifyContent: 'center' }}>
                        <strong>MISION:</strong>
                    </h1>
                    <h1 className='py-2 text-lg md:text-2xl' style={{ textAlign: 'center', justifyContent: 'center' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </h1>
                    <h1 className='py-2 text-2xl md:text-4xl' style={{ textAlign: 'center', justifyContent: 'center' }}>
                        <strong>VISION:</strong>
                    </h1>
                    <h1 className='py-2 text-lg md:text-2xl'  style={{ textAlign: 'center', justifyContent: 'center' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </h1>
                    <Button size="lg" onClick={handleExpandClick} className='hover:scale-105 transition mb-1'>
                        Cerrar
                    </Button>
                </Box>
            </Collapse>
        </Paper>
    );
};

export default ExpandableRectangle;
