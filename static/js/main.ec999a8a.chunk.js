(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{78:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(59),s=n.n(c),r=(n(78),n(79),n(8)),o=n(1);var l=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("section",{className:"hero",children:Object(o.jsx)("h1",{children:Object(o.jsx)("a",{href:"/",children:"Lauren Lattanzi"})})})})},d=n.p+"static/media/headshot.e27e02e2.jpg",j=n(112),h=n(116),b=n(115);var p=function(){return Object(o.jsxs)(j.a,{className:"container about-me",component:"section",elevation:6,children:[Object(o.jsx)(b.a,{component:"img",image:d,alt:"Headshot of Lauren looking fabulous",className:"headshot"}),Object(o.jsxs)(h.a,{className:"content-info",children:[Object(o.jsx)("h2",{children:"Who am I?"}),Object(o.jsxs)("p",{children:["I am a Product Development Engineer and Full Stack Web Developer with a passion for knowledge and creativity. I love collaborating on teams and tackling any kind of challenge whether it's learning something completely new or taking a deeper dive into my existing skills. I hope to bring a new creative take and a fresh, innovative perspective into a career as a full stack developer with my experience designing a wide variety of medical devices. As an engineer with an education in Biomedical Engineering and Full Stack Web Development, I welcome and enjoy the challenge of solving complex problems.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"When I'm not coding, I spend my free time weightlifting, creating fitness programs, hiking, skiing, and traveling the world as much as I can. Although, I do love spending a good amount of that free time learning new technologies and working on personal coding projects!"]})]})]})},m=n(114),u=n(64),f=n.n(u),O=[{name:"Roam",description1:"Roam is an app for people who want to travel sustainably. Traveling is great and we love it \u2014 but it also takes a toll on the planet. We wanted to create a fun, user-friendly application so people can travel while being mindful of climate change.",description2:"Users can create an account, create trip itineraries with friends, track expenses and split them at the end of their trip. Users can even offset the carbon emissions from their trip by donating to a charity, all through Roam.",image:n.p+"static/media/project-1.e7d8349c.jpg",technologies:"MongoDb, Express.js, React, Node.js, Apollo-GraphQL, MUI, Stripe API",link:"https://pacific-depths-60618.herokuapp.com/"},{name:"Twitcher",description1:"Twitcher is a website that allows birdwatching aficionados to collab online. Users can view upcoming events, resources for new birders, and a members-only blog where people can write about their birding experiences. The Bird of The Day feature on the homepage displays a new bird each day using API calls.",description2:"",image:n.p+"static/media/project-2.46243e74.jpg",technologies:"Materialize CSS, Node.js, Express, Sequelize, Nodemailer, Handlebars, eBird API, and bcrypt.",link:"https://triangle-twitchers.herokuapp.com/"},{name:"Shop-Shop",description1:"A MERN application for an e-commerce platform that leverages react redux to render a single page web application where users can browse products, add/remove them from a shopping cart, and complete purchases which are all managed using Apollo GraphQL",description2:"",image:n.p+"static/media/project-3.95612768.jpg",technologies:"Node.js, Redux, React, Apollo-GraphQL, Express.js, MongoDB, and Stripe API",link:"https://frozen-beyond-06163.herokuapp.com/"},{name:"The Tech Blog",description1:"A Tech Blog where users can create an account, see blog posts from other users, add comments, and create their own posts from their personal dashboard.",description2:"",image:n.p+"static/media/project-4.2d122cf8.jpg",technologies:"MVC paradigm, Handlebars.js, Sequelize, Express.js, SQL, Node.js, bcrypt, CSS",link:"https://frozen-escarpment-70188.herokuapp.com/"},{name:"Note-Eater",description1:"Note-Eater is a web application that helps musicians learn songs more efficiently with chord sheets and music videos all in one place with a simple search.",description2:"Users can search a music artist or band and see a list of their songs. When a user clicks a song from the list, they can access a link to chord sheets for the song and the corresponding music video is displayed in the browser.",image:n.p+"static/media/project-5.937cb594.png",technologies:"HTML, CSS, JavaScript, YouTube API, Songsterr API",link:"https://foglea10.github.io/Note-Eater/"}];var g=function(){return Object(o.jsx)("section",{id:"project",children:O.map((function(e){return Object(o.jsxs)(j.a,{className:"container",component:"section",elevation:6,children:[Object(o.jsx)(b.a,{component:"img",image:e.image,alt:e.name,className:"project-photo"}),Object(o.jsxs)(h.a,{className:"content-info",children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsx)("p",{children:e.description1}),Object(o.jsx)("p",{children:e.description2}),Object(o.jsx)("h4",{children:"Technologies Used:"}),Object(o.jsx)("p",{children:e.technologies}),Object(o.jsx)("div",{className:"button-container",children:Object(o.jsxs)(m.a,{variant:"contained",href:e.link,target:"_blank",rel:"noopener noreferrer",className:"button",children:["View Application",Object(o.jsx)(f.a,{style:{color:"#ffffff"},className:"icon-open"})]})})]})]},e.name)}))})},x=n(4),v=n(50);var w=n(65),y=n.n(w);var k=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(""),s=Object(r.a)(c,2),l=s[0],d=s[1],b=n.name,p=n.email,u=n.message;function f(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),d(t?"":"Your email is invalid.")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."));l||i(Object(v.a)(Object(v.a)({},n),{},Object(x.a)({},e.target.name,e.target.value)))}return Object(o.jsxs)(j.a,{id:"contact",component:"section",elevation:6,children:[Object(o.jsx)("div",{className:"card-head",children:Object(o.jsx)("h2",{children:"Let's get in touch!"})}),Object(o.jsx)(h.a,{children:Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(n)},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Full Name:"}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:b,onBlur:f})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:p,onBlur:f})]}),Object(o.jsxs)("div",{id:"contact-message",children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:u,onBlur:f})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("div",{className:"button-container",children:Object(o.jsxs)(m.a,{variant:"contained",type:"submit",target:"_blank",rel:"noopener noreferrer",className:"button",children:["Submit Form",Object(o.jsx)(y.a,{style:{color:"#ffffff"},className:"icon-open"})]})})]})})]})},N=n(66),S=n.n(N),A=n(36),C=function(){return Object(o.jsxs)("div",{id:"resume",children:[Object(o.jsx)("h2",{children:"Lauren M. Lattanzi"}),Object(o.jsxs)("section",{id:"details",children:[Object(o.jsx)("p",{children:"Email: Llattan@ncsu.edu"}),Object(o.jsx)("p",{children:"Phone: (631) 235-8775"}),Object(o.jsx)("p",{children:" 120 Saint Albans Dr., Apt 781"}),Object(o.jsx)("p",{children:"Raleigh, NC 27609"})]}),Object(o.jsxs)("section",{className:"resume-sections",children:[Object(o.jsx)("h3",{children:"OBJECTIVE:"}),Object(o.jsx)("div",{className:"content",children:Object(o.jsx)("p",{children:"Seeking a full-time software position where I can leverage both my front-end and back-end development skills to enhance functionality of a product."})}),Object(o.jsx)("h3",{children:"EXPERIENCE:"}),Object(o.jsxs)("div",{className:"title-date content",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"R&D Engineer"}),Object(o.jsx)("i",{children:"Blur Product Development"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"September 2018 - Present"}),Object(o.jsx)("i",{children:"Cary, North Carolina"})]})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Owned the development and testing of complex data processing algorithms in MATLAB for implementation in wearable medical device firmware."}),Object(o.jsx)("li",{children:"Leveraged OOP in MATLAB and interpreted firmware written in C to optimize code compatibility and conversion from the development/test environment in MATLAB to production firmware."}),Object(o.jsx)("li",{children:"Extensively tested the algorithms and associated mobile application in simulated use and V&V testing environments to bring the device to successful clinical trials."}),Object(o.jsx)("li",{children:"Solely responsible for processing and analyzing all data collected from the app and wearable device logs during clinical trials to assess product performance, study user behaviors, and identify issues/potential improvements."}),Object(o.jsx)("li",{children:"Worked closely with the app and firmware developers to communicate bugs, solutions, and functions necessary to interface with the algorithm."}),Object(o.jsx)("li",{children:"Used GitLab and GitKraken for source control and issue tracking."}),Object(o.jsx)("li",{children:"Followed agile development practices and project management using Jira."})]}),Object(o.jsx)("h3",{children:"PROJECTS:"}),Object(o.jsxs)("div",{className:"title-date content",children:[Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"Roam"})}),Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"July 2022 - Present"})})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Created an interactive MERN stack single-page application that allows users to create trip itineraries with friends, split expenses, and offset carbon emissions."}),Object(o.jsx)("li",{children:"Leveraged Apollo GraphQL with an Express.js server and Mongoose ODM to query and manipulate a MongoDB database containing user, trip, and expense data."}),Object(o.jsx)("li",{children:"Implemented a carbon offsetting feature where users can donate to a variety of charities using Stripe API to complete payments."}),Object(o.jsx)("li",{children:"Built a responsive front end using React, Material UI, and custom CSS."}),Object(o.jsx)("li",{children:"Incorporated user authentication middleware using JWT to selectively limit site experience to logged in users and protect API routes."})]}),Object(o.jsxs)("div",{className:"title-date content",children:[Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"Twitcher"})}),Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"May 2022"})})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Built a full stack web app to serve as a bird watching blog for the local community."}),Object(o.jsx)("li",{children:"Developed the back-end in Node.js following OOP and the MVC paradigm with the use of Express, MySQL, and Sequelize ORM."}),Object(o.jsx)("li",{children:"Created a front-end with Materialize CSS framework, HTML generated with handlebars.js, and JavaScript for event handlers and requests to internal APIs."}),Object(o.jsx)("li",{children:"Created RESTful web APIs in Node.js to get, edit, delete and add blog posts, comments, and users stored in SQL database which were tested using Insomnia."}),Object(o.jsx)("li",{children:"Implemented user authentication with password hashing to protect API routes."})]}),Object(o.jsx)("h3",{children:"EDUCATION:"}),Object(o.jsxs)("div",{className:"title-date content",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"NC State University and UNC Chapel Hill"}),Object(o.jsx)("i",{children:"B.S., Biomedical and Health Sciences Engineering"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"May 2018"}),"GPA: 3.7"]})]}),Object(o.jsx)("div",{id:"ed-2",children:Object(o.jsxs)("div",{className:"title-date content",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Full Stack Coding Bootcamp"}),Object(o.jsx)("i",{children:"UNC Chapel Hill"})]}),Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"February 2022 \u2013 July 2022"})})]})}),Object(o.jsx)("h3",{children:"TECHNICAL SKILLS:"}),Object(o.jsx)("div",{className:"title-date content",children:Object(o.jsx)("p",{id:"skills",children:"JavaScript, HTML, CSS, Node.js, MERN Stack, Apollo-GraphQL, SQL, jQuery, Responsive Design, Git, Agile Development, Jira, MATLAB"})})]}),Object(o.jsx)("div",{className:"button-container",children:Object(o.jsx)(A.b,{to:"./resume.pdf",target:"_blank",download:"Lauren-Lattanzi-Resume.pdf",children:Object(o.jsxs)(m.a,{variant:"contained",target:"_blank",rel:"noopener noreferrer",className:"button",children:["Download Resume",Object(o.jsx)(S.a,{style:{color:"#ffffff"},className:"icon-open"})]})})})]})},I=n(67),L=n.n(I),E=n(68),P=n.n(E),M=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"footer-container",children:[Object(o.jsxs)("a",{href:"https://github.com/llattanzi",children:[Object(o.jsx)(L.a,{style:{color:"#ffffff"},className:"icons"}),Object(o.jsx)("p",{children:"GitHub"})]}),Object(o.jsxs)("a",{href:"https://www.linkedin.com/in/lauren-lattanzi/",children:[Object(o.jsx)(P.a,{style:{color:"#ffffff"},className:"icons"}),Object(o.jsx)("p",{children:"LinkedIn"})]}),Object(o.jsx)("a",{href:"https://stackoverflow.com/users/17769864/lauren-lattanzi",children:Object(o.jsx)("p",{children:"Stack Overflow"})})]})})},T=n(52),R=n(69),B=n(111),D=n(117),z=n(6);var F=function(){var e,t=["About","Portfolio","Resume","Contact"],n=Object(z.f)(),i=Object(z.e)();switch(console.log(i.pathname),i.pathname){case"/Portfolio":e=1;break;case"/Resume":e=2;break;case"/Contact":e=3;break;default:e=0}console.log(e);var c=function(e){var t=Object(a.useState)(e),n=Object(r.a)(t,2),i=n[0],c=n[1],s=Object(a.useRef)(),o=Object(a.useRef)(!1);Object(a.useEffect)((function(){return o.current=!0,function(){o.current=!1}}),[]),Object(a.useEffect)((function(){s.current&&s.current(i)}),[i]);var l=Object(a.useCallback)((function(e){return new Promise((function(t){o.current&&(s.current=t,c(e))}))}),[]);return[i,l]}(e),s=Object(r.a)(c,2),l=s[0],d=s[1],j=function(){var e=Object(R.a)(Object(T.a)().mark((function e(a,i){var c;return Object(T.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(i);case 2:c=e.sent,console.log(c),console.log(t[c]),n("/".concat(t[c]));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"nav-tabs",children:Object(o.jsx)(B.a,{value:l,onChange:j,textColor:"inherit",className:"tab-list",TabIndicatorProps:{style:{backgroundColor:"#ffffff"}},children:t.map((function(e,t){return Object(o.jsx)(D.a,{value:t,label:e,className:"tab"},e)}))})})};var J=function(){var e=Object(a.useState)("About"),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(o.jsxs)(A.a,{children:[Object(o.jsx)(l,{handlePageChange:i,currentPage:n}),Object(o.jsx)(F,{}),Object(o.jsx)("main",{className:"main-content",children:Object(o.jsxs)(z.c,{children:[Object(o.jsx)(z.a,{path:"/",element:Object(o.jsx)(p,{})}),Object(o.jsx)(z.a,{path:"/react-portfolio",element:Object(o.jsx)(p,{})}),Object(o.jsx)(z.a,{path:"/About",element:Object(o.jsx)(p,{})}),Object(o.jsx)(z.a,{path:"/Portfolio",element:Object(o.jsx)(g,{})}),Object(o.jsx)(z.a,{path:"/Resume",element:Object(o.jsx)(C,{})}),Object(o.jsx)(z.a,{path:"/Contact",element:Object(o.jsx)(k,{})})]})}),Object(o.jsx)(M,{})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,118)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(J,{})}),document.getElementById("root")),U()}},[[86,1,2]]]);
//# sourceMappingURL=main.ec999a8a.chunk.js.map