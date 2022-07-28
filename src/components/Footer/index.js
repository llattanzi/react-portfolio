import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <a href="https://github.com/llattanzi">
                <GitHubIcon style={{ color: '#ffffff'}} className="icons"/>
                <p>
                    GitHub
                </p>
            </a>

            <a href="https://www.linkedin.com/in/lauren-lattanzi/">
                <LinkedInIcon style={{ color: '#ffffff' }} className="icons" />
                <p>
                    LinkedIn
                </p>
            </a>

            <a href="https://stackoverflow.com/users/17769864/lauren-lattanzi">
                <p>
                    Stack Overflow
                </p>
            </a>
        </div>
    </footer>
  );
};

export default Footer;
