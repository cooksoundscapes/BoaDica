import React from 'react';
import Icon from '../Icons/Icons.js';
import '../Styles/Localization.css';
/*
 Transformar em componente funcional!!!
 */
export default class Localization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {location: null};
    }
    componentDidMount() {
        const location = navigator.geolocation;
        location.getCurrentPosition( loc => {
            const link = 'http://nominatim.openstreetmap.org/reverse?format=json&lat='+loc.coords.latitude+'&lon=' + loc.coords.longitude +'&zoom=18&addressdetails=1';
            //const link = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + loc.coords.latitude + '%2C' + loc.coords.longitude + '&language=pt';
            fetch(link).then( res => {
                res.json().then(data => {
                    this.setState( {location: [data.address.city, ' '+data.address.state, ' '+data.address.country].toString()} );
                });
            });
        });
    }
    render() {
        return (
        <div className='location'>
            <p>Localização</p>
            {Icon.location}
            <span className='locName'>{this.state.location}</span>
        </div>
        )
    }
}
