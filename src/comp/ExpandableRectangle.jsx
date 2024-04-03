import React, { useState } from "react";
import { Box, Paper, Collapse } from "@mui/material";
import { Button } from "@nextui-org/react";
import {motion} from 'framer-motion'

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
        <motion.div animate={{y:0}} transition={{duration:1.5}} initial={{y:150}}>
            <Paper
                className='p-3 md:p-4'
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
                            <h1 className='py-5 text-xl md:text-[25px]/[35px]' style={{ textAlign: 'center', justifyContent: 'center' }}>
                                Bienvenido a <strong>POSIBLE</strong>, tu aliado estratégico en el desarrollo de todos tus proyectos. En <strong>POSIBLE</strong>, nos apasiona impulsar el éxito de nuestros clientes a través de soluciones innovadoras y estrategias personalizadas que generan resultados tangibles
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
                            <strong>MISIÓN:</strong>
                        </h1>
                        <h1 className='py-2 text-lg md:text-2xl' style={{ textAlign: 'center', justifyContent: 'center' }}>
                            En <strong>POSIBLE</strong> trabajamos para ofrecer el desarrollo de soluciones avanzadas y de alta calidad, principalmente soluciones de gestión multisectorial. Transformamos nuestras ideas, valores, innovaciones, proyectos y servicios en valor para las necesidades reales de nuestros clientes potenciales. Potenciamos el desarrollo profesional y humano de las personas con las que trabajamos, y aportamos a la sociedad una parte de nuestros beneficios.
                        </h1>
                        <h1 className='py-2 text-2xl md:text-4xl' style={{ textAlign: 'center', justifyContent: 'center' }}>
                            <strong>VISIÓN:</strong>
                        </h1>
                        <h1 className='py-2 text-lg md:text-2xl'  style={{ textAlign: 'center', justifyContent: 'center' }}>
                            Queremos, ofrecer un servicio y una atención de alta calidad por parte de todo el equipo de <strong>POSIBLE</strong>, aportar productos sólidos de calidad que permitan a nuestros clientes y sus clientes evolucionar en sus negocios y les aporten un verdadero valor, nos adaptaremos a sus necesidades reales actuales y futuras mediante soluciones completas y segmentadas integradas en tiempo real.
                            Añadiremos valor para los clientes, mantener resultados sobresalientes, alcanzar éxito mediante el talento de personas, gestionar con agilidad, aprovechando la creatividad y la innovación, logrando siempre un futuro sostenible.

                        </h1>
                        <Button size="lg" onClick={handleExpandClick} className='hover:scale-105 transition mb-1'>
                            Cerrar
                        </Button>
                    </Box>
                </Collapse>
            </Paper>
        </motion.div>
    );
};

export default ExpandableRectangle;
