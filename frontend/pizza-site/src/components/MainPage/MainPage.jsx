import LastOrdersCaptionList from '../LastOrdersCaptionList/LastOrdersCaptionList';
import classes from './MainPage.module.css'
import Motto from '../motto/Motto'
import SiteInfo from '../siteInfo/SiteInfo'
import SiteInfoAdvertisingBlock from '../siteInfoAdvertisingBlock/SiteInfoAdvertisingBlock'

const MainPage = () => {
    return (
        <div className={classes.MainContainer}>
            <SiteInfoAdvertisingBlock></SiteInfoAdvertisingBlock>
            <LastOrdersCaptionList>Last Orders</LastOrdersCaptionList>
            <Motto></Motto>
            <SiteInfo></SiteInfo>
        </div>
)

}

export default MainPage;