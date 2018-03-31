import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'reactstrap';

import './DashboardHeader.css';

import DateRange from '../../DatePicker/DateRange/DateRange';
import CountryPicker from '../../CountryPicker/CountryPicker';
import {parseDate} from '../../../utils';

class DashboardHeader extends Component{
    constructor(props){
        super(props);

        this.onCountryChange = this.onCountryChange.bind(this);
    }
    onCountryChange(event){
        if(event.target.value){
            this.props.onCountryChange(event.target.value);
        }
    }
    render(){
        return(
            <div className={'d-flex justify-content-center  bg-primary'}>
                <div className={'inner pt-3 pb-3'}>
                    <div>
                        <h3 className={'text-light'}>{this.props.title}</h3>
                    </div>
                    <div className={'d-flex'}>
                        <CountryPicker onChange={this.onCountryChange}/>
                        <DateRange fromDate={new Date()} toDate={new Date(parseDate.addDays(new Date(), 1))} onChange={this.props.onDateRangeChange}/>
                    </div>
                </div>
            </div>
        )
    }
}

DashboardHeader.propTypes = {
    onDateRangeChange: PropTypes.func.isRequired,
    onCountryChange: PropTypes.func.isRequired
}

export default DashboardHeader;