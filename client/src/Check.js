import React from 'react';

const Check = (props) => {
    return <input type={props.type} id={props.id} className={props.className} checked={props.checked} onChange={props.onChange}></input>
}

export default Check;