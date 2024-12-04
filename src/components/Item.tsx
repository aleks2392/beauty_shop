/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import '../styles/item.css'
import cream from '../../public/assets/img/aqua.png'
import {Button} from '../ui/Button'

function Item () {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={cream} alt="Soft Finish Product" />
                <button className="wishlist-btn">❤️</button>
            </div>
            <div className="product-info">
                <h3 className="product-name">Soft Finish</h3>
                <p className="product-description">All Around Safe Block Sun Milk SPF50+/PA++</p>
                <p className="product-price">$25</p>
                <Button className="add-to-bag-btn" onClick={() => {alert("added to cart")}}>Add To Cart</Button>
            </div>
        </div>
    )
}

export default Item



