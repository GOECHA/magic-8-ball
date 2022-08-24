import React, { Component } from 'react';
import Fortune from '../Fortune/Fortune'
import './EightBall.css'
import{ ShakeHard } from 'reshake';

class EightBall extends Component{
  constructor () {
    super();
    this.state ={
      fortune: [`yes`, `no`, `maybe?`, `try again`, `I don't know, but somebody might`],
      result: ``
    }
  }

 

 shake = ()=> {
  console.log(`shake`)
  let newFortune = this.state.fortune[Math.floor(Math.random() * this.state.fortune.length)]
  this.setState({result: newFortune})
  this.reset({result: `yes`})
}



render(){

  return (
    <div className="eight-ball-container"> 
    <h1>Ask me a question</h1>
    <ShakeHard>
       <div className="eight-ball" onClick={this.shake}>
        <div className="ball-shine"></div>
        <div className="fortune-container">
          <Fortune result={this.state.result} /> 
        </div>
       </div>
       </ShakeHard>
      {/* <button className="shake-btn" onClick={this.shake}>CLick Me!</button> */}
     </div>
    )
   }
  }
  
  
  export default EightBall;