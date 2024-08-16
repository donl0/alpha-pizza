import OrangeCaption from "../UI/Caption/OrangeCaption"
import styles from './Motto.module.css';

const Motto = () =>{
    return (
        <div>
            <div className={styles.mottoContainer}>
                    <OrangeCaption >Our Motto</OrangeCaption>
                </div>
            
            <div className={styles.mottosContainer}>
            <span>Eat you want</span>
            <span>Satisfy your most perverse tastes</span>
            <span>Make our chevos suffer.</span>
            </div>
        </div>
        
    )
}

export default Motto;