import React from 'react';
import Box from '@mui/material/Box';
import ResponsiveAppBar from '../Appbar/AppBar';
import Astronaut from './Astronaut';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import  Button  from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Player } from '@lottiefiles/react-lottie-player';


// Import your image asset from the assets folder

const Explore = styled(Button)(({ theme }) => ({
  borderRadius: '30px',
  background: '#EBF3FF',
  width: '187px',
  height: '60px',
  color: '#01043B',
  transition: 'transform 0.3s, color 0.3s', // Add transition properties
  '&:hover': {
    border: '5px solid #EBF3FF', // Make the button 10% bigger on hover
    color: 'white', // Change text color to white on hover
  },
}));

const Getstarted = styled(Button)(({ theme }) => ({
  borderRadius: '30px',
  background: '#CD5CFF',
  width: '187px',       
  height: '60px',
  color: '#01043B',
  transition: 'transform 0.3s, color 0.3s', // Add transition properties
  '&:hover': {
    border: '5px solid #CD5CFF', // Make the button 10% bigger on hover
    color: 'white', // Change text color to white on hover
  },
}));


function HomePage() {
  return (
    <>
      <Box sx={{
          background: '#01043B',
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          height: '100vh', // Set height to 100vh for full viewport height
          overflow: 'auto', // Enable scrolling
          scrollbarWidth: 'none',
  '-ms-overflow-style': 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
        }}>
        <ResponsiveAppBar />
        
        <img
        src='./moon.svg'
        style={{
          position: 'absolute',
          left: 0,
          top: '50%', // Adjust vertical position as needed
          transform: 'translateY(-50%)', // Center vertically
          width: 'auto', // Adjust the width as needed
          height: 'auto', // Maintain aspect ratio
          zIndex: 1, // Place above the stars
        }}
        />
        
        <img
        src='./stars.svg'
        style={{
          width: '100%', // Cover the full width of the screen
          height: '100vh', // Cover the full height of the viewport
          objectFit: 'cover', // Maintain aspect ratio and cover
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0, // Place behind the moon
        }}
        />
        
        
    <Astronaut />     

<Stack spacing={6} sx={{marginTop:'90rem',color:'white',ml:8}}>
<Typography variant="h3" component="div" gutterBottom>
Do you wish to reach <br/> the Galaxy?
</Typography>
<Stack direction="row" spacing='16rem'>
  <Typography variant="h6" style={{ maxWidth: '700px', }} component="div" gutterBottom>
  In the near future, as space tourism becomes routine, our mission as futuristic travel agents is to create an advanced tool. This tool will not only customize itineraries for those wishing to explore Mars, Jupiter, or Saturn but will also educate current users about our solar system's wonders. We aim to connect the present to the cosmic frontier, inviting everyone to explore space's mysteries and marvels.
  </Typography>

  <Player
  autoplay
  loop
  src="https://lottie.host/551dc2fc-7256-4d49-9563-80775176fa81/o3J3kDUy1F.json"
  style={{ height: '350px', width: '350px',marginTop:'-8rem' }}
>
  
</Player>
  </Stack>

  <Explore>Explore</Explore>
</Stack>
    


<Box
  sx={{
    background: `url('./space.png') no-repeat center center fixed`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    color: 'white',
    marginTop:'5rem',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)', // Add shadow
    
  }}
>
  <Typography variant="h3" component="div" gutterBottom sx={{textAlign:'center'}}>
    Choose Your Astral <br />
    Destination Right Now
  </Typography>
  <br />
  <Getstarted>Get Started</Getstarted>
  <br/>
  <Stack direction="row" spacing={1}>
  <Typography variant="h5" component="div" gutterBottom sx={{color: 'rgba(255, 255, 255, 0.40)'}}>
    You don't have an account?
  </Typography>
  <Typography variant="h5" component="div" gutterBottom >
    Sign Up here
  </Typography>
</Stack>
</Box>
        
      </Box>
    </>
  );
}



export default HomePage;
