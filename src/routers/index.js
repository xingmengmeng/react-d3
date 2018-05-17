import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Login from '../views/login';
import Search from '../views/search';

export default class RouterMap extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavLink to='/Search' className='nav'>搜索</NavLink>
                    <NavLink to='/Login' className='nav'>登录</NavLink>
                    <Switch>
                        <Route path='/Login' component={Login}></Route>
                        <Route path='/Search' component={Search}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}