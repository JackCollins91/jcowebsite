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
import BottomNavigation from '@mui/material/BottomNavigation';
import cv from './imgs/cv.pdf'

export default function MyBottomNav () {
    return (
        <BottomNavigation  style={{ background: '#2E3B55' }}>
            <IconButton sx={{ mr: 4 }} href='mailto:johnjackcollins91@gmail.com'>
                        <Email sx={{ width: 52, height: 52, color:'white' }} />
                    </IconButton>
                    <IconButton sx={{ mr: 4 }} href='https://www.linkedin.com/in/jack-collins-595a53115/'>
                        <LinkedInIcon sx={{ width: 52, height: 52 , color:'white' }} />
                    </IconButton>
                    <IconButton sx={{ mr: 4 }} href='https://github.com/JackCollins91'>
                        <GitHubIcon sx={{ width: 52, height: 52, color:'white'  }} />
                    </IconButton>
                    <Button variant='h5' sx={{color:'white'}} href='https://scholar.google.com/citations?view_op=list_works&hl=en&user=Q0JV7swAAAAJ&gmla=AJsN-F4TWWu6VqFm4lhIP3fNQE0UUJaF3RLPVKXDDuULAbHgnsYwTFuJimn2bslFYRk15HWYcdcOAUb0t7yjktBExBS4pX9gjy8nwtW-wAzXhS8DrZQ0zW9DA6cdEdqdmJJjgpihqY2O5jeDqvne4OBqm3jHO7F9RA'>
                    Publications
                </Button>
                <Button variant='h5' sx={{color:'white'}} href={cv}>
                    CV
                </Button>
        </BottomNavigation>
    );
}