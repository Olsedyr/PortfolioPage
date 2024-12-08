import React from 'react';
import '../styles/Footer.css'; // CSS-stilark for footer

const Footer = () => {
    return (
        <section id="contact" className="footer">
            <h2>Contact Info:</h2>
            <div className="contact-info">
                <div className="left-column">
                    <p>
                        <strong>Email:</strong> <a href="mailto:olsoe21@student.sdu.dk">olsoe21@student.sdu.dk</a>
                    </p>
                    <p>
                        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/oliver-sørensen-868635339" target="_blank" rel="noopener noreferrer">Oliver Sørensen</a>
                    </p>
                </div>
                <div className="middle-column">
                    <p>
                        <strong>Location:</strong> Denmark, Odense
                    </p>
                </div>
                <div className="right-column">
                    <p>
                        <strong>Primary Language:</strong> Danish
                    </p>
                    <p>
                        <strong>Secondary Language:</strong> English
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Footer;