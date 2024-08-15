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

    function getActiveLinksAdditionalComopnent(link){
        return `${additionalObjects[link]["baseClass"]} ${activeLink === link ? additionalObjects[link]["activeClass"] : ''}`;
    }

    function getActiveDefaultLinks(link){
        return `${defaultClass} ${activeLink === link ? activeClass : ''}`;
    }

    return (
    <HighlitedLinks 
        linkInscriptionDictionary={linkInscriptionDictionary} 
        additionalObjects={additionalObjects} 
        containerClass={containerClass}
        handleLinkClick={handleLinkClick}
        handleLinkEnter={handleLinkEnter}
        handleLinkOver={handleLinkOver}
        getActiveLinksAdditionalComopnent={getActiveLinksAdditionalComopnent}
        getActiveDefaultLinks={getActiveDefaultLinks}/>)
}

export default HideOnNewChoseLinks;