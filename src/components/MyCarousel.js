import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Icon } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';

function MyCarousel(props) {
    var items = [
        {
            name: "Prediction-based Adaptive Designs for Panel Surveys",
            description: "Using ML/AI to predict longitudinal survey attrition",
            link: 'https://www.sowi.uni-mannheim.de/keusch/research/#c302659'
        },
        {
            name: "Web Scraping News Websites for NLP",
            description: "Automated web scraping demo",
            link: 'https://colab.research.google.com/drive/1vw8OYDRqCOHorP520qvLsrsSDGacqnKs#scrollTo=o-nEWxgR5o9M'
        },
        {
            name: "NLP Analysis - Correlating Sentiment with Topic",
            description: "Sentiment and Topic Analysis in Googl Colab",
            link: 'https://colab.research.google.com/drive/1vw8OYDRqCOHorP520qvLsrsSDGacqnKs#scrollTo=o-nEWxgR5o9M'
        },
        {
            name: "Wordle Sim",
            description: "Brute force approach to finding the best starting word",
            link: 'https://colab.research.google.com/drive/1VWKyi6fCQg6sHvsKDfqu3-IEVenyQdtk'
        },
        {
            name: "Finding synergies with network analysis",
            description: "Using Neo4J to identify the best Pokémon teams",
            link: 'https://towardsdatascience.com/finding-synergies-with-network-analysis-using-neo4j-to-identify-the-best-pok%C3%A9mon-teams-4ff89e791671'
        },
        {
            name: 'Make you own federal election forecasting model',
            description: "Using polling data to simulate and predict elections in R",
            link: "https://jackcollins1991.github.io/Portfolio/28122020"
        }

    ]

    return (
        <Carousel
            IndicatorIcon={<CircleIcon />} // Previous Example
            indicatorIconButtonProps={{
                style: {
                    padding: '10px',    // 1
                    color: 'black'       // 3
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    backgroundColor: 'grey' // 2
                }
            }}
            indicatorContainerProps={{
                style: {
                    marginTop: '50px', // 5
                    textAlign: 'center' // 4
                }

            }}
        >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper elevation={3}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <IconButton className="CheckButton" href={props.item.link}>
                <OpenInNewIcon />
            </IconButton>
        </Paper>
    )
}

export default MyCarousel