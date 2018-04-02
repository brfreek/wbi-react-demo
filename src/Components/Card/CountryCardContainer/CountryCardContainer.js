import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import CountryCard from './CountryCard/CountryCard';

class CountryCardContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            center: {
                
            },
            error: ''
        }
    }
    componentWillMount(){
        if(this.props.countryAlpha3Code || this.props.countryName){
            const url = 'https://restcountries.eu/rest/v2' + (this.props.countryAlpha3Code ? '/alpha/' + this.props.countryAlpha3Code : '/name/' + this.props.countryName)
            axios.get(url, {
                headers: {'X-Requested-With': 'XMLHttpRequest'},
                withCredentials: false, // default
            })
                .then((response) => {
                    console.log('response: ' + JSON.stringify(response.data))   ;
                    if(!response.data || response.data.length > 1){
                        //some error
                        console.log('no proper response: ' + JSON.stringify(response.data));
                    } else{
                        const center = {
                            lat: this.props.countryAlpha3Code ? response.data.latlng[0] : response.data[0].latlng[0],
                            lng: this.props.countryAlpha3Code ? response.data.latlng[1] : response.data[0].latlng[1]
                        }
                        let state = this.state;
                        state.center = center;
                        this.setState(state);
                    }
                }).catch((error) => {

                });        
        }
    }
    render(){
        return(
            <CountryCard title={this.props.countryName} center={this.state.center} flag={''} className={'h-100'}/>
        )
    }
}

CountryCardContainer.propTypes = {
    countryName: PropTypes.string
}

export default CountryCardContainer;