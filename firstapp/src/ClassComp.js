import React from 'react'

export default class ClassComp extends React.Component{
    constructor(){
        super();
        this.state={
            //  text: this.props.txt,
             count:0,
             
        }
    }

    componentDidUpdate(){
        console.log('update')
    }
    render(){
        console.log('render');
        return (
            <div>
                {/* <h1>Hello {this.state.text} with Props</h1> */}
               <button onClick={()=>{this.setState({count:1})}}></button>
            </div>
        );
    }
}