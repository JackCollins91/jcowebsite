import logo from './logo.svg';
import './App.css';
import React from 'react';
import PermanentDrawerLeft from './components/MyDrawers';
import MultiActionAreaCard from './components/MyCard';
import Box from '@mui/material/Box';
import AutoGrid from './components/MyGrid';

import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';

import Sidebar from './components/Sidebar';

import MyCarousel from './components/MyCarousel';
import MyAvatar from './components/MyAvatar';
import MyAppBar from './components/MyAppBar';
import MyBottomNav from './components/MyBottomNav';
import { Container } from '@mui/material';
import MyAccordian from './components/MyAccordian';
import GlobalStyles from '@mui/material/GlobalStyles';

function App() {
  return (

    <div className="App">
      <GlobalStyles styles={
        {
          h1: { color: '#2E3B55', fontSize: '1.5rem' },
          h2: { color: '#2E3B55', fontSize: '1.5rem' }
        }
      }
      />
      <div>
        <MyAppBar />
        <MultiActionAreaCard />
        <Box sx={{ maxWidth: 'md', m: 2 }} style={{ margin: 'auto' }}>
          <Typography variant='h3'>Projects</Typography>
          <MyCarousel />
        </Box>
        <Container>
          <MyAccordian />
        </Container>
        <div>
          <MyBottomNav />
        </div>

      </div>
    </div>

  );
}

export default App;
