import React from 'react';

const Background = ({backgroundInfo}) => (
  <div>
    {backgroundInfo.photos.map((pic, i) => (
      <div key={i}>
        <img src={pic}/>
      </div>
    ))}

  </div>
)

export default Background;
