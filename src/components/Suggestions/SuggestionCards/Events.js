import React from 'react';
import { Link } from 'react-router-dom';

const Events = ({event, description, id, image_url, name, category, is_free }) => (
  <div>
      <div className='card' key={event.id}>
          <a href={event.event_site_url} target='blank'>
              <div className='card__img'>
                  <img src={event.image_url} />
              </div>
          </a>
          <div className='card_info'>
              <div className='card__header'>
                  <a href={event.event_site_url} target='blank'>{event.name}</a>
              </div>
              <div  className='card_info_cat'>
                  {event.is_free ?  "FREE event" : `$${event.cost }`}
              </div>
              <div className='card_info__rating'>
                  <p>{event.interested_count} Interested {event.attending_count} Going</p>
              </div>
              <div className='card_info__rating'>
                  <p>{!!event.is_official ? "Official Yelp Event" : null}</p>
              </div>
          </div>
      </div>
  </div>
)

export default Events;
