import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';

import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';
import BusinessProfile from './components/BusinessProfile/BusinessProfile';
import Home from './components/Home/Home';
import Suggestions from './components/Suggestions/Suggestions';
import Loading from './components/SmartComponents/Loading';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      businesses:[],
      events: [],
      hotEvents: [],
      loading: true,
      eventLoading: true
    }

    this.searchYelp = this.searchYelp.bind(this);
    this.renderHome = this.renderHome.bind(this);
    this.renderBusinesses = this.renderBusinesses.bind(this);
  }

componentDidMount(){
  Yelp.events().then(events => {
    this.setState({events: events ,eventLoading: false})
  }),
  Yelp.hotAndNew().then(hotEvents => {
    this.setState({ hotEvents : hotEvents ,eventLoading: false})
  })
}

searchYelp(term, location, sortBy) {
  console.log("searchYELP", sortBy);
   Yelp.search(term, location, sortBy).then(businesses => {
     this.setState({businesses: businesses ,loading: false});
   });
}

componentWillReceiveProps(nextProps){
  this.setState({businesses:nextProps})
}


renderBusinesses(){
  return this.state.loading ? (
        <Loading />
  ) : this.state.businesses == 0 ? (
    <div> Doesnt exist, try your search again</div>
  ) : (
      <BusinessList
      businesses={this.state.businesses}
      />
  )
}

renderHome(){
  return this.state.eventLoading ? (
      <Loading />
  ) : (
    <div>
      <Home events={this.state.events}
      hotEvents={this.state.hotEvents}
      />
    </div>
  )
}


render() {
  let eventPhotos = this.state.hotEvents.map(pic => pic.image_url)
  let i = Math.floor(Math.random() * eventPhotos.length)
  return (
    <div className="App">
      <div className='App_container'>
      <div className="img_container">
          <img src={eventPhotos[i]} alt=""/>
      </div>
        <div className='searchContainer'>
            <Link to='/'><h1 className="header">Chomp</h1></Link>
            <SearchBar eventPhotos={eventPhotos} searchYelp={this.searchYelp} />
        </div>
        <div className='container'>
          <Switch>
            <Route exact path='/' render={this.renderHome} />
            <Route exact path='/businesses' render={this.renderBusinesses} />
            <Route path='/businesses/:id' component={BusinessProfile} />
          </Switch>
        </div>
      </div>
    </div>
    );
  }
}


export default App;
