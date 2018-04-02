import React, { Component } from 'react';
import PropTypes from 'prop-types';

const noUiSlider = require('nouislider');

class MultiRangeSlider extends Component{
    componentDidMount(){
        var slider = document.getElementById('slider');
        noUiSlider.create(slider,{
                start: [this.props.start, this.props.end],
                range: {
                    'min': this.props.min ? this.props.min : 0,
                    'max': this.props.max ? this.props.max : 0
                }
            }
        );
        slider.noUiSlider.on('end', function(event){
            console.log(JSON.slider(event));
        });
    }
    onRangeChange(event){

    }
    render(){

        return(
            <div id='slider' style={{width: '300px'}} />
        )
    }
}

MultiRangeSlider.propTypes = {
    start: PropTypes.number,
    end: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onChange: PropTypes.func,
}

export default MultiRangeSlider;