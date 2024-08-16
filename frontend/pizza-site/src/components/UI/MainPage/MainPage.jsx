import LastOrdersCaptionList from '../../LastOrdersCaptionList/LastOrdersCaptionList';
import Motto from '../../motto/Motto';
import SiteInfoAdvertisingBlock from '../siteInfoAdvertisingBlock/SiteInfoAdvertisingBlock';
import classes from './MainPage.module.css'

const MainPage = () => {
    return (
        <div className={classes.MainContainer}>
            <SiteInfoAdvertisingBlock></SiteInfoAdvertisingBlock>
            <LastOrdersCaptionList>Last Orders</LastOrdersCaptionList>
            <Motto></Motto>
        </div>
)

}

export default MainPage;