import { Container, Grid, Typography, Avatar, Button, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Import your profile photo
import profilePhoto from '../assets/profile.jpeg';

const About = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Profile Photo */}
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <Avatar
              alt="Profile Photo"
              src={profilePhoto}
              sx={{ width: 200, height: 200 }}
            />
          </Grid>

          {/* About Information */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Hi, Myself Manoj Kumar, I am an enthusiastic and driven Full Stack Developer with a strong foundation in the MERN stack, looking to apply my technical skills and project experience to contribute to innovative software solutions. I aim to learn, grow, and create impactful web applications with an emphasis on responsive design, clean code, and user experience.
            </Typography>

            {/* Social Links */}
            <Box mt={2}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/manoj-kumar-289202237"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ marginRight: 2 }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<GitHubIcon />}
                href="https://github.com/manojLovesCoding"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
