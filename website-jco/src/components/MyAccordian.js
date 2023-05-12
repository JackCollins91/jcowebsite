import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function MyAccordian() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Box sx={{ maxWidth: 'md' }} style={{ margin: 'auto' }}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
                        <Typography>Affiliations</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                &#x2022; University of Mannheim, PhD Candidate
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Research Interests</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                &#x2022; Quantitative methods in Social Science
                            </p>
                            <p>
                                &#x2022; Machine learning, AI and statistics
                            </p>
                            <p>
                                &#x2022; Software development applications to Social Science research
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Skills</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                &#x2022; Software Development: Java, C#, Python, SQL, R, HTML, Javascript
                            </p>
                            <p>
                                &#x2022; Research Skills: Quantitative methods, especially Machine Learning
                            </p>
                            <p>
                                &#x2022; Platform Expertise: Salesforce, MS Azure, AWS, Google Cloud, Apache Spark, SAP, SAS, Unity
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </div>
    );
}
