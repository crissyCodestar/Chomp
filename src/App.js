import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';
import businessProfile from './components/businessProfile/businessProfile'
import Home from './components/Home/Home'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      businesses:[]
    }

    this.searchYelp = this.searchYelp.bind(this)
  }


  searchYelp(term, location, sortBy) {
     Yelp.search(term, location, sortBy).then(businesses => {
       this.setState({businesses: businesses});
     });
  }

  renderSearch = () =>{
    return (
      <div>

    <div>
      <Home />
      </div>
      </div>
    )

  }

  renderBusinesses =()=>{
  return (
    <div>

    <BusinessList businesses={this.state.businesses} />
  </div>
    )
  }


  render() {
    return (
    <div>
    <div className="App">
    <Link to='/'><h1 className="header">Chomp</h1></Link>
    <SearchBar searchYelp={this.searchYelp} />

  </div>
    <Switch>
      <Route exact path='/' render={this.renderSearch} />
      <Route path='/businesses' render={this.renderBusinesses} />
    </Switch>
    </div>
    );
  }
}


export default App;
