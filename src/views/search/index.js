import React, { Component } from 'react';
import './index.less'
import { getSearchList, postLogin } from '../../api/api.js';
import SearchInput from '../components/SearchInput';
import SearchList from '../components/SearchList';
class Search extends Component {
    constructor() {
        super();//必须写super
        this.state = {
            seVal: '',
            listData: [],
        }
    }
    render() {
        return (
            <div>
                <SearchInput value="" fn={this.toSearch.bind(this)} />
                当前查询内容为：{this.state.seVal}
                <SearchList list={this.state.listData}></SearchList>
            </div>
        )
    }
    toSearch(value) {
        //this.props.history.push('/persons')  路由跳转
        let param = {
            "userName": "xingmengmeng",
            "userPwd": "12345678",
            "isRemember": true,
            "isCookerLogin": false
        };
        //有依赖关系的请求
        postLogin('/biPc/login/dologin.gm', param).then(data => {
            if (data)
                getSearchList().then(res => {
                    this.setState({
                        seVal: value,
                        listData: res.data.data.dataInfo
                    })
                });
        })

    }
}
export default Search;