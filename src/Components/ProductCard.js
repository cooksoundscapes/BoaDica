import Icon from '../Icons/Icons.js';
import '../Styles/ProductCard.css';

export default function ProductCard(props) {
    function openView() {
        props.cardClick({activeProduct: props});
    }
    return (
        <div className='prodCardBox' onClick={openView}>
            <img className='prodImage' src={props.image} alt='imagem do produto' />
            <div className='textContainer'>
                <p className='title'>{props.title}</p>
                <p className='description'>{props.description}</p>
                <p className='pricetag'>a partir de <span>R${props.price}</span></p>
                <p className='stores'> {Icon.market}em {props.stores} lojas</p>
            </div>
        </div>
    )
}
