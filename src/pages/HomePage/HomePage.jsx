import React from 'react';
import { Typography, Grid, Card, CardContent, CardActions, Button, Box, Container, styled } from '@mui/material';
import { keyframes } from '@mui/system';
import HeroSection from '../../components/HeroSection/HeroSection';
import CommunitySection from '../../components/CommunitySection/CommunitySection';
import CodeExamplesSection from '../../components/CodeExamplesSection/CodeExamplesSection';
import EcosystemSection from '../../components/EcosystemSection/EcosystemSection';

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
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  textAlign: 'center',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  textTransform: 'uppercase',
  letterSpacing: '2px',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
  animation: `${fadeIn} 1s ease-in-out`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[8],
  borderRadius: theme.spacing(2),
}));

const FeatureCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const FeatureCardActions = styled(CardActions)(({ theme }) => ({
  justifyContent: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
}));

const FeatureButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const EcosystemCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
  animation: `${fadeIn} 1s ease-in-out`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[8],
  borderRadius: theme.spacing(2),
}));

const EcosystemCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const EcosystemCardActions = styled(CardActions)(({ theme }) => ({
  justifyContent: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.secondary.main,
}));

const EcosystemButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      <StyledContainer>
        {/* Features Section */}
        <Box marginTop={12} marginBottom={12}>
          <SectionTitle variant="h4">Key Features</SectionTitle>
          <Grid container spacing={6} justifyContent="center">
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
                  <FeatureButton size="large">Learn More</FeatureButton>
                </FeatureCardActions>
              </FeatureCard>
            </Grid>
            {/* Add more feature cards */}
          </Grid>
        </Box>

        {/* Code Examples Section */}
        <Box marginBottom={12}>
          <SectionTitle variant="h4">Code Examples</SectionTitle>
          <CodeExamplesSection />
        </Box>

        {/* Ecosystem Section */}
        {/* <Box marginBottom={12}>
          <SectionTitle variant="h4">Ecosystem</SectionTitle>
          <EcosystemSection />
        </Box> */}

        {/* Community Section */}
        <Box marginBottom={12}>
          <SectionTitle variant="h4">Community</SectionTitle>
          <CommunitySection />
        </Box>
        {/* <Box marginBottom={12}>
          <SectionTitle variant="h4">Community</SectionTitle> */}
          {/* Add community-related content */}
        {/* </Box> */}

        {/* Getting Started Section */}
        <Box marginBottom={12}>
          <SectionTitle variant="h4">Getting Started</SectionTitle>
          {/* Add getting started steps or links */}
        </Box>
      </StyledContainer>


    </>
  );
};

export default HomePage;