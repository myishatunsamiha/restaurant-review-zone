import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './HomePgReview.css';

const HomePgReview = (props) => {
    const { rev } = props;
    const { name, img, review, rating } = rev;


    return (
        <div className='review-container'>
            <div className='img-container'>
                <img src={img} alt='/'></img>
            </div>
            <div className='detail-container'>
                <p><strong>Posted By:</strong> {name}</p>
                <p><strong>Review:</strong> {review}</p>
                <p><strong>Rating:</strong> <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating></p>

            </div>
        </div>
    );
};

export default HomePgReview;