import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Search from '../views/search';
import Persons from '../views/persons';

export default class MainNav extends Component {
    render() {
        return (
            <div>
                <header>
                    <NavLink to='/search' className='nav'>搜索</NavLink>
                    <NavLink to='/persons' className='nav'>人群</NavLink>
                </header>
                <Route path='/search' component={Search}></Route>
                <Route path='/persons' component={Persons}></Route>
            </div>
        )
    }
}