import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
  
function ExpBar() {
  const now = 60;
  return <ProgressBar now={now} label={`${now}% to next level`} />;
}

export default ExpBar;
