    import React from 'react';
import Icon from '../Icons/Icons.js';
import '../Styles/SideMenu.css';

const items = [
        [Icon.computer, 'Computadores',
            ['Monitores / TVs','Mouses','Scanners','Teclados']],
        [Icon.lightbulb, 'CPU e Memória',
            ['Intel','AMD','DDR3','DDR4','Placas Mãe']],
        [Icon.dottedCircle, 'Armazenamento',
            ['SSD','Pen drives','Blu-Ray','DVD-RW','Disquetes 5¼']],
        [Icon.printer, 'Impressora',
            ['Jato de Tinta','Laser','Matricial','Multi-Funcional','Impressoras 3D']],
        [Icon.camera, 'Multimídia',
            ['Caixas de Som','Headphones','Placas de Som','Webcam','Projetores']],
        [Icon.server, 'Redes',
            ['Cabeamento','HUB e Switch','Powerline','VoIP','3G/4G']],
        [Icon.mouse, 'Periféricos',
            ['Mouses','Game Pads','Mesas Digitalizadoras']],
    ]

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { visibleSubs: items.map( i => false) };
    }

    createItems = () => {
        const list = items.map( (i,ind) => {
            return (
                <div key={i[1]} >
                <li className='item' onClick={ () => {
                    let copy = this.state.visibleSubs;
                    copy[ind] = !copy[ind];
                    this.setState({visibleSubs: copy});
                }} > {i[0]} {i[1]} </li>
                <ul className='subList'
                    style={this.state.visibleSubs[ind] ? {height: i[2].length*2+1+'em'} : {height: 0} } >
                    { i[2].map(sub => <li key={sub} className='subItem'>{sub}</li> ) }
                </ul>
                </div>
            )
        });
        return list;
    }
    render() {
        const width = window.innerWidth >= 800 ? 230 : '90%';
        const isVisible = this.props.visible ? {width: width} : {width: 0};

        if (window.innerWidth <= 800 && this.props.visible) {
            document.body.classList.add('body-scroll-lock');
        } else {
            document.body.classList.remove('body-scroll-lock');
        }
        return (
            <div className='sideMenu' style={isVisible}>
                <ul style={{marginTop: 110}}>
                {this.createItems()}
                </ul>
            </div>
        )
    }
}
