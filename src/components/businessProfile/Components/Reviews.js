import React from 'react';
import Ratings from '../../Suggestions/SuggestionCards/Ratings';

const Reviews = ({reviewsList}) => (
  <div>
      {console.log(reviewsList)}
      <h1>Suggested Reviews</h1>
      {reviewsList.map(review => (
          <div key={review.id}>
              <Ratings rating={review.rating} />
              <p>{review.text}</p>
          </div>
      ))}
  </div>
);

export default Reviews;
