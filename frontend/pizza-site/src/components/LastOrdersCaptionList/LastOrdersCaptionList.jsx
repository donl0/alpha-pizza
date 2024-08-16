import OrangeCaption from "../UI/Caption/OrangeCaption"
import styles from './LastOrdersCaptionList.module.css';

const LastOrdersCaptionList = ({children}) => {
    return (
        <div className={styles.container}>
            <OrangeCaption>{children}</OrangeCaption>
        </div>
    );
}

export default LastOrdersCaptionList;