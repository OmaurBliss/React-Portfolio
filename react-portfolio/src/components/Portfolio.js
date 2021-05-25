import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import "./component.css";

import Typography from "@material-ui/core/Typography";

import project1 from "../images/OB_Web_portfolio.png";
import project2 from "../images/Note_Taker_app.png";
import project3 from "../images/Offline_Budget_Tracker.png";
import project4 from "../images/Employee_Directory.png";
import project5 from "../images/Biblioflix_team_Seinfeld.png";
import project6 from "../images/Cup_of_Sugar_Le_Mustache.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Omaur Bliss Web Portfolio",
    description: `This responsive web portfolio uses HTML, CSS, and Javascript. This web page is mobile friendly
    You can access a pdf resume from this site`,
    image: project1,
  },
  {
    name: "Note Taker App",
    description: `This is a simple note taker app for people on the go. This site uses Node, Express, CSS, HTML, Javascript, and JSON. You can easily enter a note, review notes, and delete old notes
    `,
    image: project2,
  },
  {
    name: "Offline Budget Tracker",
    description: `This budget tracking app is for people on the go and can be used in areas without web access. This site uses PWA, Indexed DB to keep functioning without internet access`,
    image: project3,
  },
  {
    name: "React Employee Directory",
    description: `This employee directory allows the user to see pertinent employee information as well as being able to filter and search for employees. This app uses React for the front end development`,
    image: project4,
  },
  {
    name: "BiblioFlix",
    description: `Bookflix is a site that allows the user to search a movie, and consequently find books that match the movies searched. Its main function is finding out if there are books for certain movies, and giving the user information on the books that show up when searched. It also has a library function that allows users to save books they want to remember, so they can return to the site at any time and find the searched books that they want to look into further.`,
    image: project5,
  },
  {
    name: "Cup of Sugar",
    description: `Cup of Sugar is simply a platform for good neighbors to be good neighbors. Cup of Sugar users can easily find local and national resources, browse posts about what resources or services are available or needed in their community, and connect with one another to help fulfill those needs. Users can create posts of their own as well where they can offer up free food or clothing, or to ask for help with something in their home.
    This app ulilizes Express, MySQL, Sequelize, Session-Sequelize, Handlebars, jQuery, javaScript, and CSS `,
    image: project6,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia component="img" alt="Project 1" height="140" image={project.image} />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button type="button" className="btn">
                    <a href="https://github.com/OmaurBliss">Github </a>
                  </button>
                  <button type="button" className="btn">
                    <a href="https://www.linkedin.com/in/omaur-bliss-35877b21/">LinkedIn </a>
                  </button>
                  {/* <button type="button" className="btn">
                    <a href="https://github.com/OmaurBliss">Github </a>
                  </button> */}
                </div>
                {/* <button className= "btn">
                   <a href = "https://github.com/OmaurBliss">Github </a>
                   </button>  */}
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;