import React, { Component } from 'react';
class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        }
    }
    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.change.bind(this)} onKeyUp={this.search.bind(this)} />
        )
    }
    change(e) {
        this.setState({
            value: e.target.value
        })
    }
    search(e) {
        if (e.keyCode === 13) {
            this.props.fn(this.state.value);
        }
    }
}
export default SearchInput;