import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {InputGroup, InputGroupAddon, Input, Popover, PopoverBody, PopoverHeader, Button} from 'reactstrap';
import { DateRange as DateRangeCalendar } from 'react-date-range';

import {formatDate} from '../../../utils';
class DateRange extends Component{
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.changeDates = this.changeDates.bind(this);
        this.state = {
            fromDate: props.fromDate,
            toDate: props.toDate,
            popOver: false
        }
    }
    toggle(){
        var state = this.state;
        state.popOver = !state.popOver;
        this.setState(state);
    }
    changeDates(range){
        const startDate = range.startDate.toDate();
        const endDate = range.endDate.toDate();
        var state = this.state;
        startDate ? state.fromDate = startDate : state.fromDate;
        endDate ? state.endDate = endDate : state.fromDate;
        this.props.onChange(startDate, endDate);
        this.setState(state);
    }
    render(){
        const dateString = formatDate.getDate(this.state.fromDate) + ' - ' + formatDate.getDate(this.state.toDate);
        return(
            <div>
                <InputGroup className={'w-auto'}>
                    <Input type="text" name="dateRange" id="dateRange" value={dateString} disabled/>
                    <InputGroupAddon addonType="append"><Button onClick={this.toggle} id="popOver1">Date</Button></InputGroupAddon>
                </InputGroup>
                <Popover placement="bottom" isOpen={this.state.popOver} target="popOver1" toggle={this.toggle}>
                    <PopoverHeader>Date range</PopoverHeader>
                    <PopoverBody>
                        <DateRangeCalendar
                            onInit={this.changeDates}
                            onChange={this.changeDates}
                            />
                    </PopoverBody>
                </Popover>
            </div>            
        )
    }
}

DateRange.propTypes = {
    fromDate: PropTypes.instanceOf(Date),
    toDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired
}

export default DateRange;