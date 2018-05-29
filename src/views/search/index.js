import React, { Component } from 'react';
import './index.less'
import { getSearchList } from '../../api/api.js';
import SearchInput from '../components/SearchInput';
import SearchList from '../components/SearchList';
import Page from '../../components/Page';
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
                <Page conCount='200' pageCount='20' current='1' goFn={this.go.bind(this)} ref="pages"></Page>
            </div>
        )
    }
    //翻页接受函数
    go(pageNum){
        console.log(pageNum);
    }
    toSearch(value) {
        //this.props.history.push('/persons')  路由跳转
        getSearchList().then(res => {
            this.setState({
                seVal: value,
                listData: res.data.data.dataInfo
            },()=>{
                this.refs.pages.newSearch();//重新查询
            })
        });
        //有依赖关系的请求
        // postLogin('/biPc/login/dologin.gm', param).then(data => {
        //     if (data)
        //         getSearchList().then(res => {
        //             this.setState({
        //                 seVal: value,
        //                 listData: res.data.data.dataInfo
        //             })
        //         });
        // })
    }
}
export default Search;