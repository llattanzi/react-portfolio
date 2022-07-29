import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';

const Resume = () => {
    return (
        <div>
            <h2>Resume</h2>
            <h3>Front End Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>React</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>Bootstrap</li>
                <li>Materialize</li>
            </ul>
            <h3>Back End Proficiencies</h3>
            <ul>
                <li>Node</li>
                <li>APIs</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>GraphQL</li>
                <li>MongoDB</li>
            </ul>
            {/* add resume download */}
            <button>Download Resume</button>
        </div>
    );
}

export default Resume;