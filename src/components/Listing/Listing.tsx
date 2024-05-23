// import './Listing.css'
import ListingItem from '../ListingItem/ListingItem'

const Listing = ({items}) => {
    const activeItems = items.filter(it => it.state === 'active');
    console.log(items)
    return (
        <div className="item-list">
            {activeItems.map(item => {
                return (
                    <div className="item" key={item.listing_id}>
                        <ListingItem item = {item} />
                    </div>
                )
            })}
        </div>
    )
}

Listing.defaultProps = {
    items: []
}

export default Listing