import React from 'react';
import StoreCardContainer from './StoreCardContainer.js';
import ModalContainer from './ModalContainer.js';
import Localization from './Localization.js';
import '../Styles/ProductView.css';

export default class ProductView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: false}
    }

    closeModal = () => {
        window.onclick = null;
        this.setState({showModal: false});
    }

    openModal = () => {
        this.setState({showModal: true});
        window.onclick = event => {if (event.target.className === 'ModalBG') this.closeModal();}
    }
    modalContent = () => {
        return <img className='prodImage' src={this.props.image} alt='imagem do produto' />;
    }
    render() {
        return (
        <>
        { this.state.showModal ? <ModalContainer closeAction={this.closeModal}
                                    content={this.modalContent()} /> : null }
        <div className='productView' >
            <div className='info'>
                <img className='prodImage' src={this.props.image} alt='imagem do produto' onClick={this.openModal}/>
                <p className='title'>{this.props.title}</p>
                <p className='description'>{this.props.description}</p>
                <p className='vendor'>Fabricante</p>
            </div>
            <Localization />
            <div className='sortStores'>
                <span>4 Lojas</span>
                <select>
                    <option>Mais Perto de Mim</option>
                    <option>Mais Populares</option>
                    <option>Menor Preço</option>
                </select>
            </div>
            <StoreCardContainer price={this.props.price}/>
        </div>
        </>
        )
    }
}
