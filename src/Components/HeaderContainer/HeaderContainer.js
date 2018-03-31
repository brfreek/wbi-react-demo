import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

import Navigation from './Navigation/Navigation';

class HeaderContainer extends Component{
    
    render(){
        const navitems = [
            {title: 'Dashboard', path: '/'},
            {title: 'Forecast', path: ''},
            {title: 'Customers', path: ''}
        ]
        return(
            <Navbar color="secondary" dark className={'justify-content-center'}>
                <div className={'inner'}>
                    <NavbarBrand href="/">WorldBank</NavbarBrand>
                    <Navigation items={navitems} />
                </div>
            </Navbar>
        )
    }
}

export default HeaderContainer;
