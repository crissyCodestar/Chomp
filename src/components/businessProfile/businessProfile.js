import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import BusinessProfileInfo from './BusinessProfileInfo';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';


class businessProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      businessInfo: []
    }

  }


  componentDidMount(){
    let id = this.props.match.params.id
    Yelp.businessLink(id).then(businessInfo => {
      this.setState({ businessInfo: businessInfo })
    });
  }





  render(){
    console.log("this is business info", this.state.businessInfo)
    return(
        <div>
          <BusinessProfileInfo businessInfo={this.state.businessInfo} />
        </div>
    )
  }

}



export default businessProfile;
