import React from 'react';
import Icon from '../Icons/Icons.js';
import Button from './Button.js';
import SearchField from './SearchField.js';
/*
 Transformar em componente funcional!!!
 */
const style = {
    background: '#2DA661',
    textAlign: 'center',
}

export default class NavBar extends React.Component {
    render() {
    return (
        <nav style={style}>
            <Button icon={Icon.basket} label='Produtos' type='transparent'/>
            <Button icon={Icon.wrench} label='Serviços' type='transparent'/>
            <br />
            <SearchField didSearch={this.props.didSearch}/>
        </nav>
    )
    }
}
