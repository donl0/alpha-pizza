import { Link } from 'react-router-dom';


const HighlitedLinks = ({linkInscriptionDictionary, additionalObjects,  containerClass, handleLinkClick, handleLinkEnter, handleLinkOver, getActiveLinksAdditionalComopnent, getActiveDefaultLinks}) =>{
    return (
        <div className={containerClass}>
            {Object.keys(linkInscriptionDictionary).map( (link) => {
                if (additionalObjects[link]) {
                    const CustomComponent = additionalObjects[link]["layout"];

                    return (
                        <Link 
                            key={link}
                            to={link} 
                            className={getActiveLinksAdditionalComopnent(link)}
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
                            className={getActiveDefaultLinks(link)}
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