import React from 'react';

const Validation = (props) => {
    return <small id={props.id} className={props.className} hidden={props.hidden}>{props.value}</small>
}

export default Validation;