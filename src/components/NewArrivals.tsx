/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Item from "../components/Item"
import flowerLeft from "../../public/assets/img/leftFlower.png"
import flowerRight from "../../public/assets/img/rightFlower.png"

import '../styles/newArrivals.css'

function NewArrivals () {
    return (
        <>
        <div className="title-new-arrivals">
            <img src={flowerRight} alt='flower'/>
                <h2>NEW ARRIVALS</h2>
            <img src={flowerLeft} alt='flower'/>   
        </div>
        <a href="/NEW ARRIVALS" className="see-all-arrivals">See All</a>
        <div className="container-arrivals">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
        </>
    )
}
export default NewArrivals