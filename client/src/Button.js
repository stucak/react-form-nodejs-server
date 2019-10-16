import React from 'react';

const Button = (props) => {
    return <button className={props.className} disabled={props.disabled}>{props.value}</button>
  }

export default Button;
