import React from 'react';
import {Input} from 'reactstrap';
import PropTypes from 'prop-types';
import MdSearch from 'react-icons/lib/md/search';
import FaSpinner from 'react-icons/lib/fa/spinner';

import './InputControlBig.css';

const InputControlBig = (props) => 
    <div className={'container'}>
        <Input className={'input-control-big'} type={props.type} placeholder={props.placeholder} autoFocus={true} onChange={props.onChange}/>
        {/* {props.typing ? <FaSpinner className={'input-search searching'} />: <MdSearch className={'input-search'} />} */}
        <MdSearch className={'input-search'} />
        
    </div>

InputControlBig.defaultProps = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    typing: PropTypes.bool
}

export default InputControlBig