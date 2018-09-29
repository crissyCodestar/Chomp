import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';




class BusinessList extends React.Component {

  render() {
    console.log("BL:", this.props.businesses)
    return(
      <div className="BuisnessList">
      {
        this.props.businesses.map(business => (
            <Business key={business.id} business={business}/>

            ))
          }
      </div>
    );
  }
}

export default BusinessList;
