import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withGoogleMap, withScriptjs, GoogleMap, Marker} from 'react-google-maps';

const MapComponent = withScriptjs(withGoogleMap((props) => 
    <GoogleMap
        defaultZoom={props.zoomLevel}
        defaultCenter={props.center}
        defaultOptions={props.defaultOptions}
        defaultClickableIcons={false}
        clickableIcons={false}
        >
    </GoogleMap>
))

MapComponent.propTypes = {
    zoomLevel: PropTypes.number,
    center: PropTypes.object,
    defaultOptions: PropTypes.object
}

export default MapComponent;