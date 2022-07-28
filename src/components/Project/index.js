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

function Project() {
    return (
        <section id='project'>
            <Card className='container' component='section' elevation={6}>
                <CardMedia 
                    component="img" 
                    image={project1} 
                    alt="Roam"
                    className='project-photo' 
                />
                <CardContent className="content-info">
                    <h2>Roam</h2>
                    <p>
                        Roam is an app for people who want to travel sustainably. Traveling is great and we love it — but it also takes a toll on the planet. We wanted to create a fun, user-friendly application so people can travel while being mindful of climate change.
                    </p>
                    <p>
                        Users can create an account, create trip itineraries with friends, track expenses and split them at the end of their trip. Users can even offset the carbon emissions from their trip by donating to a charity, all through Roam.
                    </p>
                    <h4>Technologies Used:</h4>
                    <p> MongoDb, Express.js, React, Node.js, Apollo-GraphQL, MUI</p>
                <div className='button-container'>
                    <Button 
                        variant='contained' 
                        href='https://pacific-depths-60618.herokuapp.com/'
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

            <Card className='container' component='section' elevation={6}>
                <CardContent className="content-info">
                <a href="https://triangle-twitchers.herokuapp.com/">
                    <div>
                        <h2>Twitcher</h2>
                        <h4>CSS, JavaScript, Node.js, Handlebars.js, MySQL</h4>
                    </div>
                </a>
                </CardContent>
                <CardMedia 
                    component="img" 
                    image={project2} 
                    alt="Twitcher"
                    className='project-photo' 
                />
            </Card>
            
            <Card className='container' component='section' elevation={6}>
                <CardContent className="content-info">
                <a href="https://llattanzi.github.io/run-buddy/">
                    <div >
                        <h2>Run Buddy</h2>
                        <h4>HTML/CSS</h4>
                    </div>    
                </a>
                </CardContent>
            </Card>

            <Card className='container' component='section' elevation={6}>
                <CardContent className="content-info">
                <a href="https://llattanzi.github.io/robot-gladiators/">
                    <div>
                        <h2>Robot Gladiators</h2>
                        <h4>JavaScript</h4>
                    </div>
                </a>
                </CardContent>
            </Card>

            <Card className='container' component='section' elevation={6}>
                <CardMedia 
                    component="img" 
                    image={project5} 
                    alt="Note Eater"
                    className='project-photo' 
                />
                <CardContent className="content-info">
                <a href="https://foglea10.github.io/Note-Eater/">
                    <div>
                        <h2>Note Eater</h2>
                        <h4>HTML, CSS, JavaScript</h4>
                    </div>
                </a>
                </CardContent>
            </Card>
        </section>
    );
}
  
export default Project;