import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Container from '@mui/material/Container';
import MyAvatar from './MyAvatar';

export default function MultiActionAreaCard() {
  return (
    <Container sx={{ m: 2 }}>
      <Typography variant='h2' style={{ textAlign: 'center' }}>John 'Jack' Collins</Typography>
      <Card >
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <p>
                John ‘Jack’ Collins is a PhD Student in Sociology at the Graduate School of Economic and Social Sciences. He holds a Bachelor’s of Sociology with Honours from the Australian National University. Jack has a Master’s degree in Data Science from James Cook University.
              </p>
              <p>
                His Master’s project was regarding predictive modelling for student attrition from sub-tertiary courses in Australia. During his Master’s studies, he also assisted in research projects regarding social attitudes and voting behavior in Australia. Before starting PhD, Jack was a Senior IT Consultant specializing in data engineering, analytics and software development.
              </p>
              <p>
                Jack is interested in applying Data Science and IT to sociological research, particularly with regard to machine learning, analytics, and web applications.
              </p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
