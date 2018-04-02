import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Jumbotron, FormGroup, Input} from 'reactstrap';

import MapComponent from '../../MapComponent/MapComponent';
import InputControlBig from '../../Input/InputControlBig/InputControlBig';

import './DashboardHeader.css';

const mapStyle = require('../../../helpers/maps-style.json');

class DashboardHeader extends Component{    
    
    constructor(props){
        super(props);
        this.onCountryChange = this.onCountryChange.bind(this);
        this.state = {
            shrinkMap: false
        }
    }

    onCountryChange(event){
        console.log("returned: " + event.target.value);
        let state = this.state;
        if(event.target.value.length > 0){
            //Send to parent
            state.shrinkMap = true
        } else {
            state.shrinkMap = false
            //Make the map great again
        }
        this.props.onCountryChange(event.target.value);

        this.setState(state);
    }

    render(){
        const shrinkClass = this.state.shrinkMap ? 'animate-shrink' : 'animate-grow';
        return(
            <Jumbotron className={'p-0 mb-0 map-container ' + shrinkClass}>
                <MapComponent
                    isMarkerShown
                    googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBYWcR5f6KwJNA8dUItVT0StcKtW4FzwAQ&v=3.exp&libraries=geometry,drawing,places'
                    defaultOptions={{styles: mapStyle, mapTypeControl: false, panControl: false, streetViewControl: false, zoomControl: false}}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `inherit`, width: '100%', position: 'absolute' }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    zoomLevel={this.props.zoomLevel}
                    center={this.props.center}
                />
                <div className={'position-absolute w-100 maps-overlay'} style={{zIndex: '100', height: 'inherit'}}>
                    <div className={'d-flex justify-content-center flex-column align-items-center h-100'}>
                        <h1 style={{color: 'rgba(255, 255, 255, 0.8)'}}>WorldBank</h1>
                        <FormGroup className={'w-100'}>
                            <InputControlBig type='text' placeholder='Search on country' onChange={this.onCountryChange} />
                        </FormGroup>
                    </div>
                </div>
            </Jumbotron>
        )
    }

}

DashboardHeader.propTypes = {
    onDateRangeChange: PropTypes.func.isRequired
}
DashboardHeader.defaultProps = {
    center: {lat: 52.154273, lng: 4.498858},
    zoomLevel: 15
}

export default DashboardHeader;