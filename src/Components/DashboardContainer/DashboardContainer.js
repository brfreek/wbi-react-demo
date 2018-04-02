import React, { Component } from 'react';

import "./DashboardContainer.css";
import webService from '../../helpers/webservice';

import Dashboard from './Dashboard/Dashboard';
import DashboardHeader from './DashboardHeader/DashboardHeader';

const data = require('../../data/dataset.json');

class DashboardContainer extends Component{

    constructor(props){
        super(props);
        this.changeCountry = this.changeCountry.bind(this);
        this.filterData = this.filterData.bind(this);
        this.state = {
            countryFilter: ''
        }
    }

    componentWillMount(props){
        
        for(let i = 0; i < data.length; i++){
            let dataItem = data[i];
            dataItem.years.map((c, i) => {
                c.year = 1962 + i;
            });
        }

    }
    changeCountry(value){
        let state = this.state;
        state.countryFilter = value;
        this.setState(state);
    }

    filterData(){

        const list = data.filter((c) => {
            if(c.country.toLowerCase().includes(this.state.countryFilter.toLowerCase())){
                return c;
            }
        });
        console.log(JSON.stringify(list));
        return list;
    }

     
    render(){
        return(
            <div className={'h-100'}>
                <DashboardHeader title='Dashboard' onCountryChange={this.changeCountry}/>
                {this.state.countryFilter.length > 0 ? 
                <Dashboard data={this.filterData()}/> : ''
                }
            </div>
        )
    }
}
export default DashboardContainer;