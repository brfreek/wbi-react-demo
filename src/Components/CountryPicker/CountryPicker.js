import React, { Component } from 'react';
import {countries} from 'country-data';
import {Input} from 'reactstrap';

const CountryPicker = props => 
    <Input type="select" onChange={props.onChange} style={{width: '200px', marginRight: '1rem'}}>
        <option value={null}>-- Select Country --</option>
        {countries.all.map(c => {
            return <option key={c.alpha2} value={c.alpha2}>{c.name}</option>
        })}
    </Input>

export default CountryPicker;