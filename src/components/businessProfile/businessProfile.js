import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import BusinessProfileInfo from './BusinessProfileInfo';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';


class businessProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      businessInfo: [],
      reviews: [],
    }

  }


  componentDidMount(){
    let id = this.props.match.params.id
    Yelp.businessLink(id).then(businessInfo => {
      this.setState({ businessInfo: businessInfo })
    });
    Yelp.businessReviews(id).then(req => {
      this.setState({ reviews: req })
    });
  }





  render(){
    // console.log("this is REWVIES info", this.state.reviews)
    return(
        <div>
          <BusinessProfileInfo businessInfo={this.state.businessInfo} reviewsList={this.state.reviews}/>
        </div>
    )
  }

}



export default businessProfile;
