import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const active_state = classes.active;

    return (
        <div className={classes.header}>
            <Link to="/page" className={classes.headerImageLink}>
                <img src="/header/Badge.png" className={`${classes.headerImage} ${activeLink === 'page' ? active_state : ''}`} alt="Badge" 
                onClick={() => handleLinkClick('page')}
                onMouseEnter={() => handleLinkClick('page')}/>
            </Link>
            <div className={classes.textContainer}>
                <Link 
                    to="/menu"
                    className={`${classes.textContainer__text} ${classes.text} ${activeLink === 'menu' ? active_state : ''}`}
                    onClick={() => handleLinkClick('menu')}
                    onMouseEnter={() => handleLinkClick('menu')}
                >
                    MENU
                </Link>
                <Link 
                    to="/restaurants"
                    className={`${classes.textContainer__text} ${classes.text} ${activeLink === 'restaurants' ? active_state : ''}`}
                    onClick={() => handleLinkClick('restaurants')}
                    onMouseEnter={() => handleLinkClick('restaurants')}
                >
                    RESTAURANTS
                </Link>
                <Link 
                    to="/offer"
                    className={`${classes.textContainer__text} ${classes.text} ${activeLink === 'offer' ? active_state : ''}`}
                    onClick={() => handleLinkClick('offer')}
                    onMouseEnter={() => handleLinkClick('offer')}
                >
                    OFFER YOUR PIZZA
                </Link>
            </div>
        </div>
    );
};

export default Header;
