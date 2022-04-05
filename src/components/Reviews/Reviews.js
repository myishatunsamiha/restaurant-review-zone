import React from 'react';
import useReviews from '../../hooks/useReviews';
import HomePgReview from '../HomePgReview/HomePgReview';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div style={{ marginTop: '30px' }}>
            {
                reviews.map(rev => <HomePgReview
                    key={rev.id}
                    rev={rev}></HomePgReview>)
            }
        </div>
    );
};

export default Reviews;