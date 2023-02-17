import {Component} from 'react'
import './index.css'

class RandomNumber extends Component {
  state = {number: 0}

  onButtonClick = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    console.log(randomNumber)

    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="app-container">
        <div className="inner-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.onButtonClick} type="button" className="btn">
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumber
