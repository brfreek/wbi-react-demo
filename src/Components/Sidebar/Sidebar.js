import React, { Component } from 'react';
import MyCard from '../Card/Card';

class Sidebar extends Component{
    render(){
        return(
            <div>
                <MyCard title={'Filters'} children={'Hey'} />
            </div>
        )
    }
}

export default Sidebar;