import React, { useState } from 'react';
import { Link } from 'react-router-dom';

let previousActiveLink = ""

const HighlitedLinks = ({linkInscriptionDictionary, additionalObjects}) =>{
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

    const active_state = "active";

    return (
        <div className='container'>
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
                            className={`textContainer__text text ${activeLink === link ? active_state : ''}`}
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