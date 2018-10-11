import React from 'react';
import { Link } from 'react-router-dom';

const Events = ({event, description, id, image_url, name, category, is_free }) => (
  <div>
    <a href={event.event_site_url} target='blank'>
      <div className='card' key={event.id}>
        <div className='card__img'>
          <img src={event.image_url} />
        </div>
        <div className='card__header'>
          <h4>{event.name}</h4>
        </div>
        <div>
          {event.is_free ?  "FREE event" : `$${event.cost }`}
        </div>
        <div>
          <p>Category: {event.category}</p>
        </div>
      </div>
    </a>
    </div>
)

export default Events;
