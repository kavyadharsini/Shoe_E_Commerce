import React from 'react';
import { Container, Typography, Grid, Paper} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const AboutUs = () => {
  const theme = useTheme();

  return (
    <>
      <section style={{ padding: '60px 20px', backgroundColor: '#f4f4f4' }}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom marginTop={5}>
            About Us
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            At Nike, we are passionate about innovation and excellence. Our mission is to bring inspiration and innovation to every athlete in the world. Learn more about who we are and what drives us.
          </Typography>
          <Grid container spacing={7} marginTop={2}>
            <Grid item xs={10} md={6}>
              <Paper elevation={3} style={{ padding: theme.spacing(3), backgroundColor: '#fff', height: '100%' }}>
                <Typography variant="h4" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1" paragraph marginTop={2}>
                <li>Our mission is to create groundbreaking products and experiences that empower athletes everywhere. We believe in the power of sport to change lives and are committed to making a positive impact on the world through our innovations and community initiatives.
                </li></Typography>
              </Paper>
            </Grid>
            <Grid item xs={10} md={6}>
              <Paper elevation={3} style={{ padding: theme.spacing(3), backgroundColor: '#fff', height: '100%' }}>
                <Typography variant="h4" gutterBottom>
                  Our Values
                </Typography>
                <Typography variant="body1" paragraph marginTop={2}>
                  We are driven by core values that include:
                </Typography >
                <ul >
                  <li><Typography variant="body1">Innovation</Typography></li>
                  <li><Typography variant="body1">Integrity</Typography></li>
                  <li><Typography variant="body1">Inclusion</Typography></li>
                  <li><Typography variant="body1">Sustainability</Typography></li>
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </section>
      
      
    </>
  );
};

export default AboutUs;
