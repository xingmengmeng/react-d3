import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../views/login';
import MainNav from './hearder';

import './index.less';
export default class RouterMap extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <MainNav></MainNav>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}