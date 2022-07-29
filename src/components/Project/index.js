import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import project1 from "../../assets/images/project-1.jpg";
import project2 from "../../assets/images/project-2.jpg";
import project3 from "../../assets/images/project-3.jpg";
import project4 from "../../assets/images/project-4.jpg";
import project5 from "../../assets/images/project-5.png";

let projects = [
    {
        "name": "Roam",
        "description1": "Roam is an app for people who want to travel sustainably. Traveling is great and we love it — but it also takes a toll on the planet. We wanted to create a fun, user-friendly application so people can travel while being mindful of climate change.",
        "description2": "Users can create an account, create trip itineraries with friends, track expenses and split them at the end of their trip. Users can even offset the carbon emissions from their trip by donating to a charity, all through Roam.",
        "image": project1,
        "technologies": "MongoDb, Express.js, React, Node.js, Apollo-GraphQL, MUI, Stripe API",
        "link": "https://pacific-depths-60618.herokuapp.com/"
    },
    {
        "name": "Twitcher",
        "description1": "Twitcher is a website that allows birdwatching aficionados to collab online. Users can view upcoming events, resources for new birders, and a members-only blog where people can write about their birding experiences. The Bird of The Day feature on the homepage displays a new bird each day using API calls.",
        "description2": "",
        "image": project2,
        "technologies": "Materialize CSS, Node.js, Express, Sequelize, Nodemailer, Handlebars, eBird API, and bcrypt.",
        "link": "https://triangle-twitchers.herokuapp.com/"
    },
    {
        "name": "Shop-Shop",
        "description1": "A MERN application for an e-commerce platform that leverages react redux to render a single page web application where users can browse products, add/remove them from a shopping cart, and complete purchases which are all managed using Apollo GraphQL",
        "description2": "",
        "image": project3,
        "technologies": "Node.js, Redux, React, Apollo-GraphQL, Express.js, MongoDB, and Stripe API",
        "link": "https://frozen-beyond-06163.herokuapp.com/"
    },
    {
        "name": "The Tech Blog",
        "description1": "A Tech Blog where users can create an account, see blog posts from other users, add comments, and create their own posts from their personal dashboard.",
        "description2": "",
        "image": project4,
        "technologies": "MVC paradigm, Handlebars.js, Sequelize, Express.js, SQL, Node.js, bcrypt, CSS",
        "link": "https://frozen-escarpment-70188.herokuapp.com/"
    },
    {
        "name": "Note-Eater",
        "description1": "Note-Eater is a web application that helps musicians learn songs more efficiently with chord sheets and music videos all in one place with a simple search.",
        "description2": "Users can search a music artist or band and see a list of their songs. When a user clicks a song from the list, they can access a link to chord sheets for the song and the corresponding music video is displayed in the browser.",
        "image": project5,
        "technologies": "HTML, CSS, JavaScript, YouTube API, Songsterr API",
        "link": "https://foglea10.github.io/Note-Eater/"
    }
];

function Project() {
    return (
        <section id='project'>
            {projects.map((project) => (
                <Card className='container' component='section' elevation={6} key={project.name}>
                    <CardMedia 
                        component="img" 
                        image={project.image} 
                        alt={project.name}
                        className='project-photo' 
                    />
                    <CardContent className="content-info">
                        <h2>{project.name}</h2>
                        <p>
                            {project.description1}
                        </p>
                        <p>
                            {project.description2}
                        </p>
                        <h4>Technologies Used:</h4>
                        <p>{project.technologies}</p>
                    <div className='button-container'>
                        <Button 
                            variant='contained' 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button"
                        >
                            View Application
                            <OpenInNewIcon style={{ color: '#ffffff' }} className='icon-open'/>
                        </Button>
                    </div>
                    </CardContent>
                </Card>
            ))}
        </section>
    );
}
  
export default Project;