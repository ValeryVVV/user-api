import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';

import { NavBar, HeaderNav, HeaderNavLink, LogoLink, LogoColor, Logo } from './AppBarStyles.jsx';



function AppBarPage() {
  return (
    <AppBar position="relative" elevation={0}>
          <NavBar>
            <LogoLink to="/">
                <Logo>User</Logo>
                <LogoColor>Info</LogoColor>
              </LogoLink>
              
              <HeaderNav>
                  <HeaderNavLink to="/">Home</HeaderNavLink>
              </HeaderNav>
        </NavBar>
    </AppBar>
  );
}

export default AppBarPage;
