import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'reactstrap';
import IoAndroidGlobe from 'react-icons/lib/io/android-globe';

import MapComponent from '../../../MapComponent/MapComponent';

const mapStyle = require('../../../../helpers/maps-style.json');

const CountryCard = (props) => 
    <Card className={'h-100 bg-dark'} style={{minHeight: '300px'}}>
        <div className={'position-absolute d-flex align-items-center justify-content-between h-100 w-100 card-overlay'} style={{zIndex: '102'}}>
            <h5 className={'text-center text-light w-100'}>{props.title}</h5>
        </div>
        {props.center.lat && props.center.lng ?
        <MapComponent 
            isMarkerShown
            googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBYWcR5f6KwJNA8dUItVT0StcKtW4FzwAQ&v=3.exp&libraries=geometry,drawing,places'
            defaultOptions={{styles: mapStyle, mapTypeControl: false, panControl: false, streetViewControl: false, zoomControl: false}}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `inherit`, width: '100%', position: 'absolute'}} />}
            mapElement={<div style={{ height: `100%` }} />}
            zoomLevel={5} 
            center={props.center}
        /> :
        <div className={'d-flex justify-content-center align-items-center h-100 w-100'}>
            <IoAndroidGlobe size={'20rem'} color={'rgba(0,0,0,0.4)'}/>
        </div>
        }
    </Card>

CountryCard.propTypes = {
    title: PropTypes.string,
    center: PropTypes.object,
    flag: PropTypes.string
}

export default CountryCard;