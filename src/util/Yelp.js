import React from 'react';
import {Link} from 'react-router-dom';

const apiKey ='d22VAAFnffpCl8jh9z2KhwG2rtqoKlpGdactYnGvHSwq1b-3KPci5QSB6ufj9544xuhWAr2sbH0PlRgABBseVA7_xR0mdJXqRxZ5oXwyQ4A7DUE2PJrI-uFvBR9wWnYx';



const Yelp = {


search(term, location, sortBy){
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then(response=> {
    return response.json()
  }).then(jsonResponse => {
    if(jsonResponse.businesses){
      console.log(jsonResponse)
      return jsonResponse.businesses.map(business => ({
        id: business.id,
        name: <Link to={`/businesses/${business.id}`}>{business.name}</Link>,
        address:business.location.address1,
        imageSrc:business.image_url,
        city:business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating:business.rating,
        reviewCount: business.review_count
      }));

    }

  })
},

events(){
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events?location=11206`, {
    headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then(res => {
    return res.json()
  }).then(eventList => {
    if(eventList.events){
      console.log(eventList.events)
      return eventList.events
    }
  })
},

businessLink (id){
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


};

export default Yelp;
