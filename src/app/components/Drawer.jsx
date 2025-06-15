'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Dashboard } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { websiteCategories } from '../data/Websites';
import { useRouter } from 'next/navigation';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    // const { window } = props;    
    const { children } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };
    let navigation = [
        { name: 'Dashboard', href: '/', icon: <Dashboard /> },
        { name: 'About', href: '/pages/about', icon: <InfoIcon /> },
        { name: 'Make my day', href: '#', icon: <FavoriteIcon /> },
    ]
    const router = useRouter();
    const drawer = (
        <Box sx={{ overflowY: 'auto', scrollbarWidth: 'none', }}>
            <List>
                <Typography variant='h6' fontWeight={'bold'} px={2} my={2}>Menu</Typography>
                {navigation.map((link, index) => (
                    <ListItem key={link.name} disablePadding>
                        <ListItemButton
                            href={link.href}>
                            <ListItemIcon sx={{ color: 'white' }}>
                                {link.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={link.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider color="white" width="80%" sx={{ margin: '16px auto' }} />
            <List>
                <Typography variant='h6' fontWeight={'bold'} px={2} mb={2}>Categories</Typography>
                {websiteCategories.map((categories, index) => (
                    <ListItem key={categories.name} disablePadding>
                        <ListItemButton
                            onClick={() => {
                                if (window.location.pathname !== '/') {
                                    router.push(`/#${categories.name}`);
                                } else {
                                    const el = document.getElementById(categories.name);
                                    if (el) {
                                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }
                            }}
                        >
                            <ListItemIcon sx={{ color: "white" }}>
                                {categories.icon}
                            </ListItemIcon>
                            <ListItemText primary={categories.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                    display: { md: 'none' }
                }}
            >
                <Toolbar sx={{ backgroundColor: '#050505' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    //   container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#050505', color: 'white', borderRight: '0px solid white' },
                    }}
                    slotProps={{
                        root: {
                            keepMounted: true, // Better open performance on mobile.
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#050505', color: 'white', borderRight: '0px solid white' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}

export default ResponsiveDrawer;
