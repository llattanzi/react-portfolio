import React from 'react';

function Project() {
    return (
      <section>
        <h2 id="work">Projects</h2>
        <div className="content-info">
            <a id="project-1" className="project" href="https://pacific-depths-60618.herokuapp.com/">
                <div className="project-text">
                    <h3>Roam</h3>
                    <h4>MongoDb, Express.js, React, Node.js, Apollo-GraphQL, MUI</h4>
                </div>
            </a>

            <a id="project-5" className="project" href="https://triangle-twitchers.herokuapp.com/">
                <div className="project-text">
                    <h3>Twitcher</h3>
                    <h4>CSS, JavaScript, Node.js, Handlebars.js, MySQL</h4>
                </div>
            </a>

            <a id="project-3" className="project"  href="https://llattanzi.github.io/run-buddy/">
                <div className="project-text">
                    <h3>Run Buddy</h3>
                    <h4>HTML/CSS</h4>
                </div>    
            </a>

            <a id="project-2" className="project" href="https://llattanzi.github.io/robot-gladiators/">
                <div className="project-text">
                    <h3>Robot Gladiators</h3>
                    <h4>JavaScript</h4>
                </div>
            </a>

            <a id="project-4" className="project" href="https://foglea10.github.io/Note-Eater/">
                <div className="project-text">
                    <h3>Note Eater</h3>
                    <h4>HTML, CSS, JavaScript</h4>
                </div>
            </a>
        </div>
      </section>
    );
}
  
export default Project;