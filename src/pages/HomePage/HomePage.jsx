import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const HomePage = () => {
  return (
    <div>
      <Typography variant="h2" gutterBottom align="center" marginTop="20px">
        Welcome to My Programming Language
      </Typography>
      <Typography paragraph align="center">
        The next-generation language for innovative and efficient software development.
      </Typography>
      
      <Grid container spacing={3} justifyContent="center">
        {/* Feature 1 */}
        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="h5">Fast Execution</Typography>
              <Typography>Experience lightning-fast execution speeds, enhancing your development workflow.</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Add more features as cards */}
      </Grid>
    </div>
  );
};

export default HomePage;
