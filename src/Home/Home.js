import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import Navbar from '../Components/Navbar'; 
import './Home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slavery from '../Images/slavery.png';
import immigration from '../Images/immigrationImage.jpg';
import housewives from '../Images/housewives.png';


const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const carouselImages = [slavery, immigration, housewives];

  return (
    <div className="home">
      {/* Navbar */}
      <Navbar /> {/* Reusing the shared Navbar component */}

      {/* Content Section */}
      <Container maxWidth="lg">
        <Box className="centered-box">
          {/* Main Title */}
          <Typography variant="h3" component="h1" gutterBottom className="main-title">
            Her Power, Her Past
          </Typography>
          {/* Short Description */}
          <Typography variant="body1" className="description-text">
            Throughout our history, women have been the silent, architects of societal change. Whether they carried a voice or not, they have been instrumental in shaping
            the narratives of our past and our country. Women's lives, experiences, and memories have enriched our understanding of history, providing depth and perspective
            that is often overlooked. As a collective, it is our shared responsibility to reflect on their stories, and to celebrate the role they have played throughout the 
            fabric of time. "Her Power, Her Past", a blog dedicated to exploring American women's history, aims to study these hidden stories and uncover the truths about women's 
            past. As we discuss their trials and triumphs, we hope to build a community that joins us on this journey of exploring their power and their past, acknowledging
            their lasting impact on our present. 
          </Typography>
        </Box>

        {/* Carousel Section */}
        <Box mt={4}>
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <Box key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ width: '100%', height: 'auto', borderRadius: '10px', objectFit: 'cover' }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

      </Container>
    </div>
  );
};

export default Home;

