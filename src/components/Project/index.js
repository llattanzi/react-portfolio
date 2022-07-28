import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
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
                <a href="https://pacific-depths-60618.herokuapp.com/">
                    <div>
                        <h3>Roam</h3>
                        <h4>MongoDb, Express.js, React, Node.js, Apollo-GraphQL, MUI</h4>
                    </div>
                </a>
                </CardContent>
            </Card>

            <Card className='container' component='section' elevation={6}>
                <CardContent className="content-info">
                <a href="https://triangle-twitchers.herokuapp.com/">
                    <div>
                        <h3>Twitcher</h3>
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
                        <h3>Run Buddy</h3>
                        <h4>HTML/CSS</h4>
                    </div>    
                </a>
                </CardContent>
            </Card>

            <Card className='container' component='section' elevation={6}>
                <CardContent className="content-info">
                <a href="https://llattanzi.github.io/robot-gladiators/">
                    <div>
                        <h3>Robot Gladiators</h3>
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
                        <h3>Note Eater</h3>
                        <h4>HTML, CSS, JavaScript</h4>
                    </div>
                </a>
                </CardContent>
            </Card>
        </section>
    );
}
  
export default Project;