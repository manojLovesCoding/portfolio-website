
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

// Import images for skills
import reactLogo from '../assets/react.jpg';
import nodejsLogo from '../assets/nodejs.jpg';
import javascriptLogo from '../assets/javascript.jpg';
import tailwindcssLogo from '../assets/tailwindcss.jpg';
import axiosLogo from '../assets/axios.jpg';
import toastifyLogo from '../assets/toastify.jpg';
import reactRouterLogo from '../assets/reactRouter.jpg';
import fireBaseLogo from '../assets/firebase.jpg';
import clerkLogo from '../assets/clerk.jpg';
import expressLogo from '../assets/express.jpg';
import mongoDBLogo from '../assets/mongodb.jpg';
import mongooseLogo from '../assets/mongoose.jpg';
import jwtLogo from '../assets/jwt.jpg';
import corsLogo from '../assets/cors.jpg';
import multerLogo from '../assets/multer.jpg';
import clipDropLogo from '../assets/clipDropApi.jpg';
import tmdbLogo from '../assets/tmdb.jpg';
import razorpayLogo from '../assets/razorpay.jpg';
import gitLogo from '../assets/git.jpg';
import githubLogo from '../assets/github.jpg';
import thunderClientLogo from '../assets/thunderClient.jpg';
import nodemonLogo from '../assets/nodemon.jpg';
import dotEnvLogo from '../assets/dotEnv.jpg';
import vercelLogo from '../assets/vercel.jpg';
import HostingerLogo from '../assets/hostinger.jpg';
import MaterialUiLogo from '../assets/materialUi.jpg';

const skills = [
  {
    title: "React",
    description: "A JavaScript library for building user interfaces.",
    image: reactLogo, 
  },
  {
    title: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    image: nodejsLogo, 
  },
  {
    title: "JavaScript",
    description: "A programming language used to create dynamic website content.",
    image: javascriptLogo, 
  },
  {
    title: "Tailwind-CSS",
    description: "a utility-first CSS framework that simplifies web development by providing a set of pre-designed utility classes",
    image: tailwindcssLogo,  
  },
  {
    title: "Material-UI",
    description: "an open-source that combines React with Google's Material Design to create a user interface (UI) component library",
    image: MaterialUiLogo,  
  },
  {
    title: "Axios",
    description: "a JavaScript library that allows users to make HTTP requests from a browser or Node.js",
    image: axiosLogo,  
  },
  {
    title: "Toastify",
    description: "a React library designed to create and manage toast notifications within your applications",
    image: toastifyLogo, 
  },
  {
    title: "React Router",
    description: "a JavaScript framework that lets us handle client and server-side routing in React applications",
    image: reactRouterLogo,  
  },
  {
    title: "Firebase",
    description: "a Google-backed platform that helps developers build and run apps for mobile and web",
    image: fireBaseLogo,  
  },
  {
    title: "Clerk",
    description: "a complete suite of embeddable UIs, flexible APIs, and admin dashboards to authenticate and manage your users",
    image: clerkLogo,
  },
  {
    title: "Express",
    description: "Express.js is a minimal and flexible Node.js web application framework that provides a list of features for building web and mobile applications easily.",
    image: expressLogo, 
  },
  {
    title: "MongoDB",
    description: "an open-source, document-based database management system that is designed for modern application development and the cloud",
    image: mongoDBLogo, 
  },
  {
    title: "Mongoose",
    description: "a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node. js JavaScript runtime environment",
    image: mongooseLogo, 
  },
  {
    title: "JWT",
    description: "an open standard that allows for the secure transmission of information between parties",
    image: jwtLogo, 
  },
  {
    title: "CORS",
    description: "a security mechanism that allows web applications to access resources from other domains",
    image: corsLogo, 
  },
  {
    title: "Multer",
    description: "Multer is a node.js middleware for handling multipart/form-data , which is primarily used for uploading files",
    image: multerLogo,  
  },
  {
    title: "ClipDrop API",
    description: "an AI-powered image editing platform that allows users to create and edit images quickly and easily",
    image: clipDropLogo, 
  },
  {
    title: "TMDB API",
    description: "a service that allows users to programmatically access and use data from the TMDb database",
    image: tmdbLogo, 
  },
  {
    title: "Razorpay API",
    description: "a set of tools that allow users to perform a variety of actions with Razorpay like Creating and managing payments",
    image: razorpayLogo,  
  },
  {
    title: "Git",
    description: "a free, open-source version control system (VCS) that's used to track code changes and maintain a history of modifications",
    image: gitLogo, 
  },
  {
    title: "Github",
    description: "a web-based interface that uses Git, the open source version control software that lets multiple people make separate changes to web pages at the same time",
    image: githubLogo, 
  },
  {
    title: "Thunder-Client",
    description: "Thunder Client is a lightweight, user-friendly extension for Visual Studio Code (VS Code) that's designed for API testing",
    image: thunderClientLogo,  
  },
  {
    title: "Nodemon",
    description: "a command-line tool that automatically restarts a Node.js application when it detects changes to the project directory",
    image: nodemonLogo, 
  },
  {
    title: "Dotenv",
    description: "a zero-dependency library or module that loads environment variables from a .env file into the runtime environment",
    image: dotEnvLogo,  
  },
  {
    title: "Vercel",
    description: "a cloud platform that helps developers build, host, and scale web applications",
    image: vercelLogo, 
  },
  {
    title: "Hostinger",
    description: "a web hosting company that offers services such as web hosting, cloud hosting, WordPress hosting, and more",
    image: HostingerLogo,  
  },

];

const Skills = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        My Skills
      </Typography>
      <Grid container spacing={4}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={skill.image}
                alt={skill.title}
              />
              <CardContent>
                <Typography variant="h5">{skill.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {skill.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
