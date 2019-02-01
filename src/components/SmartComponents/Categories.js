import React from 'react';

const Categories = ({categories}) => (
      <div>
      {/*categories.map(el => el.title).join(', ')*/}
      {categories.map((cat, i) =>
            (<span key={i}>
                {cat.title}
              </span>)
          ).reduce((prev, curr) => (
              prev === null ? [curr] : [prev, ', ', curr]))}

      </div>
    )
export default Categories;
