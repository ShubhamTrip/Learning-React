import React from 'react'

export default class ClassComp extends React.Component{
    render(){
        return (
            <h1>Hello {this.props.txt} with Props</h1>
        );
    }
}