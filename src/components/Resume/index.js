import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Resume = () => {
  return (
    <div id="resume">
      <h2>Lauren M. Lattanzi</h2>
      <section id="details">
        <p>Email: Llattanzi714@gmail.com</p>
        <p>Phone: (631) 235-8775</p>
        <p>1033 Manorhaven Dr.</p>
        <p>Durham, NC 27703</p>
      </section>
      <section className="resume-sections">
        <h3>OBJECTIVE:</h3>
        <div className="content">
          <p>
            Seeking a full-time software development role to leverage my
            expertise in full-stack web development, driving product innovation
            and enhancing user experience
          </p>
        </div>
        <h3>EXPERIENCE:</h3>
        <div className="title-date content">
          <p>
            <b>Senior Software Engineer</b>
            <b>Software Engineer</b>
            <i>Ultralinq Healthcare Solutions</i>
          </p>
          <p>
            <b>Jan 2024 - Present</b>
            <b>Sept 2022 - Jan 2024</b>
            <i>Morrisville, North Carolina</i>
          </p>
        </div>
        <ul>
          <li>
            Responsible for new feature development and bug fixes for the
            full-stack of a cloud-based web application that provides clinicians
            access to medical images, DICOM viewer, patient data and reporting
            tools.
          </li>
          <li>
            Lead developer on a project implementing a full redesign of the
            entire web app, including converting the outdated frontend (PHP,
            HTML, YUI, JavaScript) to a modern React TypeScript architecture and
            integrating a new Kotlin backend with Spring Boot JPA to replace the
            existing PHP backend.
          </li>
          <li>
            Implementing Figma designs provided by design contractors in React
            with Chakra UI, while also creating original designs for additional
            features and pages.
          </li>
          <li>
            Frequently communicating with management and QA to clarify design
            intent, discuss roadblocks and feature improvements, and present
            weekly updates with live demos.
          </li>
          <li>
            Developing REST API routes in Kotlin with Spring Boot and JPA along
            with Hibernate and Javax validation for handling requests from the
            React UI.
          </li>
          <li>
            Integrated third-party AI technology for processing and interpreting
            ultrasound images by creating API routes in Kotlin for streaming
            DICOM and JSON data and displaying results in a viewer built in
            Angular.
          </li>
          <li>
            Ensuring appropriate test coverage with Jest and Cypress for the
            frontend and Spring MVC Tests for the backend unit tests, while also
            utilizing Postman for testing API routes.
          </li>
          <li>
            Assisting in the integration of AWS services, including
            authentication with Cognito, SSO, and MFA, and media file upload and
            retrieval with S3.
          </li>
          <li>
            Utilizing AWS for investigating, diagnosing, and resolving build
            deployment and ECS errors following PR merges. Monitoring the status
            and health of code pipelines and deployment builds, while debugging
            errors via CloudWatch container logs in staging and production
            environments and communicating relevant findings to the DevOps team.
          </li>
          <li>
            Using DataGrip along with Tunnelblick VPN to view and interact with
            MySQL databases for all testing and production environments. Writing
            SQL for querying specific customer information and updating or
            creating new tables
          </li>
          <li>
            Following agile development practices with regular team standup
            meetings and utilizing Jira, Confluence, and Bitbucket.
          </li>
          <li>
            Responsible for the creation and management of Jira tickets for
            frontend and backend features/issues, assigning tasks to the
            appropriate team members, and providing guidance to junior
            developers.
          </li>
        </ul>
        <div className="title-date content">
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
            Developed frontend and backend features of an e-commerce website for
            fundraisers using TypeScript, Next.js, React, Redux, Prisma,
            Supabase, and Material UI.
          </li>
          <li>
            Created REST APIs in Next.js using Prisma ORM to manage sales,
            employees, customers, orders, products, and companies stored in a
            Supabase database.
          </li>
          <li>
            Designed and implemented functional UIs for several pages in React
            with Material UI components for capturing user input and displaying
            data retrieved from internal and external APIs.
          </li>
        </ul>
        <div className="title-date content">
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
            Owned the development of complex ostomy leak detection and
            notification algorithms in MATLAB for implementation in wearable
            medical device firmware.
          </li>
          <li>
            Applied OOP in MATLAB and interpreted C firmware to optimize code
            compatibility and transition from the development/test environment
            in MATLAB to production firmware.
          </li>
          <li>
            Extensively tested the algorithms and associated mobile application
            with simulated use and V&V testing protocols to prepare for clinical
            trials.
          </li>
          <li>
            Solely responsible for processing and analyzing all data collected
            from the app and wearable device logs during clinical trials to
            assess product performance, study user behaviors, and identify
            issues/potential improvements.
          </li>
          <li>
            Worked closely with the app and firmware developers to communicate
            bugs, solutions, and functions necessary to interface with the
            algorithms
          </li>
          <li>
            Used GitLab and GitKraken for source control and issue tracking.
          </li>
          <li>
            Followed agile development practices and project management using
            Jira.
          </li>
        </ul>
        <h3>PROJECTS:</h3>
        <div className="title-date content">
          <p>
            <b>Roam</b>
          </p>
          <p>
            <b>July 2022 - Aug 2022</b>
          </p>
        </div>
        <ul>
          <li>
            Created an interactive MERN stack single-page application that
            allows users to create trip itineraries with friends, split
            expenses, and offset carbon emissions.
          </li>
          <li>
            Developed a Node.js backend with Apollo GraphQL and Express.js,
            integrating Mongoose ODM to efficiently query and manipulate a
            MongoDB database managing user, trip, and expense data
          </li>
          <li>
            Built a responsive frontend using React, Material UI, and CSS.
          </li>
          <li>
            Integrated JWT authentication middleware to restrict site access and
            protect API routes
          </li>
        </ul>
        <div className="title-date content">
          <p>
            <b>Twitcher</b>
          </p>
          <p>
            <b>May 2022</b>
          </p>
        </div>
        <ul>
          <li>
            Built a full stack web app to serve as a bird watching blog for the
            local community.
          </li>
          <li>
            Built the backend in Node.js following OOP and MVC principles with
            the use of Express.js, MySQL database, and Sequelize ORM.
          </li>
          <li>
            Designed the frontend with Materialize CSS, Handlebars.js, and
            JavaScript for event handling and API requests.
          </li>
          <li>
            Created RESTful APIs to manage blog posts, comments, and users in a
            SQL database.
          </li>
          <li>Tested and validated API endpoints with Insomnia</li>
        </ul>
        <h3>EDUCATION:</h3>
        <div className="title-date content">
          <p>
            <b>NC State University and UNC Chapel Hill</b>
            <i>B.S., Biomedical and Health Sciences Engineering</i>
          </p>
          <p>
            <b>May 2018</b>
            GPA: 3.7
          </p>
        </div>
        <div id="ed-2">
          <div className="title-date content">
            <p>
              <b>Full Stack Coding Bootcamp</b>
              <i>UNC Chapel Hill</i>
            </p>
            <p>
              <b>Feb 2022 – July 2022</b>
              <p>Grade: 100</p>
            </p>
          </div>
        </div>
        <h3>FRONTEND SKILLS:</h3>
        <div className="title-date content">
          <p class="skills">
            JavaScript, TypeScript, React, Redux, Axios, Jest Testing, Next.js,
            jQuery, HTML, CSS, Chakra UI, Material UI, Ant Design, Bootstrap,
            Handlebars, YUI Library, Responsive Design, Figma, Adobe Express,
            Adobe Illustrator
          </p>
        </div>
        <h3>BACKEND SKILLS:</h3>
        <div className="title-date content">
          <p class="skills">
            REST API Development, Kotlin, Spring Boot, Java Persistence API,
            Hibernate and Javax validation, PHP, SQL, Database Management,
            Node.js, Unit Testing, Model-Repository-Controller-Service
            Architecture, DICOM and JSON data processing, AWS SDK Integration,
            Algorithm Development, Apollo-GraphQL
          </p>
        </div>
        <h3>TOOLS & PLATFORMS:</h3>
        <div className="title-date content">
          <p class="skills">
            VS Code, IntelliJ IDEA, DataGrip, Postman, Docker, Bitbucket, Jira,
            Confluence, GitKraken, GitHub, CLI, Agile Development, AWS (S3, IAM,
            ECS, CloudWatch, CodeDeploy, Systems Manager)
          </p>
        </div>
      </section>

      <div className="button-container">
        <Link
          to="%PUBLIC_URL%/assets/resume.pdf"
          target="_blank"
          download="Lauren-Lattanzi-Resume.pdf"
        >
          <Button
            variant="contained"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Download Resume
            <DownloadIcon style={{ color: "#ffffff" }} className="icon-open" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Resume;
