import React from 'react';
import '../Styles/SearchField.css';
import Icon from '../Icons/Icons.js';
import Button from './Button.js';

export default class SearchField extends React.Component {
    filter = event => {
        event.preventDefault();
        this.props.filterTab({filterTab: true});
    }
    search = event => {
        event.preventDefault();
        //const fData = new FormData(event.target);
        //console.log(fData.get('searchBar'));
        this.props.didSearch({didSearch: true});
    }
    render () {
        return (
        <form onSubmit={this.search} className='searchContainer'>
            <label htmlFor='searchBar' className='searchBar'>
                {Icon.search}
                <input type='text' name='searchBar' placeholder='O que você procura?' />
            </label>
            <Button icon={Icon.east} label='Buscar' type='filled' />
            <Button icon={Icon.filter} label='Filtrar' type='outlined' onClick={this.filter} />
        </form>
        )
    }
}
