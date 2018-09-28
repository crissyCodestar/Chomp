import React from 'react';
import './Suggestions.css';
import Events from './SuggestionCards/Events';
import HotAndNew from './SuggestionCards/HotAndNew';
import { Link } from 'react-dom';

const Suggestions = ({events, hotEvents}) =>  (
  <section>
  {console.log("hot", hotEvents)}
      <div className='featured__cards'>
        <div className='header'>
          <h1>Hot And New</h1>
        </div>
        <div className='card__container'>
          {hotEvents.map(hotEvent => (
            <HotAndNew key={hotEvent.id} hotEvent={hotEvent} />
          ))}
        </div>
      </div>
      <div className='featured__cards'>
          <div className='header'>
              <h1>Featured Events</h1>
          </div>
        <div className='card__container'>
          {events.map(event => (
            <Events key={event.id} event={event} />
          ))}
        </div>
      </div>

  </section>
)


export default Suggestions;
