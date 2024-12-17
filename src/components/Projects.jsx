import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"
import image5 from "../assets/image5.jpg"
const projects = [
  {
    title: "Full Stack AI SAAS Application",
    description: "A full-stack AI-powered background removal app built using the MERN stack. Users can upload images, remove backgrounds via the Clipdrop API, and download images with a transparent background.",
    image: image1,
    liveLink: "https://bg-removal-three-xi.vercel.app/",
    githubLink: "https://github.com/manojLovesCoding/bg-removal.git",
  },
  {
    title: "Real Estate Website",
    description: "A responsive real estate website built with ReactJS and TailwindCSS, complete with smooth animations and an integrated contact form.",
    image: image2,
    liveLink: "https://real-estate-app-six-tawny.vercel.app/",
    githubLink: "https://github.com/manojLovesCoding/Real-Estate-App.git",
  },
  {
    title: "Online Appointment Booking Website",
    description: "A responsive online appointment booking system for doctors and hospitals built with ReactJS and TailwindCSS.",
    image: image3,
    liveLink: " https://hospital-app--eight.vercel.app/",
    githubLink: "https://github.com/manojLovesCoding/Hospital-app.git",
  },
];

const project = [
  {
    title: "Netflix Clone",
    description: "A Netflix clone application allowing users to browse movies, create an account, and view movie details.",
    image: image4,
    videoLink:"https://drive.google.com/file/d/1nbFuK8P-5NfsANvAetPtTxPt1NZWYqjC/view?usp=sharing",
    githubLink: "https://github.com/manojLovesCoding/Netflix-Clone.git",
  },
  {
    title: "Contact Manager",
    description: "A backend contact management system using MongoDB, Express, and Node.js, enabling users to manage their contacts securely.",
    image: image5,
    videoLink:"https://drive.google.com/file/d/1dWAN4P2YcdIhPYZa4B-T_pjtHXXp15Ks/view?usp=sharing",
    githubLink: "https://github.com/manojLovesCoding/mycontacts-backend.git",
  },

];

const Projects = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}

        {project.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video Demo
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
