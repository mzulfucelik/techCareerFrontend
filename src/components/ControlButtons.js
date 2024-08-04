// ControlButtons.js
import React from 'react';

function ControlButtons({ deleteCompleted, clearList }) {
  return (
    <div className="control-buttons">
      <button onClick={deleteCompleted} className="btn btn-danger-custom mr-2">
        Delete Done Tasks
      </button>
      <button onClick={clearList} className="btn btn-danger-custom">
        Delete All Tasks
      </button>
    </div>
  );
}

export default ControlButtons;
