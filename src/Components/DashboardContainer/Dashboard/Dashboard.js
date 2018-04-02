import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import {countries} from 'country-data';
import anime from 'animejs';

import "./Dashboard.css";
import cardData from "../../../helpers/cardData";

import Sidebar from '../../Sidebar/Sidebar';
import CountryCardContainer from '../../Card/CountryCardContainer/CountryCardContainer';
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
            <div className={'d-flex justify-content-center h-100'}>
                <div className={'inner pt-3 pb-3 h-100'}>
                    <Row className={'w-100 h-100'}>
                        <Col md="12">
                            <div className={'grid-container'}>
                            {this.props.data.map((c) => {
                                return c && c.name ? 
                                    <CountryCardContainer countryName={c.name} countryAlpha3Code={c.alpha3} className={'grid-item'}/>
                                : null;
                            })}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Dashboard;