import React from 'react';
import '../styles/About.css'; // CSS stylesheet for About

// Import images
import profilePic from '../images/profilePic.png'; // Ensure this path is correct
import reactLogo from '../images/react-logo.png';
import reactNativeLogo from '../images/react-logo.png';
import javascriptLogo from '../images/javascript-logo.png';
import javaLogo from '../images/java-logo.png';
import pythonLogo from '../images/python-logo.png';
import cssLogo from '../images/css-logo.png';
import htmlLogo from '../images/html-logo.png';
import restApiLogo from '../images/rest-api-logo.png';
import agileLogo from '../images/agile-logo.png';
import scrumLogo from '../images/scrum-logo.png';
import testsLogo from '../images/tests-logo.png';
import githubLogo from '../images/github-logo.png';
import expoLogo from '../images/expo-logo.png';
import springbootLogo from '../images/springboot-logo.png';
import sqlLogo from '../images/sql-logo.png';
import laravelLogo from '../images/laravel-logo.png';
import LibreCAD from '../images/LibreCAD.png';
import MachineExpert from '../images/MachineExpert.jpg';
import Support from '../images/Support.png';
import TechnicalDocumentation from '../images/TechnicalDocumentation.png';
import VijeoDesigner from '../images/VijeoDesigner.jpg';

const techStack = [
    { name: 'React', src: reactLogo },
    { name: 'React Native', src: reactNativeLogo },
    { name: 'JavaScript', src: javascriptLogo },
    { name: 'Java', src: javaLogo },
    { name: 'Python', src: pythonLogo },
    { name: 'CSS', src: cssLogo },
    { name: 'HTML', src: htmlLogo },
    { name: 'REST API', src: restApiLogo },
    { name: 'Agile Development', src: agileLogo },
    { name: 'Scrum', src: scrumLogo },
    { name: 'Tests', src: testsLogo },
    { name: 'Git/Github', src: githubLogo },
    { name: 'Expo', src: expoLogo },
    { name: 'SpringBoot', src: springbootLogo },
    { name: 'SQL', src: sqlLogo },
    { name: 'Laravel', src: laravelLogo },
    {name: 'LibreCad', src: LibreCAD},
    {name: 'MachineExpert', src: MachineExpert},
    {name: 'Support', src: Support},
    {name: 'TechnicalDocumentation', src: TechnicalDocumentation},
    {name: 'VijeoDesigner', src: VijeoDesigner}
];

const About = () => {
    return (
        <section id="home" className="about">
            <div className="about-header">
                <div className="about-text">
                    <h1>Oliver Holbech Sørensen</h1>
                    <h2>Software Developer</h2>
                </div>
                <img src={profilePic} alt="Oliver Holbech Sørensen" className="profile-pic" />
            </div>
            <p>
                Software student at the University of Southern Denmark with a strong passion for developing innovative and user-friendly digital solutions. Through my studies and projects, I have gained extensive experience in frontend development, UX design, and modern web technologies. I thrive in dynamic work environments where I can contribute with my "can-do" attitude and problem-solving skills.
            </p>

            <div className="tech-stack">
                <h2>Tech Stack:</h2>
                <ul>
                    {techStack.map((tech) => (
                        <li key={tech.name}>
                            <img src={tech.src} alt={tech.name} />
                            {tech.name}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default About;