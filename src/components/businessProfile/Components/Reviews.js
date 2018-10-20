import React from 'react';
import Ratings from '../../SmartComponents/Ratings';
import './Reviews.css'

const Reviews = ({review, date}) => (
  <div className='review' key={review.id}>
    <div className='review_photo'>
      <img src={review.user.image_url} alt="" /> <p>{review.user.name}</p>
    </div>
    <div className='review_comment'>
      <Ratings rating={review.rating} />
      <p>{new Date(date).toLocaleString().slice(0,9)}</p>
      <p>{review.text}</p>
    </div>
</div>
);

export default Reviews;
