import React, { useState } from "react";
import { Box, Typography, Paper, Collapse } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Button } from "@nextui-org/react";

const ExpandableRectangle = () => {
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
            elevation={3}
            sx={{
                backgroundColor: '#b16364',
                border: "1px solid #ccc",
                borderRadius: "5px",
                p: 2,
                mb: 2,
                mt: 4,
                overflow: "hidden",
                height: expanded ? "auto" : "auto",
                transition: "height 0.5s ease-in-out", // Add transition for height change
            }}
        >
            <Box style={{ justifyContent: 'center', textAlign: 'center', color: 'white' }}>
                <Collapse in={showPrincipal} collapsedHeight="0px"> {/* Use Collapse component for smooth transition */}
                    <>
                        <h1 className='py-5' style={{ fontSize: '25px', textAlign: 'center', justifyContent: 'center' }}>
                            Bienvenido a <strong>Posible</strong>, tu aliado estratégico en el mundo del marketing digital. En
                            Posible, nos apasiona impulsar el éxito de nuestros clientes a través de soluciones innovadoras y
                            estrategias personalizadas que generan resultados tangibles.
                        </h1>
                        <Button size="lg" onClick={handleExpandClick}>
                            Nosotros
                        </Button>
                    </>
                </Collapse>
            </Box>
            <Collapse in={expanded} timeout={1000} unmountOnExit>
                <Box style={{ justifyContent: 'center', textAlign: 'center', color: 'white' }}>
                    <h1 className='py-2' style={{ fontSize: '35px', textAlign: 'center', justifyContent: 'center' }}>
                        <strong>MISION:</strong>
                    </h1>
                    <h1 className='py-2' style={{ fontSize: '25px', textAlign: 'center', justifyContent: 'center' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged.
                    </h1>
                    <h1 className='py-2' style={{ fontSize: '35px', textAlign: 'center', justifyContent: 'center' }}>
                        <strong>VISION:</strong>
                    </h1>
                    <h1 className='py-2' style={{ fontSize: '25px', textAlign: 'center', justifyContent: 'center' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged.
                    </h1>
                    <Button size="lg" onClick={handleExpandClick}>
                        Cerrar
                    </Button>
                </Box>
            </Collapse>
        </Paper>
    );
};

export default ExpandableRectangle;
