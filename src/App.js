import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';
import businessProfile from './components/businessProfile/businessProfile';
import Home from './components/Home/Home';
import Suggestions from './components/Suggestions/Suggestions';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      businesses:[],
      events: [],
    }

    this.searchYelp = this.searchYelp.bind(this)
  }

  componentDidMount(){
    Yelp.events().then(events => {
      this.setState({events: events})
    })
  }

  searchYelp(term, location, sortBy) {
     Yelp.search(term, location, sortBy).then(businesses => {
       this.setState({businesses: businesses});
     });
  }

  renderSearch = () =>{
    return (
      <div>

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
    console.log(this.state.events)
    return (
    <div>
      <div className="App">
        <Link to='/'><h1 className="header">Chomp</h1></Link>
        <SearchBar searchYelp={this.searchYelp} />
    </div>
    <div>
      <Suggestions events={this.state.events} />
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
