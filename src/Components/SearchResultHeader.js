import React from 'react';
import Localization from './Localization.js';
import '../Styles/SearchResultHeader.css';

export default class SearchResultHeader extends React.Component {
    render() {
        const itemsFound = <span>{this.props.itemsFound}</span>;
        const storeCount = <span>{this.props.storeCount}</span>;

        return (
            <div className='searchResult'>
                <span className='itemsFound'>Encontramos {itemsFound} itens em {storeCount} lojas</span>
                <select>
                    <option>Menor Preço</option>
                    <option>Mais Populares</option>
                </select>
                <br />
            <Localization />
            </div>
        )
    }
}
