import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

let previousActiveLink = ""

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);

    
    const handleLinkClick = (link) => {
        previousActiveLink = activeLink
        setActiveLink(link)
    };

    const handleLinkEnter = (link) => {
        setActiveLink(link)
    };

    const handleLinkOver = (link) => {
        if (previousActiveLink !== link) {
            setActiveLink(previousActiveLink);
        }
    };

    const active_state = classes.active;

    return (
        <div className={classes.header}>
            <Link to="/page" className={classes.headerImageLink}>
                <img src="/header/Badge.png" className={`${classes.headerImage} ${activeLink === 'page' ? active_state : ''}`} alt="Badge" 
                onClick={() => handleLinkClick('page')}
                onMouseEnter={() => handleLinkEnter('page')}
                onMouseOut={() => handleLinkOver('page')}/>
            </Link>
            <div className={classes.textContainer}>
                <Link 
                    to="/menu"
                    className={`${classes.textContainer__text} ${classes.text} ${activeLink === 'menu' ? active_state : ''}`}
                    onClick={() => handleLinkClick('menu')}
                    onMouseEnter={() => handleLinkEnter('menu')}
                    onMouseOut={() => handleLinkOver('menu')}
                >
                    MENU
                </Link>
                <Link 
                    to="/restaurants"
                    className={`${classes.textContainer__text} ${classes.text} ${activeLink === 'restaurants' ? active_state : ''}`}
                    onClick={() => handleLinkClick('restaurants')}
                    onMouseEnter={() => handleLinkEnter('restaurants')}
                    onMouseOut={() => handleLinkOver('restaurants')}
                >
                    RESTAURANTS
                </Link>
                <Link 
                    to="/offer"
                    className={`${classes.textContainer__text} ${classes.text} ${activeLink === 'offer' ? active_state : ''}`}
                    onClick={() => handleLinkClick('offer')}
                    onMouseEnter={() => handleLinkEnter('offer')}
                    onMouseOut={() => handleLinkOver('offer')}
                >
                    OFFER YOUR PIZZA
                </Link>
            </div>
        </div>
    );
};

export default Header;
