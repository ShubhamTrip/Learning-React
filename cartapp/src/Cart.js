import React from 'react'

export default class Cart extends React.Component{
    constructor(){
       super();
       this.state={
           count:0
       }
    }
    dec(){
        // this.state.count > 0 ? 
        this.setState({
            count: this.state.count-1
        })
        // :
        // null
    }
    inc(){
        this.setState({
            count: this.state.count+1
        })
        
    }

    render(){
        return (
            <div className='CartCard'>
                <div className='leftSection' style={styles.img}>
                </div>
                <div className='rightSection'>
                      <h3 style={{color:'red', fontSize:20}}>Phone</h3>
                      <h4 style={{color:'grey'}}>Price: {}</h4>
                      <h4 style={{color:'grey'}}>Quantity:{this.state.count}</h4>
                      <div className='buttonsec'>
                          <div className='but' onClick={()=>{this.dec()}}>-</div>
                          <div className='but' onClick={()=>{this.inc()}}>+</div>
                      </div>
                </div>
            </div>
        );
    }
}

const styles ={
    img :{
        height: 200,
        width: 150,
        margin: 10,
        background: 'grey',
    },
    
}