import React from 'react';

const Input = (props) => {
    return <input type={props.type} id={props.id} className={props.className} placeholder={props.placeholder} onChange={props.onChange}></input>
}

export default Input;