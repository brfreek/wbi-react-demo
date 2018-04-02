import React, { Component } from 'react';

import "./DashboardContainer.css";
import webService from '../../helpers/webservice';

import Dashboard from './Dashboard/Dashboard';
import DashboardHeader from './DashboardHeader/DashboardHeader';

const countries = require('country-data').countries;

class DashboardContainer extends Component{

    constructor(props){
        super(props);
        this.changeCountry = this.changeCountry.bind(this);
        this.state = {
            countryFilter: ''
        }
    }
    changeCountry(value){
        let state = this.state;
        state.countryFilter = value.length > 2 ? value : '';
        this.setState(state);
    }
     
    render(){
        return(
            <div className={'h-100'}>
                <DashboardHeader title='Dashboard' onCountryChange={this.changeCountry}/>
                {this.state.countryFilter.length > 0 ? 
                <Dashboard data={countries.all.map((c) => {
                    if(c.name.toLowerCase().includes(this.state.countryFilter.toLowerCase())){
                        return c;
                    }
                })}/> : ''
                }
            </div>
        )
    }
}
export default DashboardContainer;