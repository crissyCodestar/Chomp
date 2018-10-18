import React from 'react';
import { Link } from 'react-router-dom';
import '../Suggestions.css';
import Ratings from '../../SmartComponents/Ratings';

const HotAndNew = ({hotEvent, description, id, image_url, name, category, distance }) =>(

  <div>
      <div className='card' key={hotEvent.id}>
          <Link to={`/businesses/${hotEvent.id}`}>
              <div className='card__img'>
                  <img src={hotEvent.image_url} />
              </div>
          </Link>
          <div className='card_info'>
              <div className='card__header'>
                  <Link to={`/businesses/${hotEvent.id}`}>
                      {hotEvent.name}
                  </Link>
                  {/*<a href={hotEvent.url} target='blank'>{hotEvent.name}</a>*/}
              </div>
              <div>
                  {/* {Math.round(hotEvent.distance * 0.00062137) / 100} miles */}
              </div>
              <div  className='card_info_cat' >
                  {hotEvent.categories.map((cat, i) =>
                        (<span key={i}>
                            {cat.title}
                          </span>)
                      ).reduce((prev, curr) => (
                          prev === null ? [curr] : [prev, ', ', curr]))
                  }
              </div>
              <div className='card_info__rating'>
                  <Ratings rating={hotEvent.rating}/> {hotEvent.review_count} reviews
              </div>
          </div>
      </div>
    </div>
)


export default HotAndNew;
