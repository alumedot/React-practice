import React from 'react';

const validation = (props) => {
  let message = props.textLength < 10 ? 'Text is too short!' : 'Text is long enough.';
  return (
      <p>{message}</p>
  );
};

export default validation;