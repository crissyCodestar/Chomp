import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

const apiKey ='d22VAAFnffpCl8jh9z2KhwG2rtqoKlpGdactYnGvHSwq1b-3KPci5QSB6ufj9544xuhWAr2sbH0PlRgABBseVA7_xR0mdJXqRxZ5oXwyQ4A7DUE2PJrI-uFvBR9wWnYx';

const businessLink = (id)=>{
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${id}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then(response =>{
    return response.json()
  }).then(jsonResponse => {
    console.log(jsonResponse)
  })

}

class businessProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      businesses:[]
    }
  }





  render(){
    return(
        <div>
        <Switch>
        <Route path='/businesses/:id' component={Yelp.businessLink}/>

      </Switch>
      </div>
    )
  }

}
// <Route exact path='/businesses' render={this.renderBusinesses}/>


export default businessProfile;
