import { useEffect, useState } from 'react';
import useReviews from '../../hooks/useReviews';
import restaurant from '../../images/restaurant.jpeg';
import CustomLink from '../CustomLink/CustomLink';
import HomePgReview from '../HomePgReview/HomePgReview';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const [revs, setRevs] = useState([]);


    useEffect(() => {
        if (reviews.length > 0) {
            const displayReviews = [];
            const selectedIndex = [];
            for (let revCount = 1; revCount <= 3; revCount++) {
                let randomIndex;
                while (1) {
                    randomIndex = Math.round(Math.random(reviews.length - 1) * (reviews.length - 1));
                    if (selectedIndex.indexOf(randomIndex) === -1) {
                        selectedIndex.push(randomIndex);
                        break;
                    }
                }
                displayReviews.push(reviews[randomIndex]);
            }

            console.log(reviews);
            console.log(displayReviews);
            setRevs(displayReviews);
        }
    }, [reviews]);

    return (
        <div>
            <div className='restaurant-img-description-container'>
                <div className='restaurant-description'>
                    <h1 style={{ color: 'purple', fontSize: 'xxx-large' }}>The Express Inn</h1>
                    <h1>Taste For Your Soul</h1>
                    <p>This place will end your search for supremely delicious food.The greenaries around the inn and we the express inn members are waiting to serve you with the excellent food for your soul.</p>
                    <CustomLink to='/about'><button>Visit Now</button></CustomLink>
                </div>

                <div className='restaurant-img'>
                    <img src={restaurant} alt="" />
                </div>
            </div>

            <div className="customers-review-container">
                <h1 style={{ color: 'purple', fontSize: 'xx-large', marginTop: '35px' }}>Customer Reviews(3)</h1>
                {
                    revs.map(rev => <HomePgReview
                        key={rev.id}
                        rev={rev}></HomePgReview>)
                }

                <CustomLink to='/reviews'><button>Show All Reviews</button></CustomLink>
            </div>
        </div>
    );
};

export default Home;