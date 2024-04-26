import React from 'react';
import {
  Container, Typography, Box, Grid, Accordion, AccordionSummary, AccordionDetails, 
  IconButton, Tooltip, Link, styled
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const CustomContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
}));

const Highlight = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(45deg, ${'#ff416c'} 30%, ${'#ef416c'} 90%)`,
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
}));

const CodeBlock = styled(Box)(({ theme }) => ({
  background: theme.palette.action.hover,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  fontFamily: '"Fira code", "Fira Mono", monospace',
  overflow: 'auto',
  margin: theme.spacing(1, 0),
}));

const GettingStarted = () => {
  return (
    <CustomContainer maxWidth="lg">
      <Box textAlign="center" marginBottom={4}>
        <Highlight variant="h2" component="div" gutterBottom>
          Getting Started with Rat-language
        </Highlight>
        <Typography variant="h6" color="textSecondary" component="p">
          Dive into the simplicity and power of Rat-language. Start building right away.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">1. Understanding the structure</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                The Rat Organization is comprised of three main repositories: <Link href="https://github.com/rat-language/rat" target="_blank" rel="noopener">The Rat-language</Link>, The Rat-language <Link href="https://github.com/rat-language/output-backend" target="_blank" rel="noopener">Online Compiler</Link>, and The Rat-language <Link href="https://github.com/rat-language/rat-language.github.io" target="_blank" rel="noopener">Website</Link>.
              </Typography>
              <Typography paragraph>
                For a detailed installation overview of the language, refer to our langauge  <Link href="https://github.com/rat-language/rat/blob/main/README.md">README</Link>.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12} md={6}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">2. Setup Your Environment</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Setting up your development environment is crucial for a seamless coding experience. Follow our comprehensive setup guide to configure your IDE, set environment variables, and more.
              </Typography>
              <Typography paragraph>
                Access the full setup guidelines <Link href="#">here</Link>.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">3. Write Your First Program</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Your first program in Rat-language will be the classic "Hello, World!". Open your text editor or IDE, create a new file named 'helloWorld.yln', and enter the following code:
              </Typography>
              <CodeBlock>
                # Rat-language syntax for Hello World<br />
                print("Hello, World!")
              </CodeBlock>
              <Tooltip title="Run your code">
                <IconButton color="primary">
                  <PlayCircleFilledIcon />
                </IconButton>
              </Tooltip>
              <Typography paragraph>
                Save your file and run it using the command line or your IDE's run feature. Congratulations, you've just written and executed your first Rat-language program!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">4. Explore Language Features</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Rat-language comes packed with features designed to make development intuitive and efficient. Here are some key features you might find interesting:
              </Typography>
              <CodeBlock>
                # Feature 1: Example Code<br />
                # Feature 2: Example Code<br />
                # Feature 3: Example Code
              </CodeBlock>
              <Typography paragraph>
                Dive deeper into these features and discover more by checking out our <Link href="#">full documentation</Link>.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </CustomContainer>
  );
};

export default GettingStarted;
