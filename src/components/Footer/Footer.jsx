import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer>
            <div>
                <p>LunaMarket - Todo para tu hogar</p>
                <p>Encuéntranos en nuestras redes sociales:</p>
                <div>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-x"></i>
                    </a>
                </div>
                <p>&copy; {new Date().getFullYear()} LunaMarket. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;