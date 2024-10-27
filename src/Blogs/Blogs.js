import React from 'react';
import { Typography, Box, Container, Grid, CardMedia, Divider } from '@mui/material';
import Navbar from '../Components/Navbar';
import './Blogs.css';
import { Link } from 'react-router-dom';

import slaveryImage from '../Images/slavery.png';
import immigrationImage from '../Images/immigrationImage.jpg';

const Blogs = () => {
  return (
    <div className="home">
      <Navbar />
      <Container maxWidth="lg">
        <Box className="home-container">
          <Box className="blog-post">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <CardMedia
                  component="img"
                  image={slaveryImage}
                  alt="Her Ties To Motherhood"
                  className="blog-media"
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="h5" gutterBottom>
                  <Link to="/post1" color="inherit" className="blog-link" sx={{ textDecoration: 'none' }}>
                    Her Ties To Motherhood
                  </Link>
                </Typography>
                <Typography variant="body2">
                  The lives of enslaved women rewritten in the frame of motherhood.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <CardMedia
                  component="img"
                  image={immigrationImage}
                  alt="Her Search for Autonomy in The New World"
                  className="blog-media"
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="h5" gutterBottom>
                  <Link to="/post2" color="inherit" className="blog-link" sx={{ textDecoration: 'none' }}>
                    Her Search for Autonomy in The New World
                  </Link>
                </Typography>
                <Typography variant="body2">
                  She seeks what society tells her she cannot have.
                </Typography>
              </Grid>
            </Grid>
            <Divider />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Blogs;
