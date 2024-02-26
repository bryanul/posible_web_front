import React from 'react';
import {Divider, Container, Typography, Paper} from '@mui/material';

const Footer = () => {
    return (
        <Paper style={{width: '100%'}} className='bgblack' sx={{
            bottom: 0,
            width: '100%'
        }} component="footer" square variant="outlined">
            <Divider />
            <Container className="py-8  " maxWidth="lg">
                <Typography variant="body2" color="text.secondary" align="center">
                    {'© '} {new Date().getFullYear()} {'Posible. Todos los derechos reservados.'}
                </Typography>
            </Container>
        </Paper>
    );
};

export default Footer;