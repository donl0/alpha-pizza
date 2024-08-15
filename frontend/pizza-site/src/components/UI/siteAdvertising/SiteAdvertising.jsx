import PinkFadeActionButton from '../Buttons/FadeActionButton/PinkFadeActionButton';
import styles from './SiteAdvertising.module.css'

const SiteAdvertising = () => {
    return (
        <div className={styles.containerAdv}>
        <p className={styles.containerAdv__callToAction}>
            Order only best pizza
        </p>
        <p className={styles.containerAdv__callToAction_less}>
        Satisfy all your desiers. We open 24 hour per day.
        </p>
        <div className={styles.buttons_container}>
            <PinkFadeActionButton>Order</PinkFadeActionButton>
            <PinkFadeActionButton>Learn more</PinkFadeActionButton>

        </div>
    </div>
    );
    
}

export default SiteAdvertising;