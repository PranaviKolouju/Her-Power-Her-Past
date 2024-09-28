import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box display="flex" justifyContent="center" mb={3}>
      {/* Wrapper for centering and setting width */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          borderRadius: '30px',
          width: '20%', 
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
        }}
      >
        <Toolbar sx={{ justifyContent: 'center' }}> {/* Center alignment for consistent nav items */}
          <Box>
            <Button
              component={Link}
              to="/"
              sx={{
                fontSize: '1.2rem',
                padding: '10px 20px',
                marginLeft: '15px',
                color: '#000', 
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                  color: '#000',  //
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/blogs"
              sx={{
                fontSize: '1.2rem',
                padding: '10px 20px',
                marginLeft: '15px',
                color: '#000',  
                '&:hover': {
                  backgroundColor: '#e0e0e0',  
                  color: '#000', 
                },
              }}
            >
              Blogs
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

