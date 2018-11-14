import React from 'react';
import './Suggestions.css';
import Events from './SuggestionCards/Events';
import HotAndNew from './SuggestionCards/HotAndNew';
import Loading from '../SmartComponents/Loading';
import { Link } from 'react-dom';

const Suggestions = ({events, hotEvents}) =>  {
return   (
  <section className='container'>
  {console.log(hotEvents)}
      <div className='featured__cards'>
        <div className='h2'>
          <h1>Hot And New</h1>
        </div>
        <div className='card__container'>
          {hotEvents.map(hotEvent => (
            <HotAndNew key={hotEvent.id} hotEvent={hotEvent} />
          ))}
        </div>
      </div>
      <div className='featured__cards'>
          <div className='h2'>
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
}

export default Suggestions;
