import React from 'react';
import './Styles/Header.css';
import OwlLogo from './Icons/OwlLogo.js';
import SideMenu from './Components/SideMenu.js';
import Button from './Components/Button.js';
import MenuButton from './Components/MenuButton.js';
import Icon from './Icons/Icons.js';

const navStyle = {
    background: '#2DA661',
    textAlign: 'center',
    transition: '.4s'
}

const onMenuNavStyle = {
    background: window.innerWidth >= 800 ? 'transparent' : 'white',
    textAlign: 'left',
    transition: '.4s',
    top: 0,
    position: window.innerWidth >= 800 ? 'absolute' : 'fixed',
    paddingTop: window.innerWidth >= 800 ? 18 : 56,
    overflow: 'hidden',
    width: '90%',
    whiteSpace: 'nowrap',
    zIndex: 1
}

const Breadcrumbs = {
    font: 'normal normal bold 14px/16px Arial',
    boxSizing: 'border-box',
    color: 'white',
    background: '#2DA661',
    padding: 16,
    height: 48
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: window.innerWidth >= 800
        }
    }

    openMenu = event => {
        this.setState({showMenu: event.target.checked});
    }


    render() {
        return (
        <>
        <SideMenu visible={this.state.showMenu} />
        {this.props.backButton
            ? <Button style={this.props.backButton}
                      icon={Icon.backArrow} type='back'
                      onClick={this.props.backButtonAction} />
            : <MenuButton visible={this.state.showMenu} onChange={this.openMenu} /> }
        <header className='header'>
            <h1>
                <OwlLogo />
                <span style={{fontWeight: 'medium'}}>BOA </span>
                <span style={{fontWeight: 'bold'}}>DICA</span>
            </h1>
            {this.props.backButton
            ? <div style={Breadcrumbs} >
                <span style={{opacity: .6}} >Home &#9679; Tipo &#9679; </span>Subtipo
              </div>
            : <nav style={!this.state.showMenu ? navStyle : onMenuNavStyle}>
                <Button icon={Icon.basket} label='Produtos' type={!this.state.showMenu ? 'transparent' : 'onMenu'}/>
                <Button icon={Icon.wrench} label='Serviços' type={!this.state.showMenu ? 'transparent' : 'onMenu'}/>
              </nav>}
        </header>
        </>
    );}
}

export default Header;
