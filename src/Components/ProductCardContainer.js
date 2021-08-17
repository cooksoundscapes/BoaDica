import SearchResultHeader from './SearchResultHeader.js';
import ProductCard from './ProductCard.js';
import img1 from '../Images/computador_do_milhao.jpg';
import img2 from '../Images/pendrive.jpg';
import img3 from '../Images/tectoy.jpg';
import img4 from '../Images/cartucho.jpg';
import img5 from '../Images/laptop_do_ben_10.jpg';

const ProdutosTopson = {
    p1: {
        image: img1,
        title: 'Computador do milhão',
        description: 'novo com disquete',
        price: '999,99',
        stores: '5'
    },
    p2: {
        image: img2,
        title: 'MP3 Player' ,
        description: 'com novo disco do barões' ,
        price: '20,00',
        stores: '5'
    },
    p3: {
        image: img3,
        title: 'Portátil do milhão',
        description: 'voz do sósia oficial',
        price: '250,00',
        stores: '2'
    },
    p4: {
        image: img4,
        title: `Cartucho megadrive \nJogo do Milhão - raridade totalmente rara, exclusividade absolutamente exclusiva`, description: `texto descritivo que serve para \nabrilhantar discussões que permeiam realidades ululantes, evocando catárticamente a apoptose imagética e agnóstica das confluências estéticas do cu de quem está lendo.`,
        price: '399,00',
        stores: '1'
    },
    p5: {
        image: img5,
        title: `NOTEBOOK Gamer -\n Casing temática exclusiva`,
        description: 'Bem louco!',
        price: '7699,99',
        stores: '2'
    }
}

export default function ProductCardContainer(props) {

    function createCardArray() {
        const list = Object.entries(ProdutosTopson).map( prod =>
        <ProductCard key={ prod[0] } {...prod[1]} cardClick={props.cardClick} /> );
        return list;
    }
    return (
        <>
        <SearchResultHeader itemsFound={'2'} storeCount='10' />
        <div className='cardContainer'>
            {createCardArray()}
        </div>
        </>
    )
}
