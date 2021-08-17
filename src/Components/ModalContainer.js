import React from 'react';
import '../Styles/Modal.css';
import Icon from '../Icons/Icons.js';

export default class ModalContainer extends React.Component {
    render() { return (
        <div className='ModalBG' style={{visibility: this.props.visible}}>
            <div className='ModalBox'>
                <span className='closebtn' onClick={this.props.closeAction}>{Icon.close}</span>
                {this.props.content}
            </div>
        </div>
    );}
}
