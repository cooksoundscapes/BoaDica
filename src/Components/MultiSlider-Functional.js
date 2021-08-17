import React from 'react';

const railStyle = {
    display: 'inline-block',
    position: 'relative',
    width: 186,
    height: 3,
    backgroundColor: '#2DA661D1',
    borderRadius: 2,
    marginLeft: 16,
    marginRight: 16
}
const handlerStyle = {
    top: -20,
    display: 'inline-block',
    position: 'absolute',
    boxSizing: 'border-box',
    paddingTop: 16,
    paddingLeft: 16,
    verticalAlign: 'middle',
    width: 44,
    height: 44,
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    userSelect: 'none'
}

const handlerFace = {
    display: 'block',
    position: 'absolute',
    borderRadius: '50%',
    width: 12,
    height: 12,
    background: '#2DA661',
}

function Bubble(props) {
    const style = {
        position: 'absolute',
        top: -32,
        left: 6,
        textAlign: 'center',
        color: 'white'
    }
    return (
        <svg style={style} width='34' height='62'>
        <circle cx='16' cy='16' r='16' fill={props.color} />
        <text x='16' y='20'
            textAnchor='middle'
            style={{fill: 'white', fontFamily: 'Montserrat'}}
            > {parseInt(props.label)} </text>
        <path d='M0,20 C4,32 16,32 16,62 16,32 28,32 32,20' fill={props.color} />
        </svg>
    )
}

const MultiSlider = React.memo(props => {
    const [values, setValues] = React.useState(props.handlers);
    let initLeft, initClient;

    const addDrag = event => {
        let handler = event.target;
        while (handler.className instanceof SVGAnimatedString ||
               !handler.className.includes('handler_')) {
            handler = handler.parentNode;
        }
        if (event.type === 'touchstart') {
            handler.addEventListener('touchmove',dragHandler, {passive: true});
            initClient = event.touches[0].clientX;
            initLeft = handler.offsetLeft;
            window.ontouchend = () => {
                handler.removeEventListener('touchmove',dragHandler, {passive: true});
                window.onmouseup = null;
            }
        } else {
            handler.addEventListener('mousemove',dragHandler);
            initClient = event.clientX;
            initLeft = handler.offsetLeft;
            window.onmouseup = () => {
                handler.removeEventListener('mousemove',dragHandler);
                window.onmouseup = null;
            }
        }
    }

    const dragHandler = event => {
        let handler = event.target;
        while (handler.className instanceof SVGAnimatedString || !handler.className.includes('handler_')) {
            handler = handler.parentNode;
        }
        let i = parseInt(handler.className.charAt(handler.className.length - 1));
        let move = (event instanceof TouchEvent) ? event.touches[0].clientX : event.clientX;
        move = Math.max(-handlerStyle.width/2, move - initClient + initLeft);
        move = Math.min(railStyle.width-handlerStyle.width/2, move);
        handler.style.left = move+'px';
        const copyState = [...values];
        copyState[i] = positionToValue(move+handlerStyle.width/2);
        setValues(copyState);
    }

    const positionToValue = pos => {
        let value = (pos / railStyle.width) * (props.max-props.min)+props.min;
        return value;
    }

    const valueToPosition = value => {
        let range = props.max - props.min;
        let position = Math.trunc((value / range) * railStyle.width);
        return position;
    }

    const selectedArea = () => {
        const min = Math.min(...values);
        const max = Math.max(...values);
        const left = valueToPosition(min);
        const width = valueToPosition(max) - left;
        const style = {
            position: 'absolute',
            background: '#2E8755',
            height: 3,
            left: left - 62,
            width: width
        }
        return <div style={style}></div>
    }
    const renderHandlers = () => {
        let style, position;
        return (
            props.handlers.map( (value,i) => {
                position = valueToPosition(value) - 82;
                style = {
                    left: position,
                    ...handlerStyle
                };
                return (
                <div key={i} onMouseDown={addDrag}
                    onTouchStart={addDrag}
                    className={'handler_'+i}
                    style={style} >
                    <Bubble label={values[i]} color='#2DA661'/>
                    <span style={handlerFace}></span>
                </div>
                )
            }) ||
            <span className='handler'>{props.max/2}</span>
        )
    }

    return (
    <div role='slider'
    aria-valuemin={props.min}
    aria-valuemax={props.max}
    aria-valuenow={values[values.length-1]}
    className={`multiSlider ${props.className}`}
    style={{
        display: 'inline-block',
        boxSizing: 'border-box',
        height: 62,
        paddingTop: 44,
        font: 'normal normal normal 14px/18px Montserrat',
        ...props.style
    }} >
        {props.min}
        <div className='rail' style={railStyle} >
            {selectedArea()}
            {renderHandlers()}
        </div>
        {props.max}
    </div>
    )
});

export default MultiSlider;
