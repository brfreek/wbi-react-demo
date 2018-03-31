import React, { Component } from 'react';
import {Row, Col} from 'reactstrap';
import {countries} from 'country-data';

import "./Dashboard.css";
import cardData from "../../../helpers/cardData";

import Sidebar from '../../Sidebar/Sidebar';
import LineCard from '../../Card/LineCard/LineCard';

class Dashboard extends Component{
    createFakeData(){
        // This function creates data that doesn't look entirely random
        const data = []
    
        for (let x = 0; x <= 30; x++) {
          const random = Math.random();
          const temp = data.length > 0 ? data[data.length-1].y : 50;
          const y = random >= .45 ? temp + Math.floor(random * 20) : temp - Math.floor(random * 20);
          data.push({x,y})
        }
        return data;
    }
    
    render(){
        return(
            <div className={'d-flex justify-content-center'}>
                <div className={'inner pt-3 pb-3'}>
                    <Row className={'w-100'}>
                        <Col md="9">
                            <div className={'grid-container'}>
                                {this.props.data.map(c => {
                                    return (<div className={'grid-item'} key={c.title}><LineCard title={c.title} difference={c.difference} value={c.value} data={this.createFakeData()} /></div>)
                                })}
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