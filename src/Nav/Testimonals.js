import './Testimonals.css'
import star_image from './star_img.png'
import user_img_1 from '../Assets/user_img_1.png'
import user_img_2 from '../Assets/user_img_2.png'
import user_img_3 from '../Assets/user_img_3.png'
import user_img_4 from '../Assets/user_img_4.png'


function Testimonals(){

    const testimonal_values = [{user_name: "Taylor", user_star: 4, user_img: user_img_1, user_review: "Amazing restaurant for dates!"},
    {user_name: "Tanya", user_star: 4, user_img: user_img_2, user_review: "Definitely try for dinners :)"},
    {user_name: "Brandon", user_star: 4, user_img: user_img_3, user_review: "Good roof top place!"},
    {user_name: "Stacy", user_star: 5, user_img: user_img_4, user_review: "Customized food menus for occasions!"},]

    return (
        <div className='testimonals_ctn'>
            <h1>Testimonals</h1>
            <div className='user_ctn'>
                {testimonal_values.map((e)=>(
                    <div className='user_single_ctn'>
                        <div className='user_review_ctn'>
                            <h4 className='user_review_number'>{e.user_star}</h4>
                            <img src={star_image} className='user_review_star'/>
                        </div>
                        <div className='user_details_ctn'>
                            <img src={e.user_img} className='user_details_img'/>
                            <h4 className='user_details_name'>{e.user_name}</h4>
                        </div>
                        <h4 className='user_review_text'>{e.user_review}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Testimonals;