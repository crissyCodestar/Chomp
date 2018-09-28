import React from 'react';
import { Link } from 'react-router-dom';
import '../Suggestions.css';

const HotAndNew = ({hotEvent, description, id, image_url, name, category, distance }) => (
  <div>
    <a href={hotEvent.event_site_url} target='blank'>
      <div className='card' key={hotEvent.id}>
        <div className='card__img'>
          <img src={hotEvent.image_url} />
        </div>
        <div className='card__header'>
            <h4>{hotEvent.name}</h4>
        </div>
        <div>
          {Math.round(hotEvent.distance * 0.00062137) / 100} miles
        </div>
        <div>
          <p>Category: {hotEvent.category}</p>
        </div>
      </div>
    </a>
    </div>
)

export default HotAndNew;
