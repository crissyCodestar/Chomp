import React, { Component } from 'react';
import './Ratings.css';

const Ratings =({reviewCount, rating, review}) => {


    let stars = []
    let remainder = rating % 1
    for(let i = 1; i <= 5; i++){
      let classRating = "star_rating";

      if(rating >= i && rating !== null){
        classRating += 'star_rating full_star'
      }
    {/*  if(remainder > 0){
        classRating += 'star_rating half_star'
      }*/}

      stars.push(
        <label className={classRating} key={i}>
          ★
        </label>
      )

    }
    return(
      <div>
        {stars} {reviewCount} {!!review ? "Reviews" : ""}
      </div>
    )

}

export default Ratings;
