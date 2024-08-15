import React, { useState } from 'react';
import classes from './Header.module.css';
import HideOnNewChoseLinks from "../HighlitedLinks/HideOnNewChoseLinks";

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
           <HideOnNewChoseLinks linkInscriptionDictionary={showObjects} 
           additionalObjects={additionalObjects} 
           activeClass={classes.textContainer__text_active}
           defaultClass={`${classes.textContainer__text} ${classes.text}`} 
           containerClass={classes.textContainer}/>
       </div>
    );
};

export default Header;
