import React from 'react';
import {Nav, NavItem, NavLink} from 'reactstrap';

const Navigation = props =>
    <Nav>
        {props.items.map(c => (
            <NavItem key={c.title}>
                <NavLink color="light" className={'text-white'} href={c.path}> {c.title} </NavLink>
            </NavItem>
        ))}
    </Nav>

export default Navigation;