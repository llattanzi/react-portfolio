(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{78:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(59),c=n.n(i),r=(n(78),n(79),n(8)),o=n(1);var l=function(){return Object(o.jsx)("header",{children:Object(o.jsx)("section",{className:"hero",children:Object(o.jsx)("h1",{children:Object(o.jsx)("a",{href:"/",children:"Lauren Lattanzi"})})})})},d=n.p+"static/media/headshot.e27e02e2.jpg",j=n(111),h=n(115),b=n(114);var p=function(){return Object(o.jsxs)(j.a,{className:"container about-me",component:"section",elevation:6,children:[Object(o.jsx)(b.a,{component:"img",image:d,alt:"Headshot of Lauren looking fabulous",className:"headshot"}),Object(o.jsxs)(h.a,{className:"content-info",children:[Object(o.jsx)("h2",{children:"Who am I?"}),Object(o.jsxs)("p",{children:["I am a Product Development Engineer and Full Stack Web Developer with a passion for knowledge and creativity. I love collaborating on teams and tackling any kind of challenge whether it's learning something completely new or taking a deeper dive into my existing skills. I hope to bring a new creative take and a fresh, innovative perspective into a career as a full stack developer with my experience designing a wide variety of medical devices. As an engineer with an education in Biomedical Engineering and Full Stack Web Development, I welcome and enjoy the challenge of solving complex problems.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"When I'm not coding, I spend my free time weightlifting, creating fitness programs, hiking, skiing, and traveling the world as much as I can. Although, I do love spending a good amount of that free time learning new technologies and working on personal coding projects!"]})]})]})},m=n(113),u=n(64),f=n.n(u),O=[{name:"Roam",description1:"Roam is an app for people who want to travel sustainably. Traveling is great and we love it \u2014 but it also takes a toll on the planet. We wanted to create a fun, user-friendly application so people can travel while being mindful of climate change.",description2:"Users can create an account, create trip itineraries with friends, track expenses and split them at the end of their trip. Users can even offset the carbon emissions from their trip by donating to a charity, all through Roam.",image:n.p+"static/media/project-1.e7d8349c.jpg",technologies:"MongoDb, Express.js, React, Node.js, Apollo-GraphQL, MUI, Stripe API",username:"Katlyn85",password:"otK5YtXpcalD1cm",link:"https://pacific-depths-60618.herokuapp.com/"},{name:"Twitcher",description1:"Twitcher is a website that allows birdwatching aficionados to collab online. Users can view upcoming events, resources for new birders, and a members-only blog where people can write about their birding experiences. The Bird of The Day feature on the homepage displays a new bird each day using API calls.",description2:"",image:n.p+"static/media/project-2.46243e74.jpg",technologies:"Materialize CSS, Node.js, Express, Sequelize, Nodemailer, Handlebars, eBird API, and bcrypt.",link:"https://triangle-twitchers.herokuapp.com/"},{name:"Shop-Shop",description1:"A MERN application for an e-commerce platform that leverages react redux to render a single page web application where users can browse products, add/remove them from a shopping cart, and complete purchases which are all managed using Apollo GraphQL",description2:"",image:n.p+"static/media/project-3.95612768.jpg",technologies:"Node.js, Redux, React, Apollo-GraphQL, Express.js, MongoDB, and Stripe API",link:"https://frozen-beyond-06163.herokuapp.com/"},{name:"The Tech Blog",description1:"A Tech Blog where users can create an account, see blog posts from other users, add comments, and create their own posts from their personal dashboard.",description2:"",image:n.p+"static/media/project-4.2d122cf8.jpg",technologies:"MVC paradigm, Handlebars.js, Sequelize, Express.js, SQL, Node.js, bcrypt, CSS",link:"https://frozen-escarpment-70188.herokuapp.com/"},{name:"Note-Eater",description1:"Note-Eater is a web application that helps musicians learn songs more efficiently with chord sheets and music videos all in one place with a simple search.",description2:"Users can search a music artist or band and see a list of their songs. When a user clicks a song from the list, they can access a link to chord sheets for the song and the corresponding music video is displayed in the browser.",image:n.p+"static/media/project-5.937cb594.png",technologies:"HTML, CSS, JavaScript, YouTube API, Songsterr API",link:"https://foglea10.github.io/Note-Eater/"}];var x=function(){return Object(o.jsx)("section",{id:"project",children:O.map((function(e){return Object(o.jsxs)(j.a,{className:"container",component:"section",elevation:6,children:[Object(o.jsx)(b.a,{component:"img",image:e.image,alt:e.name,className:"project-photo"}),Object(o.jsxs)(h.a,{className:"content-info",children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsx)("p",{children:e.description1}),e.description2&&Object(o.jsx)("p",{children:e.description2}),Object(o.jsx)("h4",{children:"Technologies Used:"}),Object(o.jsx)("p",{children:e.technologies}),Object(o.jsxs)("div",{className:"button-container",children:[e.username&&Object(o.jsxs)("div",{className:"sample",children:[Object(o.jsx)("h4",{children:"Sample log in details:"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Username:"})," ",e.username]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Password:"})," ",e.password]})]}),Object(o.jsxs)(m.a,{variant:"contained",href:e.link,target:"_blank",rel:"noopener noreferrer",className:"button",children:["View Application",Object(o.jsx)(f.a,{style:{color:"#ffffff"},className:"icon-open"})]})]})]})]},e.name)}))})},g=n(4),v=n(50);var w=n(65),y=n.n(w);var k=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(""),c=Object(r.a)(i,2),l=c[0],d=c[1],b=n.name,p=n.email,u=n.message;function f(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);d(t?"":"Your email is invalid.")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."));l||s(Object(v.a)(Object(v.a)({},n),{},Object(g.a)({},e.target.name,e.target.value)))}return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(j.a,{id:"contact",component:"section",elevation:6,children:[Object(o.jsx)("div",{className:"card-head",children:Object(o.jsx)("h2",{children:"Let's get in touch!"})}),Object(o.jsx)(h.a,{children:Object(o.jsxs)("form",{id:"contact-form",className:"gform",method:"POST","data-email":"llattan@ncsu.edu",action:"https://script.google.com/macros/s/AKfycbz4cO6RFKEYwJ3ljq8pxZCleg5U9bh9lu0VyU-hWzqtBKEN2nAWrTzJaxCxbn_U2kec/exec",onSubmit:function(e){if(e.preventDefault(),!Object.values(n).every((function(e){return!!e})))return alert("Failed to submit form. Please fill out all fields."),!1;var t=e.target,a=function(e){var t,n=e.elements,a=Object.keys(n).filter((function(e){return"honeypot"!==n[e].name||(t=n[e].value,!1)})).map((function(e){return void 0!==n[e].name?n[e].name:n[e].length>0?n[e].item(0).name:void 0})).filter((function(e,t,n){return n.indexOf(e)==t&&e})),s={};return a.forEach((function(e){var t=n[e];if(s[e]=t.value,t.length){for(var a=[],i=0;i<t.length;i++){var c=t.item(i);(c.checked||c.selected)&&a.push(c.value)}s[e]=a.join(", ")}})),s.formDataNameOrder=JSON.stringify(a),s.formGoogleSheetName=e.dataset.sheet||"responses",s.formGoogleSendEmail=e.dataset.email||"",{data:s,honeypot:t}}(t),s=a.data;if(a.honeypot)return!1;!function(e){for(var t=e.querySelectorAll("button"),n=0;n<t.length;n++)t[n].disabled=!0}(t);var i=t.action,c=new XMLHttpRequest;c.open("POST",i),c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.onreadystatechange=function(){if(4===c.readyState&&200===c.status){t.reset();var e=t.querySelector(".form-elements");e&&(e.style.display="none");var n=t.querySelector(".thankyou_message");n&&(n.style.display="block")}};var r=Object.keys(s).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(s[e])})).join("&");c.send(r)},children:[Object(o.jsxs)("div",{className:"form-elements",children:[Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("label",{htmlFor:"name",children:"Full Name:"}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:b,onBlur:f})]}),Object(o.jsxs)("fieldset",{children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",name:"email",defaultValue:p,onBlur:f})]}),Object(o.jsxs)("fieldset",{id:"contact-message",children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",rows:"5",defaultValue:u,onBlur:f})]}),Object(o.jsxs)("fieldset",{style:{display:"none"},className:"honeypot-field",children:[Object(o.jsx)("label",{htmlFor:"honeypot",children:"To help avoid spam, utilize a Honeypot technique with a hidden text field; must be empty to submit the form! Otherwise, we assume the user is a spam bot."}),Object(o.jsx)("input",{id:"honeypot",type:"text",name:"honeypot",value:""})]}),l&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:l})}),Object(o.jsx)("div",{className:"button-container",children:Object(o.jsxs)(m.a,{variant:"contained",type:"submit",target:"_blank",rel:"noopener noreferrer",className:"button",children:["Submit Form",Object(o.jsx)(y.a,{style:{color:"#ffffff"},className:"icon-open"})]})})]}),Object(o.jsx)("div",{style:{display:"none"},className:"thankyou_message",children:Object(o.jsx)("h3",{children:"Thanks for your message. I will get back to you soon!"})})]})})]})})},N=n(66),S=n.n(N),C=n(36),A=function(){return Object(o.jsxs)("div",{id:"resume",children:[Object(o.jsx)("h2",{children:"Lauren M. Lattanzi"}),Object(o.jsxs)("section",{id:"details",children:[Object(o.jsx)("p",{children:"Email: Llattan@ncsu.edu"}),Object(o.jsx)("p",{children:"Phone: (631) 235-8775"}),Object(o.jsx)("p",{children:" 120 Saint Albans Dr., Apt 781"}),Object(o.jsx)("p",{children:"Raleigh, NC 27609"})]}),Object(o.jsxs)("section",{className:"resume-sections",children:[Object(o.jsx)("h3",{children:"OBJECTIVE:"}),Object(o.jsx)("div",{className:"content",children:Object(o.jsx)("p",{children:"Seeking a full-time software position where I can leverage both my front-end and back-end development skills to enhance functionality of a product."})}),Object(o.jsx)("h3",{children:"EXPERIENCE:"}),Object(o.jsxs)("div",{className:"title-date content",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"R&D Engineer"}),Object(o.jsx)("i",{children:"Blur Product Development"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"September 2018 - Present"}),Object(o.jsx)("i",{children:"Cary, North Carolina"})]})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Owned the development and testing of complex data processing algorithms in MATLAB for implementation in wearable medical device firmware."}),Object(o.jsx)("li",{children:"Leveraged OOP in MATLAB and interpreted firmware written in C to optimize code compatibility and conversion from the development/test environment in MATLAB to production firmware."}),Object(o.jsx)("li",{children:"Extensively tested the algorithms and associated mobile application in simulated use and V&V testing environments to bring the device to successful clinical trials."}),Object(o.jsx)("li",{children:"Solely responsible for processing and analyzing all data collected from the app and wearable device logs during clinical trials to assess product performance, study user behaviors, and identify issues/potential improvements."}),Object(o.jsx)("li",{children:"Worked closely with the app and firmware developers to communicate bugs, solutions, and functions necessary to interface with the algorithm."}),Object(o.jsx)("li",{children:"Used GitLab and GitKraken for source control and issue tracking."}),Object(o.jsx)("li",{children:"Followed agile development practices and project management using Jira."})]}),Object(o.jsx)("h3",{children:"PROJECTS:"}),Object(o.jsxs)("div",{className:"title-date content",children:[Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"Roam"})}),Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"July 2022 - Present"})})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Created an interactive MERN stack single-page application that allows users to create trip itineraries with friends, split expenses, and offset carbon emissions."}),Object(o.jsx)("li",{children:"Leveraged Apollo GraphQL with an Express.js server and Mongoose ODM to query and manipulate a MongoDB database containing user, trip, and expense data."}),Object(o.jsx)("li",{children:"Implemented a carbon offsetting feature where users can donate to a variety of charities using Stripe API to complete payments."}),Object(o.jsx)("li",{children:"Built a responsive front end using React, Material UI, and custom CSS."}),Object(o.jsx)("li",{children:"Incorporated user authentication middleware using JWT to selectively limit site experience to logged in users and protect API routes."})]}),Object(o.jsxs)("div",{className:"title-date content",children:[Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"Twitcher"})}),Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"May 2022"})})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Built a full stack web app to serve as a bird watching blog for the local community."}),Object(o.jsx)("li",{children:"Developed the back-end in Node.js following OOP and the MVC paradigm with the use of Express, MySQL, and Sequelize ORM."}),Object(o.jsx)("li",{children:"Created a front-end with Materialize CSS framework, HTML generated with handlebars.js, and JavaScript for event handlers and requests to internal APIs."}),Object(o.jsx)("li",{children:"Created RESTful web APIs in Node.js to get, edit, delete and add blog posts, comments, and users stored in SQL database which were tested using Insomnia."}),Object(o.jsx)("li",{children:"Implemented user authentication with password hashing to protect API routes."})]}),Object(o.jsx)("h3",{children:"EDUCATION:"}),Object(o.jsxs)("div",{className:"title-date content",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"NC State University and UNC Chapel Hill"}),Object(o.jsx)("i",{children:"B.S., Biomedical and Health Sciences Engineering"})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"May 2018"}),"GPA: 3.7"]})]}),Object(o.jsx)("div",{id:"ed-2",children:Object(o.jsxs)("div",{className:"title-date content",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Full Stack Coding Bootcamp"}),Object(o.jsx)("i",{children:"UNC Chapel Hill"})]}),Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:"February 2022 \u2013 July 2022"})})]})}),Object(o.jsx)("h3",{children:"TECHNICAL SKILLS:"}),Object(o.jsx)("div",{className:"title-date content",children:Object(o.jsx)("p",{id:"skills",children:"JavaScript, HTML, CSS, Node.js, MERN Stack, Apollo-GraphQL, SQL, jQuery, Responsive Design, Git, Agile Development, Jira, MATLAB"})})]}),Object(o.jsx)("div",{className:"button-container",children:Object(o.jsx)(C.b,{to:"%PUBLIC_URL%/assets/resume.pdf",target:"_blank",download:"Lauren-Lattanzi-Resume.pdf",children:Object(o.jsxs)(m.a,{variant:"contained",target:"_blank",rel:"noopener noreferrer",className:"button",children:["Download Resume",Object(o.jsx)(S.a,{style:{color:"#ffffff"},className:"icon-open"})]})})})]})},I=n(67),L=n.n(I),E=n(68),P=n.n(E),T=function(){return Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"footer-container",children:[Object(o.jsxs)("a",{href:"https://github.com/llattanzi",children:[Object(o.jsx)(L.a,{style:{color:"#ffffff"},className:"icons"}),Object(o.jsx)("p",{children:"GitHub"})]}),Object(o.jsxs)("a",{href:"https://www.linkedin.com/in/lauren-lattanzi/",children:[Object(o.jsx)(P.a,{style:{color:"#ffffff"},className:"icons"}),Object(o.jsx)("p",{children:"LinkedIn"})]}),Object(o.jsx)("a",{href:"https://stackoverflow.com/users/17769864/lauren-lattanzi",children:Object(o.jsx)("p",{children:"Stack Overflow"})})]})})},R=n(52),M=n(69),B=n(110),z=n(116),D=n(6);var U=function(){var e,t=["About","Portfolio","Resume","Contact"],n=Object(D.f)();switch(Object(D.e)().pathname){case"/Portfolio":e=1;break;case"/Resume":e=2;break;case"/Contact":e=3;break;default:e=0}var s=function(e){var t=Object(a.useState)(e),n=Object(r.a)(t,2),s=n[0],i=n[1],c=Object(a.useRef)(),o=Object(a.useRef)(!1);Object(a.useEffect)((function(){return o.current=!0,function(){o.current=!1}}),[]),Object(a.useEffect)((function(){c.current&&c.current(s)}),[s]);var l=Object(a.useCallback)((function(e){return new Promise((function(t){o.current&&(c.current=t,i(e))}))}),[]);return[s,l]}(e),i=Object(r.a)(s,2),c=i[0],l=i[1],d=function(){var e=Object(M.a)(Object(R.a)().mark((function e(a,s){var i;return Object(R.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(s);case 2:i=e.sent,n("/".concat(t[i]));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"nav-tabs",children:Object(o.jsx)(B.a,{value:c,onChange:d,textColor:"inherit",className:"tab-list",TabIndicatorProps:{style:{backgroundColor:"#ffffff"}},children:t.map((function(e,t){return Object(o.jsx)(z.a,{value:t,label:e,className:"tab"},e)}))})})};var F=function(){var e=Object(a.useState)("About"),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(o.jsxs)(C.a,{children:[Object(o.jsx)(l,{handlePageChange:s,currentPage:n}),Object(o.jsx)(U,{}),Object(o.jsx)("main",{className:"main-content",children:Object(o.jsxs)(D.c,{children:[Object(o.jsx)(D.a,{path:"/",element:Object(o.jsx)(p,{})}),Object(o.jsx)(D.a,{path:"/react-portfolio",element:Object(o.jsx)(p,{})}),Object(o.jsx)(D.a,{path:"/About",element:Object(o.jsx)(p,{})}),Object(o.jsx)(D.a,{path:"/Portfolio",element:Object(o.jsx)(x,{})}),Object(o.jsx)(D.a,{path:"/Resume",element:Object(o.jsx)(A,{})}),Object(o.jsx)(D.a,{path:"/Contact",element:Object(o.jsx)(k,{})})]})}),Object(o.jsx)(T,{})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(F,{})}),document.getElementById("root")),J()}},[[86,1,2]]]);
//# sourceMappingURL=main.869a18cb.chunk.js.map