import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button, Box, Container, styled } from '@mui/material';
import { keyframes } from '@mui/system';
import HeroSection from '../../components/HeroSection/HeroSection';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
  
}));



const FeatureCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
  animation: `${fadeIn} 1s ease-in-out`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[4],
  borderRadius: theme.spacing(1),
}));

const FeatureCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const FeatureCardActions = styled(CardActions)(({ theme }) => ({
  justifyContent: 'flex-end',
  padding: theme.spacing(2),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  textAlign: 'center',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
}));

const HomePage = () => {
  return (
    <StyledContainer >
      {/* Hero Section */}
      <HeroSection/>

      {/* Features Section */}
      <Box marginTop={8} marginBottom={8}>
        <SectionTitle variant="h4">Key Features</SectionTitle>
        <Grid container spacing={4} justifyContent="center">
          {/* Feature 1 */}
          <Grid item>
            <FeatureCard>
              <FeatureCardContent>
                <Typography variant="h5" gutterBottom>
                  Fast Execution
                </Typography>
                <Typography>
                  Experience lightning-fast execution speeds, enhancing your development workflow.
                </Typography>
              </FeatureCardContent>
              <FeatureCardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </FeatureCardActions>
            </FeatureCard>
          </Grid>
          {/* Add more feature cards */}
        </Grid>
      </Box>

      {/* Code Examples Section */}
      <Box marginBottom={8}>
        <SectionTitle variant="h4">Code Examples</SectionTitle>
        {/* Add code examples or code snippets */}
      </Box>

      {/* Ecosystem Section */}
      <Box marginBottom={8}>
        <SectionTitle variant="h4">Ecosystem</SectionTitle>
        <Grid container spacing={4} justifyContent="center">
          {/* Ecosystem Item 1 */}
          <Grid item>
            <FeatureCard>
              <FeatureCardContent>
                <Typography variant="h5" gutterBottom>
                  Package Manager
                </Typography>
                <Typography>
                  Easily manage dependencies and libraries with our package manager.
                </Typography>
              </FeatureCardContent>
              <FeatureCardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </FeatureCardActions>
            </FeatureCard>
          </Grid>
          {/* Add more ecosystem items */}
        </Grid>
      </Box>

      {/* Community Section */}
      <Box marginBottom={8}>
        <SectionTitle variant="h4">Community</SectionTitle>
        {/* Add community-related content */}
      </Box>

      {/* Getting Started Section */}
      <Box marginBottom={8}>
        <SectionTitle variant="h4">Getting Started</SectionTitle>
        {/* Add getting started steps or links */}
      </Box>

      {/* Footer */}
      <Box textAlign="center" marginTop={8}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} My Programming Language. All rights reserved.
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default HomePage;