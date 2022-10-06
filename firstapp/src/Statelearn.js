import React from 'react';

export default class Statelearn extends React.Component{

    constructor(){
        super();
        this.state={
            name: 'Shubham',
            position: 'Developer',
            Clicks: 0,
            txt: 'Sheaahh No one has Clicked yet',
            switch: 'ON',
            swtxt: 'Switch OFF',
            show: true,
        }
    }
     
    UpdateSt(){
       this.setState({
        Clicks: this.state.Clicks+1,
        txt: 'Hey!! Someone has Clicked'
       })
    }

    UpdateSwitch(){
        this.state.swtxt=='Switch OFF'? this.setState({
            swtxt:'Switch On',
            switch: 'OFF'
        }): this.setState({
            swtxt:'Switch OFF',
            switch: 'ON'
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
                <hr/>

                <h3>{this.state.swtxt}</h3>
                <button onClick={()=>{this.UpdateSwitch()}}>{this.state.switch}</button>
                <br/>
                <button onClick={()=>{this.setState({show: !this.state.show})}}>Click Me</button>
                {this.state.show? <h3>Visible Now Click to Hide</h3>:null}

            </div>
        );
    }
}