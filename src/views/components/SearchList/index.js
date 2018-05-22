import React,{Component} from 'react';
export default class SearchList extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <ul>
                {this.props.list.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul> 
        )
    }
}