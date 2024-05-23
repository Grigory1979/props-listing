interface ItemProps {
    item: Props
}

export interface Props {
    url: string,
    title: string,
    MainImage: {
        url_570xN: string
    },
    currency_code: string,
    price: string,
    quantity: number

}

const ListingItem = ({item}: ItemProps) => {
    let { url, title, MainImage, currency_code, price, quantity} = item
    
    let itemPrice;
    
    function quantityLevel() {
        if(quantity < 10) {
            return 'level-low'
        }
        if(quantity <= 20){
            return 'level-medium'
        }
        return 'level-high'
    }
    if(currency_code === 'USD') {
        itemPrice = '$' + price;
    } else if(currency_code === 'EUR') {
        itemPrice =  '€' + price
    } else {
        itemPrice =  price + currency_code;
    }
    
   

    let itemTitle = title.length > 50 ? `${title.slice(0, 50)}...` : title;

    return (
        <>
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage.url_570xN}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{itemTitle}</p>
                <p className="item-price">{itemPrice}</p>
                <p className={`item-quantity ${quantityLevel()}`}>{quantity} left</p>
            </div>
        </>
    )
}

export default ListingItem;