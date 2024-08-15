import React, { useState } from 'react';
import classes from './Header.module.css';
import HighlitedLinks from '../HighlitedLinks';

const showObjects = {
    "/page": "",
    "/menu": "MENU",
    "/restaurant" : "RESTAURANT",
    "/offer": "OFFER YOUR PIZZA"
}

const additionalObjects = {
    "/page" : {
        layout: () => { 
            return <img src="/header/Badge.png" alt="Badge" className={classes.headerImage} />},
        activeClass: `${classes.headerImage_active}`,
        baseClass: `${classes.headerImage}`
                    
    }
}

const Header = () => {
    return (
        <div className={classes.header}>
            <HighlitedLinks linkInscriptionDictionary={showObjects} 
            additionalObjects={additionalObjects} 
            activeClass={classes.textContainer__text_active}
            defaultClass={`${classes.textContainer__text} ${classes.text}`} 
            containerClass={classes.textContainer}></HighlitedLinks>
        </div>
    );
};

export default Header;
