// FilterButtons.js
import React from 'react';

function FilterButtons({ setFilter }) {
  return (
    <div className="filter-buttons mb-3">
      <button onClick={() => setFilter('all')} className="btn btn-info mr-1">All</button>
      <button onClick={() => setFilter('completed')} className="btn btn-info mr-1">Done</button>
      <button onClick={() => setFilter('active')} className="btn btn-info">Todo</button>
    </div>
  );
}

export default FilterButtons;
