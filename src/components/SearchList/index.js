import React,{Component} from 'react';
export default class SearchList extends Component{
    render(){
        return(
            <ul>
                {this.props.list.map((item, index) =>
                    <li key={index}>{item.vcZxtmc}</li>
                )}
            </ul> 
        )
    }
}