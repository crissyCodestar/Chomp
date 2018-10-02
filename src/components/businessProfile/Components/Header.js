import React from 'react';

const Header = ({businessInfo}) => (

<div>
{/*
  {Header}
    Name   Category Price Rating Review count
    */}
    {console.log(businessInfo.name)}
  <div>
    <h1>{businessInfo.name}</h1>
  </div>
  <div>
    <div>
    {businessInfo.category}
    </div>
  </div>
  <div>
    <div>
    {businessInfo.price}
    </div>
  </div>
  <div>
    <div>
    {businessInfo.rating}
    </div>
  </div>
  <div>
    <div>
    {businessInfo.review_count}
    </div>
  </div>
</div>
)

export default Header;
