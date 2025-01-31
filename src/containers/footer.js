import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
       
        color: 'white',
        py: 4,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        {/* Description Section */}
        <Box
          sx={{
            mb: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h5" className="logoFooter" component="p" sx={{  mx: 'auto',fontWeight: 'bold', mb: 2 }}>
            TrailerPeak
          </Typography>
          <Typography variant="body1"  sx={{ maxWidth: '800px', mx: 'auto' }}>
            TrailerPeak offers a personalized and immersive movie trailer experience, catering to the diverse tastes and preferences of film enthusiasts. The website utilizes advanced recommendation algorithms to curate a tailored selection of trailers based on users' viewing history, genre preferences, and ratings. By delivering highly relevant and intriguing trailers, TrailerPeak ensures users discover new movies that resonate with their individual interests.
          </Typography>
        </Box>

        {/* Main Footer Content */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          {/* Left Section: App Name and Copyright */}
          <Box>
            <Typography variant="h6" component="p" sx={{ fontWeight: 'bold' }}>
              TrailerPeak
            </Typography>
            <Typography variant="body2" color="white">
              © 2025 TrailerPeak. All rights reserved.
            </Typography>
          </Box>

          {/* Middle Section: Links */}
          <Box
            sx={{
              display: 'flex',
              gap: 3,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Link  color="inherit" underline="hover">
              About
            </Link>
            <Link color="inherit" underline="hover">
              Contact
            </Link>
            <Link  color="inherit" underline="hover">
              Privacy Policy
            </Link>
          </Box>

          {/* Right Section: Social Media Icons */}
          <Box
            sx={{
              display: 'flex',
              gap: 2,
            }}
          >
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <FaFacebook size={24} />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/@trailerPeak"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <FaTwitter size={24} />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/@trailerPeak"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <FaInstagram size={24} />
            </IconButton>
            <IconButton
              href="https://www.youtube.com/@trailerPeak"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <FaYoutube size={24} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;