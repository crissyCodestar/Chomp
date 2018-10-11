import React from 'react';
import { Link } from 'react-router-dom';
import '../Suggestions.css';

const HotAndNew = ({hotEvent, description, id, image_url, name, category, distance }) => (
  <div>
      <div className='card' key={hotEvent.id}>
        <a href={hotEvent.url} target='blank'>
          <div className='card__img'>
            <img src={hotEvent.image_url} />
          </div>
        </a>
          <div className='card_info'>
            <div className='card__header'>
                  <a href={hotEvent.url} target='blank'>{hotEvent.name}</a>
            </div>
            <div>

              {/* {Math.round(hotEvent.distance * 0.00062137) / 100} miles */}
            </div>
              <div>
                {
                  hotEvent.categories.map((cat, i) => (

                  hotEvent.categories.length -1 ?
                  (<div className='card_info_cat' key={i}>
                    {cat.title}
                      </div>)
                    :
                  (<div className='card_info_cat' key={i}>
                    {cat.title}
                      </div>)

                ))}
              </div>


          </div>
            </div>


    </div>
)

export default HotAndNew;
