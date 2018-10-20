import React, { Component } from 'react';
import './Ratings.css';

class Ratings extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    let stars = []
    let remainder = this.props.rating % 1
    for(let i = 1; i <= 5; i++){
      let classRating = "star_rating";

      if(this.props.rating >= i && this.props.rating !== null){
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
        {stars}
      </div>
    )
  }
}

export default Ratings;
