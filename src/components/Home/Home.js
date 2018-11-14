import React from 'react';
import Suggestions from '../Suggestions/Suggestions'


const Home = ({events, hotEvents}) =>{
  console.log(events)
  return(
    <div>

      <div>
        <Suggestions events={events}
          hotEvents={hotEvents}
          />
      </div>
    </div>
  )
}

export default Home;
