import React from 'react';
import './Business.css';
import Yelp from '../../util/Yelp';


class Business extends React.Component {
  constructor(){
    super();

    this.state= {
      business:[]
    }
  }

  getBusinessProfile(id){
    Yelp.businessLink(id).then(business => {
      this.setState({business: business})
    })
  }

  render(){
    const { id,imageSrc, name, address, city, state, zipCode, category, rating, reviewCount} = this.props.business
    return(
      <div className="Business">
<hr />
        <div className="image-container">
          <img src={imageSrc} alt="" />

        </div>
        <div className="vertical_content">
          <h2>{name}</h2>
          <div className="Business-information">
          <div className="Business-reviews">
            <h3>{category.toUpperCase()}</h3>
            <h3 className="rating">{`${rating} stars`} | {`${reviewCount} reviews`}</h3>
          </div>
          <br />
          <div className="Business-address">
            <p>{address}, {city}, {state} {zipCode}</p>
          </div>

          </div>
        </div>
        </div>
    );
  }
}

export default Business;
