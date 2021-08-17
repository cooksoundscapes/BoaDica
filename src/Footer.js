import React from 'react';
import './Styles/Footer.scss';
import Icon from './Icons/Icons.js';

class Header extends React.Component {
    render() { return (
        <footer>
            <a className='landing' href='https://www.boadica.com.br'>www.
                <span style={{fontWeight: '500'}}>boa</span>
                <span style={{fontWeight: 'bold'}}>dica</span>
            .com.br</a>
            <br />
            {Icon.facebook}
            <br />
            <div style={{marginTop: '16px'}}>
                <a className='smaller' href='https://www.boadica.com.br'>Sobre nós &#9679; </a>
                <a className='smaller' href='https://www.boadica.com.br'> Termos de uso &#9679; </a>
                <a className='smaller' href='https://www.boadica.com.br'> Privacidade</a>
            </div>
            <p className='allrights'>© 2020. TODOS OS DIREITOS RESERVADOS.</p>
        </footer>
    );}
}

export default Header;

