import styles from './SiteAdvertising.module.css'

import { useNavigate } from 'react-router-dom';

import PinkFadeActionButton from '../Buttons/FadeActionButton/pinkFadeActionButton/PinkFadeActionButton';

const SiteAdvertising = () => {
    const navigate = useNavigate();

    const orderPizzaAction = () => {
        const menu = "/menu";
        navigate(menu);
    }

    const handleLearnMoreClick = () => {
        const element = document.getElementById('middleMotto');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={styles.containerAdv}>
        <p className={styles.containerAdv__callToAction}>
            Order only best pizza
        </p>
        <p className={styles.containerAdv__callToAction_less}>
        Satisfy all your desiers. We open 24 hour per day.
        </p>
        <div className={styles.buttons_container}>
            <PinkFadeActionButton clickAction={orderPizzaAction}>Order</PinkFadeActionButton>
            <PinkFadeActionButton clickAction={handleLearnMoreClick}>Learn more</PinkFadeActionButton>

        </div>
    </div>
    );
    
}

export default SiteAdvertising;