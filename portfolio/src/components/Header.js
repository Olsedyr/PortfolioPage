import React, { useEffect } from 'react';
import '../styles/Header.css'; // CSS-stilark for headeren

const Header = () => {
    useEffect(() => {
        let lastScrollTop = 0;
        const header = document.querySelector('.header');

        const handleScroll = () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Scroll down
                header.style.top = '-100px'; // Adjust based on your header height
            } else {
                // Scroll up
                header.style.top = '2%'; // Reset to original position
            }
            lastScrollTop = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <h1>My Portfolio</h1>
            <nav className="nav-links">
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;