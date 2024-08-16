import LastOrdersCaptionList from '../../LastOrdersCaptionList/LastOrdersCaptionList';
import SiteInfoAdvertisingBlock from '../siteInfoAdvertisingBlock/SiteInfoAdvertisingBlock';
import classes from './MainPage.module.css'

const MainPage = () => {
    return (
        <div className={classes.MainContainer}>
            <SiteInfoAdvertisingBlock></SiteInfoAdvertisingBlock>
            <LastOrdersCaptionList>Last Orders</LastOrdersCaptionList>
        </div>
)

}

export default MainPage;