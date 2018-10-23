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

   this.sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };
}

getSortByClass(sortByOptions){
  if(this.state.sortBy === sortByOptions){
    return 'active';
  }
  return '';
}

handleSortByChange(event, sortByOptions){
  this.setState({sortBy: sortByOptions})
  console.log(event.target.sortByOptionValue);
 // console.log(this.state.sortBy);
}

handleTermChange(event){
  this.setState({term: event.target.value })
}

handleLocationChange(event){
    this.setState({location: event.target.value})
}

handleSearch(event){
  // console.log(this.state.sortBy);
  this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
  this.setState({searched:true})
  event.preventDefault();
  this.props.history.push('/businesses');


}

renderSortByOptions(){

  return Object.keys(this.sortByOptions).map(sortByOption => {
    let sortByOptionValue = this.sortByOptions[sortByOption];
    return (<li className={this.getSortByClass(sortByOptionValue)}
              onClick={this.handleSortByChange}
              key={sortByOptionValue}>
            {sortByOption}
          </li>);
  });
}

renderHomeSearch(i){
  (<img src={this.props.eventPhotos[i]} alt=""/>)
}

// renederProfileSearch(){
//   (<)
// }




render() {
  const {searched, handleSearch, handleTermChange, handleLocationChange} = this.state
  //console.log(this.props.history)

  let i = Math.floor(Math.random() * this.props.eventPhotos.length)
  const  history = this.props
  //console.log(this.props.eventPhotos[i]);

  return(
    <div className={!!history.match.isExact ? "SearchBar_Hero": null}>
    { !!history.match.isExact ? <img src={this.props.eventPhotos[i]} alt=""/> : null}
       {/*this.state.searched ? */}
      <div className={!!history.match.isExact ? "SearchBar" : "Searched"}>
        <div className="SearchBar-sort-options">
          <ul>
            {this.state.searched ? this.renderSortByOptions() : ""}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Business" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange} />
          <div className="SearchBar-submit">
              <a onClick={this.handleSearch}>Go</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withRouter(SearchBar);
