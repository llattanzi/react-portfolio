import React from 'react';
import headshot from '../../assets/images/headshot.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function About() {
  return (
    <Card className='container about-me' component='section' elevation={6}>
      <CardMedia 
        component="img" 
        image={headshot} 
        alt="Headshot of Lauren looking fabulous"
        className='headshot' 
      />
      <CardContent className="content-info">
        <h2>Who am I?</h2>
        <p>
          I am a Product Development Engineer and Full Stack Web Developer with a passion for knowledge and creativity. 
          I love collaborating on teams and tackling any kind of challenge whether it's learning something completely new or taking a deeper dive into my existing skills.
          I hope to bring a new creative take and a fresh, innovative perspective into a career as a full stack developer with my experience designing a wide variety of medical devices.
          As an engineer with an education in Biomedical Engineering and Full Stack Web Development,  
          I welcome and enjoy the challenge of solving complex problems.
          <br /><br />
          When I'm not coding, I spend my free time weightlifting, creating fitness programs, hiking, skiing, and traveling the world as much as I can.
          Although, I do love spending a good amount of that free time learning new technologies and working on personal coding projects!
        </p>
      </CardContent>
    </Card>
  );
}

export default About;