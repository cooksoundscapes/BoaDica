import React from 'react';
import '../Styles/Button.css';

export default function Button(props) {
    const style = props.style || {};
    if (props.hideLabel) style.width = '2em';
    return (
    <button style={style} className={props.type+'-btn'} onClick={props.onClick}>
        {props.icon} {props.label}
    </button>
    )
}



