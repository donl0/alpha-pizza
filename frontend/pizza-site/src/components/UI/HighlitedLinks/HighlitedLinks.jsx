import { Link } from 'react-router-dom';


const HighlitedLinks = ({linkInscriptionDictionary, additionalObjects, activeClass, defaultClass, containerClass, activeLink, handleLinkClick, handleLinkEnter, handleLinkOver}) =>{
    return (
        <div className={containerClass}>
            {Object.keys(linkInscriptionDictionary).map( (link) => {
                if (additionalObjects[link]) {
                    const CustomComponent = additionalObjects[link]["layout"];

                    return (
                        <Link 
                            key={link}
                            to={link} 
                            className={`${additionalObjects[link]["baseClass"]} ${activeLink === link ? additionalObjects[link]["activeClass"] : ''}`}
                            onClick={() => handleLinkClick(link)}
                            onMouseEnter={() => handleLinkEnter(link)}
                            onMouseOut={() => handleLinkOver(link)}
                            >
                            <CustomComponent/>
                        </Link>
                    )
                }
                else {
                    return (
                        <Link 
                            key={link}
                            to={link}
                            className={`${defaultClass} ${activeLink === link ? activeClass : ''}`}
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