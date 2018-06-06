import React, { Component } from 'react';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';

import Search from '../views/search';
import Persons from '../views/persons';
import SliderPage from '../views/Slider';

export default class MainNav extends Component {
    render() {
        return (
            <div>
                <header>
                    <NavLink to='/search' className='nav'>搜索</NavLink>
                    <NavLink to='/persons' className='nav'>人群</NavLink>
                    <NavLink to='/sliderPage' className='nav'>轮播</NavLink>
                </header>
                <Switch>
                    <Route path='/search' component={Search}></Route>
                    <Route path='/persons' component={Persons}></Route>
                    <Route path='/sliderPage' component={SliderPage}></Route>
                    <Redirect to="/search" /> 
                </Switch>
                {/* 用redirect跳转相同名称的路由 必须用switch */}
            </div>
        )
    }
}