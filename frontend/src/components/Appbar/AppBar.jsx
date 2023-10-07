import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled } from '@mui/material/styles';

const MyButton = styled(Button)(({ theme, active }) => ({
  border: 'none',
  borderRadius: 3,
  color: 'black',
  borderRadius: '26px',
  background: active ? '#FFF' : 'transparent',
  height: 48,
  padding: '0 30px',
}));

const pages = ['Home', 'Travel', 'Login', 'Contact'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activePage, setActivePage] = React.useState('Travel'); // You need to update this state

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Function to set the active page (you need to call this when the page changes)
  const handleSetActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0)', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Box sx={{display: { xs: 'none', md: 'flex' }}}>
          <img style={{marginRight: 10,width:'30px',height:'27px'}} src='./logo.svg' ></img>
          </Box>
         <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Voyager X
          </Typography>

          <Box sx={{ flexGrow: 1, display:{xs:'none',md:'flex'}, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <MyButton
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  handleSetActivePage(page); // Set the active page when the button is clicked
                }}
                sx={{
                  my: 2,
                  color: activePage === page ? 'black' : 'white',
                  border: activePage === page ? '1px solid #000' : 'none', // Add border only to the active page
                  display: 'block',
                }}
                active={activePage === page}
              >
                {page}
              </MyButton>
            ))}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{display: { xs: 'flex', md: 'none' }}}>
          <img style={{marginRight: 10,width:'30px',height:'27px'}} src='./logo.svg' ></img>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             Voyager X
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
