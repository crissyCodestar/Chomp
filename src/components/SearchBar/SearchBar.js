import React from 'react';
import './SearchBar.css';
import { Redirect} from 'react-router';
import {withRouter} from 'react-router-dom';



class SearchBar extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    term:'',
    location:'',
    sortBy: 'best_match',
    searched: false
  };

  this.handleTermChange = this.handleTermChange.bind(this);
  this.handleLocationChange = this.handleLocationChange.bind(this);
  this.handleSearch = this.handleSearch.bind(this);
  this.handleSortByChange = this.handleSortByChange.bind(this);
  this.getSortByClass = this.getSortByClass.bind(this);

   this.sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };
}

getSortByClass(sortByOptions){

  console.log("ClassSort", sortByOptions)
  if(this.state.sortBy === sortByOptions){
     return 'active';
  }
   return '';
}

handleSortByChange( sortByOptions){

  this.setState({sortBy: sortByOptions})
console.log("Change",this.state.sortBy)
this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)

}

handleTermChange(event){
  this.setState({term: event.target.value })
}

handleLocationChange(event){
    this.setState({location: event.target.value})
}

handleSearch(event){
  this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
  this.setState({searched:true})
  event.preventDefault();
  this.props.history.push('/businesses');


}

renderSortByOptions(){

  return Object.keys(this.sortByOptions).map((sortByOption, i) => {
    let sortByOptionValue = this.sortByOptions[sortByOption];
    return (<li className={this.getSortByClass(sortByOptionValue)}
              onClick={() => this.handleSortByChange(sortByOptionValue)}
              value={sortByOptionValue}
              key={i}>
              {console.log("sortByOptionValue",this.sortByOptions[sortByOption])}

            {sortByOption}
          </li>);
  });
}

// renderHomeSearch(i){
//   return <img src={this.props.eventPhotos[i]} alt=""/>
// }




render() {
  const {searched, handleSearch, handleTermChange, handleLocationChange} = this.state
  const  history = this.props
  const  location = this.props.location.pathname
  return(

      <div className={!!history.match.isExact ? "SearchBar" : "SearchBarSearched"}>
      {console.log("Location",this.props)}
        <div className="SearchBar-sort-options">
          <ul>
            {location == "/businesses" & this.state.searched ? this.renderSortByOptions() : ""}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Find   Pizza, Parade, Mover..." onChange={this.handleTermChange}/>
          <input placeholder="Near   Brooklyn, Chicago, NOLA..." onChange={this.handleLocationChange} />
          <div className="SearchBar-submit">
              <a onClick={this.handleSearch}>Go</a>
          </div>
        </div>
      </div>

    );
  }
}

export default withRouter(SearchBar);
