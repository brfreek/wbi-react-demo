import React, { Component } from 'react';
import { Card, CardBody, CardTitle} from 'reactstrap';

const MyCard = props => 
    <Card>
        <CardBody>
        <CardTitle>{props.title}</CardTitle>
            {props.children}
            {props.actions}
        </CardBody>
    </Card>

export default MyCard;