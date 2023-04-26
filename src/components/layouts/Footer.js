import React from 'react'
import './Footer.css'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
    return (
        <Box className="footer-resume">
            <Box className="footer-text">
                <Typography sx={{ color: '#fff', fontFamily: 'initial' }}>All Right Reserved 2023</Typography>
            </Box>
        </Box>
    )
}

export default Footer