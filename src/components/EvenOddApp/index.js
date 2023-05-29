import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {randomNumber: 0, evenOdd: 'Even'}

  const evenAndOdd = () => {
    const evenOd=null;
    const num = Math.floor(Math.random() * 100)
    if(num%2===0){
      evenOd="Even"
    }else{
        evenOd="Odd"
    }
    this.setState({randomNumber:num,evenOdd:evenOd})
  }

  render() {
    const {randomNumber, evenOdd} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="head">Count {randomNumber}</h1>
          <p className="para1">Count is {evenOdd}</p>
          <button className="button" type="button" onClick={this.evenAndOdd}>
            Increment
          </button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
