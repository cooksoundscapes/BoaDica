import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import SearchField from './Components/SearchField.js';
import ProductView from './Components/ProductView.js';
import FilterView from './Components/FilterView.js';
import ProductCardContainer from './Components/ProductCardContainer.js';
import Welcome from './Welcome.js';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    changeView = response => this.setState(response);
    backButton = () => {
        this.setState({activeProduct: null,
                        filterTab: null});
    }
    Main = () => {
        if (this.state.activeProduct) {
            return <ProductView {...this.state.activeProduct} />
        } else if (this.state.filterTab) {
            return <FilterView />
        } else if (this.state.didSearch) {
            return (
                <>
                <SearchField filterTab={this.changeView} didSearch={this.changeView} />
                <ProductCardContainer cardClick={this.changeView}/>
                </>
            )
        } else {
            return (
                <>
                <SearchField filterTab={this.changeView} didSearch={this.changeView} />
                <Welcome />
                </>
            )
        }
    }
    render () {
        let buttonColor;
        if (this.state.activeProduct) buttonColor={color: 'white'};
        else if (this.state.filterTab) buttonColor={color: '#2DA661'};
        return (
        <>
        <Header backButtonAction={this.backButton} backButton={buttonColor} />
        <main style={{minHeight: window.innerHeight - 287}}>
            {this.Main()}
        </main>
        <Footer />
        </>
        )
    }
}
