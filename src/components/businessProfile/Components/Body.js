import React from 'react';

const Body = ({bodyInfo}) => (
  <div>
    {console.log(bodyInfo.location.display_address)}
    <div>
      {bodyInfo.location.display_address.map((loc, i) => (
        <div key={i}>
            {loc}
        </div>
      ))}
    </div>
  </div>
)

export default Body;
