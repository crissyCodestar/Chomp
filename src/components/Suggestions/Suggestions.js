import React from 'react';
import './Suggestions.css'

const Suggestions = (events) =>  (
  <div className='featured__cards'>
    <div className='header'>
      <h1>Featured Events</h1>
    </div>
    <div className='card__container'>
      {events.events.map(event => (
        <div className='card' key={event.id}>
          <div className='card__img'>
            <img src={event.image_url} />
          </div>
          <div className='card__header'>
            <h4>{event.name}</h4>
          </div>
          <div>
            <p>Category: {event.category}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)


export default Suggestions;
