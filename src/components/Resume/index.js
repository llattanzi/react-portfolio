import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import Button from '@mui/material/Button';

const Resume = () => {
    return (
        <div id='resume'>
            <h2>Lauren M. Lattanzi</h2>
            <section id='details'>
                <p>Email: Llattan@ncsu.edu</p>
                <p>Phone: (631) 235-8775</p>
                <p> 120 Saint Albans Dr., Apt 781</p>
                <p>Raleigh, NC 27609</p>
            </section>
            <section className='resume-sections'>
                <h3>OBJECTIVE:</h3>
                <div className='content'>
                    <p>
                        Seeking a full-time software position where I can leverage both my front-end and
                        back-end development skills to enhance functionality of a product.
                    </p>
                </div>
                <h3>EXPERIENCE:</h3>
                <div className='title-date content'>
                    <p>
                        <b>R&D Engineer</b>
                        <i>Blur Product Development</i>
                    </p>
                    <p>
                        <b>September 2018 - Present</b>
                        <i>Cary, North Carolina</i>
                    </p>
                </div>
                <ul>
                    <li>
                        Owned the development of complex ostomy leak detection and notification
                        algorithms in MATLAB for implementation in wearable medical device firmware.
                    </li>
                    <li>
                        Leveraged OOP in MATLAB and interpreted firmware written in C to optimize
                        code compatibility and conversion from the development/test environment in
                        MATLAB to production firmware.
                    </li>
                    <li>
                        Extensively tested the algorithms and associated mobile application in simulated use
                        and V&V testing environments to bring the device to successful clinical trials. 
                    </li>
                    <li>
                        Solely responsible for processing and analyzing all data collected from the app and
                        wearable device logs during clinical trials to assess product performance, study user
                        behaviors, and identify issues/potential improvements.
                    </li>
                    <li>
                        Worked closely with the app and firmware developers to communicate bugs,
                        solutions, and functions necessary to interface with the algorithm.
                    </li>
                    <li>
                        Used GitLab and GitKraken for source control and issue tracking.
                    </li>
                    <li>
                        Followed agile development practices and project management using Jira.
                    </li>
                </ul>
                <h3>PROJECTS:</h3>
                <div className='title-date content'>
                    <p>
                        <b>Roam</b>
                    </p>
                    <p>
                        <b>July 2022 - Present</b>
                    </p>
                </div>
                <ul>
                    <li>
                        Created an interactive MERN stack single-page application that allows users to
                        create trip itineraries with friends, split expenses, and offset carbon emissions.
                    </li>
                    <li>
                        Leveraged Apollo GraphQL with an Express.js server and Mongoose ODM to
                        query and manipulate a MongoDB database containing user, trip, and expense data.
                    </li>
                    <li>
                        Implemented a carbon offsetting feature where users can donate to a variety of
                        charities using Stripe API to complete payments.
                    </li>
                    <li>
                        Built a responsive front end using React, Material UI, and custom CSS.
                    </li>
                    <li>
                        Incorporated user authentication middleware using JWT to selectively limit site
                        experience to logged in users and protect API routes.
                    </li>
                </ul>
                <div className='title-date content'>
                    <p>
                        <b>Twitcher</b>
                    </p>
                    <p>
                        <b>May 2022</b>
                    </p>
                </div>
                <ul>
                    <li>
                        Built a full stack web app to serve as a bird watching blog for the local community.
                    </li>
                    <li>
                        Developed the back-end in Node.js following OOP and the MVC paradigm with
                        the use of Express, MySQL, and Sequelize ORM.
                    </li>
                    <li>
                        Created a front-end with Materialize CSS framework, HTML generated with
                        handlebars.js, and JavaScript for event handlers and requests to internal APIs.
                    </li>
                    <li>
                        Created RESTful web APIs in Node.js to get, edit, delete and add blog posts,
                        comments, and users stored in SQL database which were tested using Insomnia.
                    </li>
                    <li>
                        Implemented user authentication with password hashing to protect API routes.
                    </li>
                </ul>
                <h3>EDUCATION:</h3>
                <div className='title-date content'>
                    <p>
                        <b>NC State University and UNC Chapel Hill</b>
                        <i>B.S., Biomedical and Health Sciences Engineering</i>
                    </p>
                    <p>
                        <b>May 2018</b>
                        <p>GPA: 3.7</p>
                    </p>
                </div>
                <div id='ed-2'>
                    <div className='title-date content'>
                        <p>
                            <b>Full Stack Coding Bootcamp</b>
                            <i>UNC Chapel Hill</i>
                        </p>
                        <p>
                            <b>February 2022 – July 2022</b>
                        </p>
                    </div>
                </div>
                <h3>TECHNICAL SKILLS:</h3>
                <div className='title-date content'>
                    <p id='skills'>
                        JavaScript, HTML, CSS, Node.js, MERN Stack, Apollo-GraphQL, SQL, jQuery,
                        Responsive Design, Git, Agile Development, Jira, MATLAB
                    </p>
                </div>
            </section>
            
            <div className='button-container'>
                <a href='./resume.pdf' download='Lauren-Lattanzi-Resume.pdf'>
                    <Button 
                        variant='contained' 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button"
                    >
                        Download Resume
                        <DownloadIcon style={{ color: '#ffffff' }} className='icon-open'/>
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default Resume;