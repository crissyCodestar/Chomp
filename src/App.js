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
      hotEvents: [],
      loading: true
    }

    this.searchYelp = this.searchYelp.bind(this);
    this.renderSuggetions = this.renderSuggetions.bind(this);
    this.renderBusinesses = this.renderBusinesses.bind(this);
  }

  componentDidMount(){
    Yelp.events().then(events => {
      this.setState({events: events})
    }),
    Yelp.hotAndNew().then(hotEvents => {
      this.setState({ hotEvents : hotEvents})
    })
  }

  searchYelp(term, location, sortBy) {
     Yelp.search(term, location, sortBy).then(businesses => {
       this.setState({businesses: businesses ,loading: false});
     });
  }




  renderBusinesses(){
  return this.state.loading ?
   (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : this.state.businesses == 0 ? (
    <div> Doesnt exist, try your search again</div>
  ) : (
    <div>
      <BusinessList businesses={this.state.businesses} />
    </div>
    )
  }

  renderSuggetions(){
    return (
      <div>
            <Suggestions events={this.state.events} hotEvents={this.state.hotEvents} />
      </div>
    )
  }


  render() {
    console.log(this.state.events,"hot=>", this.state.hotEvents)
    return (
    <div className="App">
      <div>
        <Link to='/'><h1 className="header">Chomp</h1></Link>
        <SearchBar searchYelp={this.searchYelp} />
    </div>
      <div className='container'>
        <Switch>
          <Route exact path='/' render={this.renderSuggetions} />
          <Route exact path='/businesses' render={this.renderBusinesses} />
          <Route path='/businesses/:id' component={businessProfile} />
        </Switch>
      </div>
    </div>
    );
  }
}


export default App;
