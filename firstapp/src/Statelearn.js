import React from 'react';

export default class Statelearn extends React.Component{

    constructor(){
        super();
        this.state={
            name: 'Shubham',
            position: 'Developer',
            Clicks: 0,
            txt: 'Sheaahh No one has Clicked yet'
        }
    }
     
    UpdateSt(){
       this.setState({
        Clicks: this.state.Clicks+1,
        txt: 'Hey!! Someone has Clicked'
       })
    }

    render(){
        return (
            <div>
                <h3>I am {this.state.name}</h3>
                <h3>I am a {this.state.position}</h3>
                <h2>Lets see the Clicks count</h2>
                <h3>This click count is: {this.state.Clicks}</h3>
                <h4>{this.state.txt}</h4>
                <button onClick={()=>{this.UpdateSt()}}>Click to Update</button>
            </div>
        );
    }
}