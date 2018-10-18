import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import BusinessProfileInfo from './BusinessProfileInfo';
import SearchBar from '../SearchBar/SearchBar';
import Loading from '../SmartComponents/Loading';
import Yelp from '../../util/Yelp';


class BusinessProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      businessInfo: [],
      reviews: [],
      businessLoading: true,
    }

  }


  componentDidMount(){
    let id = this.props.match.params.id
    Yelp.businessLink(id).then(businessInfo => {
      this.setState({ businessInfo: businessInfo, businessLoading: false})
    });
    Yelp.businessReviews(id).then(req => {
      this.setState({ reviews: req })
    });
  }





  render(){
    return this.state.businessLoading ? (
      <div>
          <Loading />
      </div>

    ) : (
      <div>
        <BusinessProfileInfo businessInfo={this.state.businessInfo} reviewsList={this.state.reviews}/>
      </div>
    )
  }

}



export default BusinessProfile;
