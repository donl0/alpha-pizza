import React, { useState } from 'react';
import classes from './Header.module.css';
import ActiveOnClickAndEnterHighlitedLinks from '../UI/HighlitedLinks/ActiveOnClickAndEnterHighlitedLinks'

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
           <ActiveOnClickAndEnterHighlitedLinks linkInscriptionDictionary={showObjects} 
           additionalObjects={additionalObjects} 
           activeClass={classes.textContainer__text_active}
           defaultClass={`${classes.textContainer__text} ${classes.text}`} 
           containerClass={classes.textContainer}/>
       </div>
    );
};

export default Header;
