import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import rat from '../../Photos/rat.png';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

const Logo = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontWeight: 'bold',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color: '#333',
}));

const LogoImage = styled('img')(({ theme }) => ({
  marginRight: theme.spacing(2), 
  height: '40px',
}));


const NavigationButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  textTransform: 'uppercase',
  fontWeight: 'bold',
  fontSize: '0.9rem',
  color: '#333',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#FE6B8B',
  },
}));

const Header = () => {
  return (
    <StyledAppBar position="fixed" elevation={0}>
      <StyledToolbar>
        <LogoImage src={rat} alt="Logo" />
        <Logo variant="h6" component="div">
          Rat-language
        </Logo>
        <div>
          <NavigationButton color="inherit" component={Link} to="/">
            Home
          </NavigationButton>
          <NavigationButton color="inherit" component={Link} to="/compile">
            Compile
          </NavigationButton>
          <NavigationButton color="inherit" component={Link} to="/docs">
            Documentation
          </NavigationButton>
          {/* Add more navigation buttons as needed */}
        </div>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;