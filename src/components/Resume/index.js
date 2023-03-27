import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from 'react-router-dom';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import Button from '@mui/material/Button';

const Resume = () => {
    return (
        <div id='resume'>
            <h2>Lauren M. Lattanzi</h2>
            <section id='details'>
                <p>Email: Llattanzi714@gmail.com</p>
                <p>Phone: (631) 235-8775</p>
                <p>805 Ambergate Sta.</p>
                <p>Apex, NC 27502</p>
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
                        <b>Software Engineer</b>
                        <i>Ultralinq Healthcare Solutions</i>
                    </p>
                    <p>
                        <b>Sept 2022 - Present</b>
                        <i>Morrisville, North Carolina</i>
                    </p>
                </div>
                <ul>
                    <li>
                        Responsible for new feature development and bug fixes for both the front and back
                        end of the web application.
                    </li>
                    <li>
                        Part of a team focusing on converting much of the current PHP backend to a
                        separate Kotlin application.
                    </li>
                    <li>
                        Fixing bugs and addressing user concerns and new feature requests with existing
                        PHP and HTML/JS legacy code.
                    </li>
                    <li>
                        Restructured the legacy user auth process to facilitate AWS Cognito and SSO
                        implementation.
                    </li>
                    <li>
                        Following provided OpenAPI documentation and communicating with the UI
                        developers to create REST APIs that suit their requirements and desired format.
                    </li>
                    <li>
                        Building REST APIs in Kotlin with Spring Boot and JPA along with Hibernate and
                        Javax validation. Writing unit tests in Spring Boot for all controllers and services.
                    </li>
                    <li>
                        Working with AWS to upload and retrieve media files from S3 and debug various
                        servers with CloudWatch.
                    </li>
                    <li>
                        Following agile development practices with Jira, Confluence, and Bitbucket.
                    </li>
                </ul>
                <div className='title-date content'>
                    <p>
                        <b>Full-stack Web Developer</b>
                        <i>Paperless Fundraisers LLC</i>
                    </p>
                    <p>
                        <b>Aug 2022 - Oct 2022</b>
                        <i>Remote - Part Time Contracting</i>
                    </p>
                </div>
                <ul>
                    <li>
                        Developed front and back end features of an e-commerce website for fundraisers
                        using TypeScript, Next.js, React, Redux, Prisma, Supabase, and Material UI.
                    </li>
                    <li>
                        Created API routes and CRUD calls to communicate between the React side of the
                        app and the database with information regarding sales, employees, customers,
                        orders, products, and companies.
                    </li>
                    <li>
                        Designed and implemented functional UIs for several pages in React with Material
                        UI components for capturing user input and displaying data retrieved from internal
                        and external APIs.
                    </li>
                </ul>
                <div className='title-date content'>
                    <p>
                        <b>R&D Engineer</b>
                        <i>Blur Product Development</i>
                    </p>
                    <p>
                        <b>Sept 2018 - Sept 2022</b>
                        <i>Cary, North Carolina</i>
                    </p>
                </div>
                <ul>
                    <li>
                        Owned the development and testing of complex data processing
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
                        <b>July 2022 - Aug 2022</b>
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
                        GPA: 3.7
                    </p>
                </div>
                <div id='ed-2'>
                    <div className='title-date content'>
                        <p>
                            <b>Full Stack Coding Bootcamp</b>
                            <i>UNC Chapel Hill</i>
                        </p>
                        <p>
                            <b>Feb 2022 – July 2022</b>
                            <p>Grade: 100</p>
                        </p>
                    </div>
                    <div id='ed-info' class='title-date content'>
                        <p>
                            Completed an intensive coding program that teaches industry leading front end and
                            back end technologies to become a full stack web developer. The program focuses
                            on the following topics:
                        </p>
                        <ul>
                            <li>
                                JavaScript computer science - algorithms and data structures
                            </li>
                            <li>
                                Browser-based technologies - HTML/CSS, jQuery, responsive design,
                                bootstrap, handlebars, local and session storage, indexedDB, and React
                            </li>
                            <li>
                                Databases - MySQL, MongoDB, NoSQL, and Apollo-GraphQL
                            </li>
                            <li>
                                Server side development - User auth, PWAs, and MERN stack
                            </li>
                            <li>
                                API interaction - CRUD methods, RESTful development
                            </li>
                        </ul>
                    </div>
                </div>
                <h3>LANGUAGES:</h3>
                <div className='title-date content'>
                    <p id='languages'>
                        JavaScript, TypeScript, PHP, Kotlin, HTML, CSS, MATLAB
                    </p>
                </div>
                <h3>TECHNICAL SKILLS:</h3>
                <div className='title-date content'>
                    <p id='skills'>
                        Spring Boot, Java Persistence API, Node.js, Next.js, React, Redux, MongoDB,
                        Express.js, Apollo-GraphQL, SQL, jQuery, Responsive Design, AWS, Unit Testing,
                        Hibernate and Javax validation, IntelliJ IDEA, VS Code, DataGrip, Docker, Git,
                        Atlassian Stack, Agile Development
                    </p>
                </div>
            </section>
            
            <div className='button-container'>
                <Link to='%PUBLIC_URL%/assets/resume.pdf' target='_blank' download='Lauren-Lattanzi-Resume.pdf'>
                    <Button 
                        variant='contained' 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button"
                    >
                        Download Resume
                        <DownloadIcon style={{ color: '#ffffff' }} className='icon-open'/>
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Resume;