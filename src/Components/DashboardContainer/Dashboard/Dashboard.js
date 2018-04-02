import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import {countries} from 'country-data';
import anime from 'animejs';

import "./Dashboard.css";
import cardData from "../../../helpers/cardData";

import Sidebar from '../../Sidebar/Sidebar';
import LineCard from '../../Card/LineCard/LineCard';
import {parseNumber} from '../../../utils';

class Dashboard extends Component{
    constructor(props){
        super(props);

        this.getDifference = this.getDifference.bind(this);
    }
    getDifference(arr){
        return Math.round((arr[arr.length-2].y/arr[0].y));
    }
    componentDidMount(){
        anime({
            targets: '.gridcontainer .grid-item',
            translateY: 100,
            direction: 'alternate',
            loop: false,
            delay: function(el, i, l){
                return i * 10
            }
        });
    }
    
    render(){
        return(
            <div className={'d-flex justify-content-center'}>
                <div className={'inner pt-3 pb-3'}>
                    <Row className={'w-100'}>
                        <Col md="9">
                            <div className={'grid-container '}>
                                {this.props.data ? this.props.data.map(c => {
                                    if(!c){
                                        return;
                                    }
                                    const years = c.years;
                                    years.slice(0, -1);
                                    return (<div className={'grid-item animated fadeIn'} key={c.country}><LineCard title={c.country} difference={this.getDifference(years)} value={parseNumber.formatCurrency(years[years.length-2].y)} data={years} /></div>)
                                }) : null}
                            </div>
                        </Col>
                        <Col md="3">
                            <Sidebar />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Dashboard;