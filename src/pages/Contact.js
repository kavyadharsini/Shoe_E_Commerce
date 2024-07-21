import React from 'react';
import { Container, Typography, Grid, Button, Link, Box } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Contact = () => {
  return (
    <section style={{ padding: '20px 20px', backgroundColor: '#f4f4f4' }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom marginTop={10}>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          We're here to assist you with any questions or concerns you might have about the Nike Air Max Infinity or our other products. Reach out to us using the options below.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom marginTop={10} marginLeft={5}>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              If you need assistance or have inquiries, you can contact us through the following channels:
            </Typography>
            <Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
              <Box component="li" sx={{ marginBottom: 2 }}>
                <Typography variant="body1">
                  <strong>Email:</strong> <Link href="mailto:support@nike.com">support@nike.com</Link>
                </Typography>
              </Box>
              <Box component="li" sx={{ marginBottom: 2 }}>
                <Typography variant="body1">
                  <strong>Phone:</strong> <Link href="tel:+1234567890">+1 (234) 567-890</Link>
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body1">
                  <strong>Address:</strong> Nike, Inc., 1 Bowerman Drive, Beaverton, OR 97005, USA
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} marginTop={10} >
            <Typography variant="h4" gutterBottom marginLeft={10}>
              Follow Us
            </Typography>
            <Typography variant="body1" paragraph marginLeft={5}>
              Stay connected with us and keep up with the latest updates by following us on social media:
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }} marginLeft={5}>
              <Button
                component={Link}
                href="https://www.facebook.com/nike"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<Facebook />}
              >
                Facebook
              </Button>
              <Button
                component={Link}
                href="https://twitter.com/nike"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<Twitter />}
              >
                Twitter
              </Button>
              <Button
                component={Link}
                href="https://www.instagram.com/nike"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<Instagram />}
              >
                Instagram
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
