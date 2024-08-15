import HighlitedLinks from "./HighlitedLinks";
import React, { useState } from 'react';

const ActiveOnClickAndEnterHighlitedLinks = ({linkInscriptionDictionary, additionalObjects, activeClass, defaultClass, containerClass}) =>{
    const [activeLink, setActiveLink] = useState(null);
    const [chooseActiveLink, setChooseActiveLink] = useState(null);

    const handleLinkClick = (link) => {
        setActiveLink(link)
    };

    const handleLinkEnter = (link) => {
        setChooseActiveLink(link)
    };

    const handleLinkOver = (link) => {
        setChooseActiveLink(null)
    };

    function getActiveLinksAdditionalComopnent(link){
        return `${additionalObjects[link]["baseClass"]} ${((activeLink === link) || (chooseActiveLink === link)) ? additionalObjects[link]["activeClass"] : ''}`;
    }

    function getActiveDefaultLinks(link){
        return `${defaultClass} ${((activeLink === link) || (chooseActiveLink === link)) ? activeClass : ''}`;
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

export default ActiveOnClickAndEnterHighlitedLinks;