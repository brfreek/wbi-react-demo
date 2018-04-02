import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBody, Badge} from 'reactstrap';
import LineChart from '../../Charts/LineChart/LineChart';
import {IoAndroidArrowUp, IoAndroidArrowDown} from 'react-icons/lib/io';

import { parseNumber } from '../../../utils';

import './LineCard.css';

const LineCard = props =>
    <Card>
        <CardBody className={'bg-secondary mb-1'}>
            <div className={'d-flex justify-content-between'}>
                <strong className={'text-light mb-1'}>{props.title}</strong>
                {parseNumber.isPositive(props.difference) ? 
                <Badge color='success' className={'align-items-center d-flex'}><strong><IoAndroidArrowUp /></strong>{props.difference}%</Badge> :
                <Badge color='danger' className={'align-items-center d-flex'}><strong><IoAndroidArrowDown /></strong>{props.difference}%</Badge>}
            </div>
            <h2 className={'text-light'}>€{props.value}</h2>
        </CardBody>
        <div>
            <LineChart data={props.data} color={"#B8D1FF"} />
        </div>
    </Card>

LineCard.propTypes = {
    title: PropTypes.string.isRequired,
    difference: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    data: PropTypes.array
}

export default LineCard;