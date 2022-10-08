import React from 'react'

export default class Cart extends React.Component{
    constructor(props){
       super();
       this.state={
           item: props.itm,    // passing props
           count:props.count,
           price:props.price

       }
    }
    dec(){
        this.state.count > 0 ? 
        this.setState({
            count: this.state.count-1
        })
        :
        this.setState({})
    }
    inc(){
        this.setState({
            count: this.state.count+1
        })
        
    }

    render(){
        const obj = this.state;
        return (
            <div className='CartCard'>
                <div className='leftSection' style={styles.img}>
                </div>
                <div className='rightSection'>
                      <h3 style={{color:'red', fontSize:20}}>{obj.item}</h3>
                      <h4 style={{color:'grey'}}>Price: {obj.price}</h4>
                      <h4 style={{color:'grey'}}>Quantity:{obj.count}</h4>
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