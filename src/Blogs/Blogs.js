import React, { useState } from 'react';
import { Typography, Box, Container, Grid, CardMedia, Divider, TextField } from '@mui/material';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import slaveryImage from '../Images/slavery.png';
import immigrationImage from '../Images/immigrationImage.jpg';
import housewivesImage from '../Images/housewives.png';
import './Blogs.css';

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Her Ties To Motherhood',
      description: 'The lives of enslaved women rewritten in the frame of motherhood.',
      image: slaveryImage,
      link: '/post1',
    },
    {
      id: 2,
      title: 'Her Search for Autonomy on American Soil',
      description: 'She seeks what society tells her she cannot have.',
      image: immigrationImage,
      link: '/post2',
    },
    {
      id: 3,
      title: 'Redefining Her Power as a Housewife',
      description: 'She pushes past the bounds of tradition to influence society and politics.',
      image: housewivesImage,
      link: '/post3',
    },
  ];

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <Navbar />
      {/* Search bar moved outside the main content box */}
      <Box className="search-bar-container">
        <TextField
          label="Search Blogs"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </Box>
      <Container maxWidth="lg">
        <Box className="home-container">
          <Box className="blog-post">
            <Grid container spacing={2} alignItems="center">
              {filteredPosts.map((post) => (
                <React.Fragment key={post.id}>
                  <Grid item xs={12} sm={4}>
                    <CardMedia
                      component="img"
                      image={post.image}
                      alt={post.title}
                      className="blog-media"
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <Typography variant="h5" gutterBottom>
                      <Link to={post.link} color="inherit" className="blog-link" style={{ textDecoration: 'none' }}>
                        {post.title}
                      </Link>
                    </Typography>
                    <Typography variant="body2">{post.description}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
            <Divider />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Blogs;
