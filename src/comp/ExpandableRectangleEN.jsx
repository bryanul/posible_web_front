import React, { useState } from "react";
import { Box, Paper, Collapse } from "@mui/material";
import { Button } from "@nextui-org/react";
import {motion} from 'framer-motion'

const ExpandableRectangleEN = (props) => {
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
                                Welcome to <strong>POSIBLE</strong>, your strategic ally in the development of all your projects. At <strong>POSIBLE</strong>, we are passionate about driving our customers’ success through innovative solutions and customized strategies that generate tangible results
                            </h1>
                            <Button size="lg" onClick={handleExpandClick} className='hover:scale-105 transition mb-1'>
                                About Us
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
                            At <strong>POSIBLE</strong> we work to offer the development of advanced and high-quality solutions, mainly multisectoral management solutions, transform our ideas, values, innovations, projects and services into value for the real needs of our potential customers. We enhance the professional and human development of the people we work with, and we contribute to society a part of our benefits.
                        </h1>
                        <h1 className='py-2 text-2xl md:text-4xl' style={{ textAlign: 'center', justifyContent: 'center' }}>
                            <strong>VISION:</strong>
                        </h1>
                        <h1 className='py-2 text-lg md:text-2xl'  style={{ textAlign: 'center', justifyContent: 'center' }}>
                            We want to offer a high quality service and care by the entire team of <strong>POSIBLE</strong>, provide solid quality products that enable our customers and their customers to evolve in their business and give them real value, we will adapt to their actual and future needs through complete and segmented solutions integrated in real time.
                            We will add value to customers, maintain outstanding results, success through the talent of people, manage with agility taking advantage of creativity and innovation always achieving a sustainable future.
                        </h1>
                        <Button size="lg" onClick={handleExpandClick} className='hover:scale-105 transition mb-1'>
                            Close
                        </Button>
                    </Box>
                </Collapse>
            </Paper>
        </motion.div>
    );
};

export default ExpandableRectangleEN;
