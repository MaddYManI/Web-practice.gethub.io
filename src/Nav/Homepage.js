import './Hompage.css'
import restaurantfood from './restauranfood.jpg'
import greeksalad from './greek salad.jpg'
import bruchetta from './bruchetta.png'
import lemon_dessert from './lemon dessert.jpg'
import bike_image from './bike image.png'
import Footer from '../Footer';
import Testimonals from './Testimonals'


function Homepage () {
    return(
        <body>
            <div className='hero'>
                <label className='textfont'>
                    <h1 className='textstyle'>Little Lemon</h1>
                    <h3 className='textcity'>Chicago</h3>
                    <p className='lines'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                    <button type="button" className='button'>Reserve a table</button>
                </label>
                <img src={restaurantfood} alt ="Restaurantfood" className='overlay' />
            </div>
            <label className='Orderdelivery'>Order for delivery</label>
            <ul className='menuslider'>
                <li><button type='button' className='slidercontent'>Lunch</button></li>
                <li><button type='button' className='slidercontent'>Mains</button></li>
                <li><button type='button' className='slidercontent'>Desserts</button></li>
                <li><button type='button' className='slidercontent'>A La Carte</button></li>
                <li><button type='button' className='slidercontent'>Specials</button></li>
                <li><button type='button' className='slidercontent'>Weekends</button></li>
            </ul>
            <div className='highlights'>
                <h1 className='specialfoods'>Special</h1>
                <button type='button' className='online_button'>Online order</button>
                <img src={greeksalad} alt ="Greek Salad" className='highlight-cards-top1' />
                <label className='highlight-cards-bottom1'>
                    <h3 className='dishname'>Greek salad</h3>
                    <h3 className='dishprice'>$12.55</h3>
                    <p className='dishdescription'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <h3 className='outfordelivery'>Order a delivery</h3>
                    <img src={bike_image} alt ="Bike Image" className='bikeimage' />
                </label>
                <img src={bruchetta} alt ="Bruchetta" className='highlight-cards-top2' />
                <label className='highlight-cards-bottom2'>
                    <h3 className='dishname'>Bruchetta</h3>
                    <h3 className='dishprice'>$5.99</h3>
                    <p className='dishdescription'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <h3 className='outfordelivery'>Order a delivery</h3>
                    <img src={bike_image} alt ="Bike Image" className='bikeimage' />
                </label>
                <img src={lemon_dessert} alt ="Lemon Dessert" className='highlight-cards-top3' />
                <label className='highlight-cards-bottom3'>
                    <h3 className='dishname'>Lemon Dessert</h3>
                    <h3 className='dishprice'>$5.00</h3>
                    <p className='dishdescription'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <h3 className='outfordelivery'>Order a delivery</h3>
                    <img src={bike_image} alt ="Bike Image" className='bikeimage' />
                </label>
            </div>
            <Testimonals/>
            <Footer/>
        </body>
    )
}
export default Homepage;