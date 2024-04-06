import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardActions, Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const DocsContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(8),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
}));

const DocCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
}));

const DocCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const DocCardActions = styled(CardActions)(({ theme }) => ({
  justifyContent: 'flex-end',
  padding: theme.spacing(2),
}));

const DocButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1, 3),
  fontWeight: 'bold',
  textTransform: 'uppercase',
}));

const DocsPage = () => {
  return (
    <DocsContainer maxWidth="lg">
      <SectionTitle variant="h4">Documentation</SectionTitle>
      <Typography variant="subtitle1" align="center" paragraph>
        Here you'll find comprehensive guides and documentation to help you start working with MyLanguage as quickly as possible, as well as support if you get stuck. Let's jump right in!
      </Typography>

      <Grid container spacing={4} marginTop={4}>
        {/* Getting Started */}
        <Grid item xs={12} sm={6} md={4}>
          <DocCard>
            <DocCardContent>
              <Typography variant="h6" gutterBottom>
                Getting Started
              </Typography>
              <Typography>
                Learn the basics of MyLanguage and set up your development environment.
              </Typography>
            </DocCardContent>
            <DocCardActions>
              <Button component={Link} to="/docs/getting-started" color="primary">
                Read More
              </Button>
            </DocCardActions>
          </DocCard>
        </Grid>

        {/* Language Syntax */}
        <Grid item xs={12} sm={6} md={4}>
          <DocCard>
            <DocCardContent>
              <Typography variant="h6" gutterBottom>
                Language Syntax
              </Typography>
              <Typography>
                Explore the syntax and structure of MyLanguage with code examples.
              </Typography>
            </DocCardContent>
            <DocCardActions>
              <Button component={Link} to="/docs/syntax" color="primary">
                Read More
              </Button>
            </DocCardActions>
          </DocCard>
        </Grid>

        {/* Standard Library */}
        <Grid item xs={12} sm={6} md={4}>
          <DocCard>
            <DocCardContent>
              <Typography variant="h6" gutterBottom>
                Standard Library
              </Typography>
              <Typography>
                Discover the built-in functions and modules in MyLanguage's standard library.
              </Typography>
            </DocCardContent>
            <DocCardActions>
              <Button component={Link} to="/docs/standard-library" color="primary">
                Read More
              </Button>
            </DocCardActions>
          </DocCard>
        </Grid>

        {/* Add more documentation sections */}
      </Grid>
      
    </DocsContainer>
  );
};

export default DocsPage;