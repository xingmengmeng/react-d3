import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Login from '../views/login';
import Search from '../views/search';
import Persons from '../views/persons';

import './index.less';
export default class RouterMap extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <NavLink to='/search' className='nav'>搜索</NavLink>
                        <NavLink to='/persons' className='nav'>人群</NavLink>
                        <NavLink to='/login' className='nav'>登录</NavLink>
                    </header>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/search' component={Search}></Route>
                        <Route path='/persons' component={Persons}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}