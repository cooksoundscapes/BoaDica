import React from 'react';
import Button from './Button.js';
import Icon from '../Icons/Icons.js';
import '../Styles/StoreCard.css';

const gridTemplate = {
    display: 'grid',
    gridTemplateRows: '31px 49px',
    gridTemplateColumns: '196px auto',
}

export default class StoreCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonFocus: null
        }
    }
    render() {
        return (
        <div className='storeCard' >
            <div style={gridTemplate}>
                <span className='title'>{this.props.name}</span>
                <span className='priceTag'>R${this.props.price}</span>
                <span className='address'>{this.props.address}</span>
                {this.props.onCash ? <span className='onCash'>à vista em dinheiro</span> : null}
            </div>
            <div>
                <span className='box'>box</span>
                {this.props.creditDebit ?
                    <Button
                    icon={Icon.creditCard}
                    label='Aceita cartão, consulte valores'
                    type='recoiled'
                    hideLabel={this.state.buttonFocus !== 'card'}
                    onClick={ () => this.setState({buttonFocus: 'card'}) }
                    /> : null }
                {this.props.delivery ?
                    <Button
                    icon={Icon.motosport}
                    label='Faz Entrega, consulte valores'
                    type='recoiled'
                    hideLabel={this.state.buttonFocus !== 'delivery'}
                    onClick={ () => this.setState({buttonFocus: 'delivery'}) }
                    /> : null }
            </div>
            <div>
                <Button icon={Icon.location} label='Ver como chegar' type='greenOutlined' />
                <Button icon={Icon.phone} label='Telefonar' type='greenOutlined' />
            </div>
        </div>
        )
    }
}
