import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Avatar from '@mui/material/Avatar';
import MyAvatar from './MyAvatar';
import Email from '@mui/icons-material/Email';
import cv from './imgs/cv.pdf'
import { Container, Link } from '@mui/material';
import MyBottomNav from './MyBottomNav';

export default function MyAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#2E3B55' }}>
                <Toolbar style={{ margin: 'auto' }}>
                    <MyAvatar />
                </Toolbar>
                <MyBottomNav />
            </AppBar>
        </Box>
    );
}