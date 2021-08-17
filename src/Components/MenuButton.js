import React from 'react';
import '../Styles/MenuButton.css';
/*
 Transformar em componente funcional!!!
 */
export default class MenuButton extends React.Component {
    render() {
        return (
        <div aria-label='Open menu' style={this.props.visible ? {position: 'fixed'} : null} className='menu-btn' onChange={this.props.onChange}>
            <input type='checkbox' id='menuButton'></input>
            <label htmlFor='menuButton'></label>
        </div>
        )
    }
}
