import React from 'react';
import Icon from '../Icons/Icons';

const face = {
    display: 'inline-block',
    verticalAlign: 'middle',
    border: '1px solid #d4d4d4',
    width: 26,
    height: 26,
    marginRight: 18,
}

const container = {
    display: 'inline-block',
    font: 'normal normal normal 14px/18px Montserrat',
    marginBottom: 16
}

export default function Checkbox(props) {
    const [checked,Check] = React.useState(false);

    return (
    <label className='checkBox' style={{
        ...container,
        ...props.style
    }}>
        <input style={{display: 'none'}}
                type='checkbox'
                onChange={ event => Check(event.target.checked) }></input>
        <span style={{
            ...face,
            background: checked ? '#2DA661' : 'white',
            color: 'white'
        }} >{checked ? Icon.check : null}</span>
        {props.label}
    </label>
    )
}

