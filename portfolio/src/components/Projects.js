import React from 'react';
import '../styles/Projects.css'; // CSS stylesheet for projects

// Import project images
import project1Image1 from '../images/component.drawio.png';
import project1Image2 from '../images/semest4.png';
import project2Image1 from '../images/mobileLofi.png';
import project2Image2 from '../images/mobileapp.png';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="project">
                <div className="project-images">
                    <img src={project1Image1} alt="Project 1 Image 1" />
                    <img src={project1Image2} alt="Project 1 Image 2" />
                </div>
                <div className="project-text">
                    <h3>Warehouse Automation System</h3>
                    <p>
                        The primary goal of this system was to address practical challenges in industrial automation by applying the theoretical knowledge taught in courses on component-based software engineering and cyber-physical systems.
                    </p>
                    <p>
                        The production process consisted of several steps, all of which required communication between systems using different protocols taught in the course "Software Technology in Cyber-Physical Systems":
                    </p>
                    <ul>
                        <li><strong>Parts Request:</strong> Parts are requested from the automated warehouse using the SOAP protocol.</li>
                        <li><strong>Transportation:</strong> The REST protocol is used by the Automated Guided Vehicle (AGV) to deliver parts to the assembly station.</li>
                        <li><strong>Assembly:</strong> Skateboard parts are assembled by the assembly station using the MQTT publish/subscribe protocol.</li>
                        <li><strong>Storage:</strong> The AGV delivers the completed skateboards back to the warehouse for storage.</li>
                    </ul>
                    <p>
                        The simulated environment provided a platform for remote development and testing, facilitating the development of a functional system.
                    </p>
                </div>
            </div>
            <div className="project">
                <div className="project-images">
                    <img src={project2Image1} alt="Project 2 Image 1" />
                    <img src={project2Image2} alt="Project 2 Image 2" />
                </div>
                <div className="project-text">
                    <h3>Car Booking System</h3>
                    <p>
                        In this project, we developed an iOS application with React Native where users could book a car and view their previous bookings. The application was designed to be user-friendly and intuitive, focusing on a seamless booking experience.
                    </p>
                    <p>
                        I was responsible for developing the profile page, where the logged-in user could see their current bookings as well as their previous car bookings. The profile page included features such as:
                    </p>
                    <ul>
                        <li><strong>Overview of current bookings:</strong> Users could easily see details of their active bookings, including car model, pick-up, and drop-off dates.</li>
                        <li><strong>History of previous bookings:</strong> A complete list of previous bookings, allowing users to review their booking history.</li>
                    </ul>
                    <p>
                        This project allowed me to apply my skills in frontend development and UX design, resulting in a functional and attractive application that significantly improved the user experience.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Projects;