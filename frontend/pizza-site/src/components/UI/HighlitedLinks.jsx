import React, { useState } from 'react';
import { Link } from 'react-router-dom';

let previousActiveLink = ""

const HighlitedLinks = ({linkInscriptionDictionary, additionalObjects, activeClass, defaultClass, containerClass}) =>{
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

    const active_state = activeClass;

    return (
        <div className={containerClass}>
            {Object.keys(linkInscriptionDictionary).map( (link) => {
                if (additionalObjects[link]) {
                    const CustomComponent = additionalObjects[link];

                    return (

                        <Link 
                            key={link}
                            to={link} 
                            className={`${activeLink === link ? active_state : ''}`}>
                            <CustomComponent 
                            onClick={() => handleLinkClick(link)}
                        onMouseEnter={() => handleLinkEnter(link)}
                        onMouseOut={() => handleLinkOver(link)}/>
                        </Link>
                    )
                }
                else {
                    return (
                        <Link 
                            key={link}
                            to={link}
                            className={`${defaultClass} ${activeLink === link ? active_state : ''}`}
                            onClick={() => handleLinkClick(link)}
                            onMouseEnter={() => handleLinkEnter(link)}
                            onMouseOut={() => handleLinkOver(link)}
                                >
                            {linkInscriptionDictionary[link]}
                        </Link>
                    )
                }
            } )}
        </div>
    );
}   

export default HighlitedLinks;