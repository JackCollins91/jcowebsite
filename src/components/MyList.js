import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import Email from '@mui/icons-material/Email';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import MyAvatar from './MyAvatar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function FolderList() {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemAvatar>
                    <MyAvatar />
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <IconButton sx={{ width: 52, height: 52 }} href='www.google.com'>
                        <Email sx={{ width: 52, height: 52 }} />
                    </IconButton>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <IconButton sx={{ width: 52, height: 52 }} href='www.google.com'>
                        <LinkedInIcon sx={{ width: 52, height: 52 }} />
                    </IconButton>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <IconButton sx={{ width: 52, height: 52 }} href='www.google.com'>
                        <GitHubIcon sx={{ width: 52, height: 52 }} />
                    </IconButton>
                </ListItemAvatar>
            </ListItem>
        </List>
    );
}