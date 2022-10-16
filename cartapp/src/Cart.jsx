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
        if(this.state.count=== 0){
            return
        }
          this.setState((prev)=>{
            return{count : prev.count-1}
          })
    }
    inc(){
        // set State type 1    //If previous state has reveletively no dependancy so use this .. Like for changing the name we dont need to know the prev state...
        // this.setState({
        //     count: this.state.count+1
        // })

        // Set State type 2
        // If current state depends on the prev state use this : eg.. here current state =  prev state +1  soo here prev state is required
        this.setState((prevState)=>{
            return {count: prevState.count+1}
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