import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

const apiKey ='d22VAAFnffpCl8jh9z2KhwG2rtqoKlpGdactYnGvHSwq1b-3KPci5QSB6ufj9544xuhWAr2sbH0PlRgABBseVA7_xR0mdJXqRxZ5oXwyQ4A7DUE2PJrI-uFvBR9wWnYx';



class businessProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      businesses:[]
    }
  }





  render(){
    console.log(this.businesses)
    return(
        <div>
            Busniness Profile 
        </div>
    )
  }

}
// <Route exact path='/businesses' render={this.renderBusinesses}/>


export default businessProfile;
