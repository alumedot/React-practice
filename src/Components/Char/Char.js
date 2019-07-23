import React from 'react';
import './Char.css';

const char = (props) => {
  return <p onClick={props.deleteChar}
            className='char'>{props.letter}</p>
};

export default char;