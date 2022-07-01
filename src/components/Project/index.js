import React from 'react';

function Project() {
    return (
      <section>
        <h2 id="work">Projects</h2>
        <div class="content-info">
            <a id="project-5" class="project" href="https://triangle-twitchers.herokuapp.com/">
                <div class="project-text">
                    <h3>Twitcher</h3>
                    <h4>CSS, JavaScript, Node.js, Handlebars.js, MySQL</h4>
                </div>
            </a>
            <a id="project-1" class="project"  href="https://llattanzi.github.io/run-buddy/">
                <div class="project-text">
                    <h3>Run Buddy</h3>
                    <h4>HTML/CSS</h4>
                </div>    
            </a>

            <a id="project-2" class="project" href="https://llattanzi.github.io/robot-gladiators/">
                <div class="project-text">
                    <h3>Robot Gladiators</h3>
                    <h4>JavaScript</h4>
                </div>
            </a>

            <a id="project-3" class="project" href="">
                <div class="project-text">
                    <h3>Password Calculator</h3>
                    <h4>JavaScript</h4>
                </div>
            </a>

            <a id="project-4" class="project" href="https://foglea10.github.io/Note-Eater/">
                <div class="project-text">
                    <h3>Note Eater</h3>
                    <h4>HTML, CSS, JavaScript</h4>
                </div>
            </a>
        </div>
      </section>
    );
}
  
export default Project;