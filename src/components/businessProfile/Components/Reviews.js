import React from 'react';
import Ratings from '../../SmartComponents/Ratings';

const Reviews = ({review, date}) => (
  <div>


          <div>
            <div>
                <img src={review.user.image_url} alt="" /> <p>{review.user.name}</p>
            </div>
          </div>
          <div key={review.id}>
              <Ratings rating={review.rating} />
              <p>{new Date(date).toLocaleString().slice(0,9)}</p>
              <p>{review.text}</p>
          </div>


  </div>
);

export default Reviews;
