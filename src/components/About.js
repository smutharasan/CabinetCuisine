// About.js

import React from "react";
import Footer from "./Footer";

const TeamMember = ({ name, role, bio }) => (
  <div className="team-member">
    <h3 style={{ fontWeight: 'bold', fontSize: '1.5em', marginBottom: '0.3em' }}>{name}</h3>
    <p style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '0.3em' }}>{role}</p>
    <p style={{ fontSize: '1.1em', fontFamily: 'Arial, sans-serif', marginBottom: '1em' }}>{bio}</p>
  </div>
);

const About = () => (
  <div className="about-container">
    <header style={{ marginBottom: '20px' }}>
      <h1 style={{ fontSize: '3.0em', fontWeight: 'bold' }}>About Us</h1>
    </header>
    <div className="team-container">
      <TeamMember
        name="Rabia Chattha"
        role="Second-year Computer Science Student"
        bio="Rabia Chattha is a dedicated second-year computer science student who excels in problem-solving and algorithmic thinking. Her proficiency in React JS, coupled with a strong foundation in backend technologies, allows her to contribute effectively to our projects. Rabia is committed to delivering robust and efficient solutions."
      />

      <TeamMember
        name="Zara Farukh"
        role="Second-year Computer Science Student"
        bio="Zara Farukh is a passionate second-year computer science student with a keen interest in web development. Her curiosity about cutting-edge technologies and commitment to excellence make her a valuable member of our team. Zara specializes in front-end development using React JS, creating seamless and interactive user interfaces."
      />

      <TeamMember
        name="Rosie Khurmi"
        role="Second-year Computer Science Student"
        bio="Bringing creativity and attention to detail, Rosie collaborates seamlessly with peers to develop visually appealing and intuitive applications using React JS."
      />

      <TeamMember
        name="Supriya Mutharasan"
        role="Fourth-year Computer Science Student"
        bio="As a seasoned fourth-year student, Supriya provides mentorship and expertise, taking a leadership role in guiding projects to successful completion using React JS and full-stack development."
      />
    </div>
    <Footer />
  </div>
);

export default About;
