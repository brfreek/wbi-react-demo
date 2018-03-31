import React, { Component } from 'react';

import "./DashboardContainer.css";
import webService from '../../helpers/webservice';

import Dashboard from './Dashboard/Dashboard';
import DashboardHeader from './DashboardHeader/DashboardHeader';

class DashboardContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            dashboard: {
                country: '',
                loans: []
            }
        }
    }
    changeDate(startDate, endDate){
        console.log("New start and end date: " + startDate + ' ' + endDate);
    } 
    changeCountry(countryCode){
        console.log("CountryCode: " + countryCode);

        webService.getLoansForCountry(countryCode).
            then((result) => {
                console.log(JSON.stringify(result));
                let state = this.state;
                let ent = state.entity        
                ent.country = countryCode;
                ent.loans = result;
                this.setState(state);
            }).catch((error) => {
                alert(error);
            }).bind(this);
    }

    render(){
        return(
            <div>
                <DashboardHeader title='Dashboard' onDateRangeChange={this.changeDate} onCountryChange={this.changeCountry}/>
                <Dashboard loans={this.state.entity}/>
            </div>
        )
    }
}
export default DashboardContainer;