import HighlitedLinks from "./HighlitedLinks";
import React, { useState } from 'react';

let previousActiveLink = ""

const HideOnNewChoseLinks = ({linkInscriptionDictionary, additionalObjects, activeClass, defaultClass, containerClass}) =>{
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

    return (
    <HighlitedLinks 
        linkInscriptionDictionary={linkInscriptionDictionary} 
        additionalObjects={additionalObjects} 
        activeClass={activeClass}
        defaultClass={defaultClass} 
        containerClass={containerClass}
        activeLink={activeLink}
        handleLinkClick={handleLinkClick}
        handleLinkEnter={handleLinkEnter}
        handleLinkOver={handleLinkOver}/>)
}

export default HideOnNewChoseLinks;