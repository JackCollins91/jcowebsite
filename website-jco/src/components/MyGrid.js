import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PermanentDrawerLeft from './MyDrawers';
import Sidebar from './Sidebar';
import FolderList from './MyList'
import MultiActionAreaCard from './MyCard'
import MyCarousel from './MyCarousel';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Item>
                        <h3>
                            Affiliations
                        </h3>
                        <p>
                            &#x2022; University of Mannheim, PhD Candidate
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <h3>
                            Research Interests
                        </h3>
                        <p>
                            &#x2022; Quantitative methods in Social Science
                        </p>
                        <p>
                            &#x2022; Machine learning, AI and statistics
                        </p>
                        <p>
                            &#x2022; Software development applications to Social Science research
                        </p>
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <h3>
                            Skills
                        </h3>
                        <p>
                            &#x2022; Software Development: Java, C#, Python, SQL, R, HTML, Javascript
                        </p>
                        <p>
                            &#x2022; Research Skills: Quantitative methods, especially Machine Learning
                        </p>
                        <p>
                            &#x2022; Platform Expertise: Salesforce, MS Azure, AWS, Google Cloud, Apache Spark, SAP, SAS, Unity
                        </p>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
