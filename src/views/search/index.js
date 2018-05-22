import React, { Component } from 'react';
import './index.less'

import SearchInput from '../components/SearchInput';
import SearchList from '../components/SearchList';
class Search extends Component {
    constructor(props) {
        super(props);//必须写props
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
        this.setState({
            seVal: value,
            listData: [33, 2, 3]
        })
    }
}
export default Search;