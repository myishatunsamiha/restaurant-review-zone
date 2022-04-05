import React, { useEffect, useState } from 'react';
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
                <p><strong>Rating:</strong> {rating}</p>
            </div>
        </div>
    );
};

export default HomePgReview;