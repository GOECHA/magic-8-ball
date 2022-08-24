import React, { Component } from 'react';
import Header from '../Header/Header'
import Eightball from '../EightBall/EightBall';
import './App.css';


class App extends Component {
    constructor (){
    super();
    // this.state = {
    //     fortune: ['yes', 'no', 'try again later', `maybe`       
    //     ]
    // }
}
newFortune = () => {
  this.setState({ fortune: [...this.state.fortune] });
}

render(){
    return (
        <main className = 'App'>
            <Header />
            <Eightball fortune={this.state} />     
        </main>
    )
  }
}

export default App;