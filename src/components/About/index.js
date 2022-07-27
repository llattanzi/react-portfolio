import React from 'react';
import headshot from '../../assets/images/headshot.jpg';

function About() {
  return (
    <section className='container'>
      <img src={headshot} alt="Headshot of Lauren looking fabulous" />
      <div className="content-info">
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium distinctio enim dolorem excepturi maiores vero iusto, 
            quia illum unde tempore sunt necessitatibus nemo qui hic? Sit ipsam ab eius nobis.
            <br /><br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit laborum ipsum amet assumenda sapiente quasi adipisci sit 
            eaque velit repellendus, soluta nesciunt tempore dicta recusandae doloribus consequatur quis? Maxime, beatae!
        </p>
      </div>
    </section>
  );
}

export default About;