/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Item from "../components/Item"
import flowerLeft from "../../public/assets/img/leftFlower.png"
import flowerRight from "../../public/assets/img/rightFlower.png"
import '../styles/bestSallers.css'

function BestSallers () {
    return (
        <>
        <div className="title-new-sellers">
            <img src={flowerRight} alt='flower'/>
                <h2>NEW ARRIVALS</h2>
            <img src={flowerLeft} alt='flower'/>   
        </div>
        <a href="/BEST SALLERS" className="see-all-sallers">See All</a>
        <div className="container-sallers">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
        </>
    )
}
export default BestSallers