import React from 'react';
import { Typography, Box, Container, Link, Grid, CardMedia, Divider } from '@mui/material';
import Navbar from '../Components/Navbar';
import './Blogs.css';

import slaveryImage from '../Images/slavery.png';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Title",
      summary: "Description.",
      link: "/blogs/the-impact-of-women-in-technology",
      imageUrl: slaveryImage
    }
  ];

  return (
    <div className="home">
      <Navbar />
      <Container maxWidth="lg">
        <Box className="home-container">
          {blogPosts.map((post, index) => (
            <Box key={post.id} className="blog-post">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                  <CardMedia
                    component="img"
                    image={post.imageUrl}
                    alt={post.title}
                    className="blog-media"
                  />
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h5" gutterBottom>
                    <Link href={post.link} color="inherit" className="blog-link">
                      {post.title}
                    </Link>
                  </Typography>
                  <Typography variant="body2">
                    {post.summary}
                  </Typography>
                </Grid>
              </Grid>
              {index !== blogPosts.length - 1 && <Divider />}
            </Box>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default Blogs;

