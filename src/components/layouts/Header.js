import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Header.css'
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom'
import { Link } from "react-router-dom"
const drawerWidth = 240;
const navItems = ['Home', 'Project', 'Skills', 'Contact'];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const container = window !== undefined ? () => window().document.body : undefined;
    const renderNavLink = (content) => {
        const scrollToId = `${content.toLowerCase()}Section`;

        const handleClickNav = () => {
            document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
        }
        return (
            <Box className="list-head" key={content} >
                <Button
                    onClick={handleClickNav} sx={{paddingTop:{md:'0',sm:'0',xs:'20px'}, color: '#000', fontFamily: 'initial', backgroundColor: 'none' ,fontSize:'18px'}}
                >{content}</Button>
            </Box>
        )
    }
    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 ,fontFamily:'initial'}}>
                Portfolio
            </Typography>
            <Divider />
            {navItems.map(nav => renderNavLink(nav))}
        </Box>
    );
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: '#fff !important', padding: '0 3rem' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, color: '#000',display:{md:'none'} }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, textAlign: { md: 'left', sm: 'center', xs: 'center' }, color: '#000', fontFamily: 'initial' }}
                    >
                       <a href='/' style={{textDecoration:'none',color:'#000'}}> Portfolio </a>
                    </Typography>
                    <Box sx={{ display: { md: 'flex', xs: 'none', sm: 'none' } }}>
                        {navItems.map(nav => renderNavLink(nav))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;