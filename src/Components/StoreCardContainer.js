import React from 'react';
import StoreCard from './StoreCard.js';

const LojasTopper = {
    l1: {
        name: 'Barraca do Beléu',
        address: 'Av. Rio Branco, 5000,\n Loja 1, Centro, São Paulo-SP',
        delivery: false,
        creditDebit: true,
        onCash: true,
    },
    l2: {
        name: 'Celcios Top Som',
        address: 'R. São José, 283,\n Santo Amaro, São Paulo-SP',
        delivery: true,
        creditDebit: true,
        onCash: false
    },
    l3: {
        name: 'Xi Jin Store',
        address: 'R. Sta. Ifigênia 300,\n box 222, São Paulo-SP',
        delivery: false,
        creditDebit: false,
        onCash: true
    },
    l4: {
        name: 'Golden Mall Beach Star',
        address: 'Av. Paulista 1000,\n box 33, Jardim Paulista, São Paulo-SP',
        delivery: true,
        creditDebit: true,
        onCash: false,
    },
}

export default class ProductCardContainer extends React.Component {

    createStoreArray = () => {
        const list = Object.entries(LojasTopper).map( store => {
            return(
            <StoreCard key={ store[0] } {...store[1]} price={this.props.price}/>
            )
        });
        return list;
    }
    render() {
        return (
        <div className='storeCardContainer' >
            {this.createStoreArray()}
        </div>
        )
    }
}
