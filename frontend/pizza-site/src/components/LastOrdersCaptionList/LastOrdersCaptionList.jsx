import OrangeCaption from "../UI/Caption/OrangeCaption"
import LastOrdersList from "../UI/LastOrdersList/LastOrdersList";
import styles from './LastOrdersCaptionList.module.css';

const LastOrdersCaptionList = ({children}) => {
    const pizzas = [{
        name: "pineApple",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    },{
        name: "barkeku",
        image: 'pineApple.png'
    }
    ]

    return (
        <div >
            <div className={styles.container}>
                <OrangeCaption>{children}</OrangeCaption>
            </div>
            <div>
                <LastOrdersList pizzas={pizzas}></LastOrdersList>
            </div>
        </div>
    );
}

export default LastOrdersCaptionList;