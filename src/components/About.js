// About.js
import React from "react";
import Footer from "./Footer";



const TeamMember = ({ name, role, bio }) => (
  <div className="team-member">
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{bio}</p>
    </div>
);
const About = () => (
  <div className="app">
    <h1>About Us</h1>
    <div className="team-container"></div>
      <TeamMember
        name="Rabia Chattha"
        role="Second-year Computer Science Student"
        bio="Rabia Chattha is a dedicated second-year computer science student who excels in problem-solving and algorithmic thinking. Her proficiency in React JS, coupled with a strong foundation in backend technologies, allows her to contribute effectively to our projects. Rabia is committed to delivering robust and efficient solutions."
      />

      <TeamMember
        name="Zara Farukh"
        role="Second-year Computer Science Student"
        bio="Zara Farukh is a passionate second-year computer science student with a keen interest in web development. Her curiosity about cutting-edge technologies and commitment to excellence make her a valuable member of our team. Rabia specializes in front-end development using React JS, creating seamless and interactive user interfaces."
      />

      <TeamMember
        name="Rosie Khurmi"
        image="link-to-image-rosie"
        role="Second-year Computer Science Student"
        bio="Bringing creativity and attention to detail, Rosie collaborates seamlessly with peers to develop visually appealing and intuitive applications using React JS."
      />

      <TeamMember
        name="Supriya Mutharasan"
        image="link-to-image-supriya"
        role="Fourth-year Computer Science Student"
        bio="As a seasoned fourth-year student, Supriya provides mentorship and expertise, taking a leadership role in guiding projects to successful completion using React JS and full-stack development."
      />

      <Footer />
    </div>
  );


export default About;
