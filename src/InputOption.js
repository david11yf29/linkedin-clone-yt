import React from 'react';
import './InputOptions.css';

const InputOption = ({ Icon, title, color }) => {
  return (
    <div className="inputOptions">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  )
}

export default InputOption;