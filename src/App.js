import React, { Component } from 'react';

class App extends Component {
  state = {
    input: ''
  }
  handleClick = (e) => {

    if (e === "=") {
      this.calculate()
    } else if (e === "CE") {
      this.backspace()
    } else if (e === "C") {
      this.reset()
    } else {
      this.setState({
        input: this.state.input + e
      })
    }
  }

  calculate = () => {
   if (this.state.input)
      try {
        this.setState({
          input: eval(this.state.input)
        })
      } catch (e) {
        this.setState({
          input: 'error'
        })
      }
  }
  reset = () => {
    this.setState({
      input: ''
    })
  }
  backspace = () => {
    if (this.calculate())
      this.setState({
        input: this.state.input.slice(0, -1)
      })
  }
  render() {
    return (
      <div className="App">
        <div className="container center red-text">
          <h2>Basic Calculator</h2>
          <input type="text" value={this.state.input} disabled /> <br />
          <div className="row">
          <button className="col s3 " name="7" onClick={e => this.handleClick(e.target.name)}>7</button>
          <button className="col s3" name="8" onClick={e => this.handleClick(e.target.name)}>8</button>
          <button className="col s3" name="9" onClick={e => this.handleClick(e.target.name)}>9</button>
          <button className="col s3" name="/" onClick={e => this.handleClick(e.target.name)}>/</button>
          </div>
          
          <div className="row">
          <button className="col s3"name="4" onClick={e => this.handleClick(e.target.name)}>4</button>
          <button className="col s3" name="5" onClick={e => this.handleClick(e.target.name)}>5</button>
          <button className="col s3" name="6" onClick={e => this.handleClick(e.target.name)}>6</button>
          <button className="col s3" name="*" onClick={e => this.handleClick(e.target.name)}>*</button>
          </div>

          <div className="row">
          <button className="col s3" name="1" onClick={e => this.handleClick(e.target.name)}>1</button>
          <button className="col s3" name="2" onClick={e => this.handleClick(e.target.name)}>2</button>
          <button className="col s3" name="3" onClick={e => this.handleClick(e.target.name)}>3</button>
          <button className="col s3" name="-" onClick={e => this.handleClick(e.target.name)}>-</button>
          </div>

          <div className="row">
          <button className="col s4"  name="." onClick={e => this.handleClick(e.target.name)}>.</button>
          <button  className="col s4" name="0" onClick={e => this.handleClick(e.target.name)}>0</button>
          <button  className="col s4" name="=" onClick={e => this.handleClick(e.target.name)}>=</button>
          </div>
          
          <div className="row">
          <button className="col s6" name="C" onClick={e => this.handleClick(e.target.name)}>C</button>
          <button className="col s6" name="CE" onClick={e => this.handleClick(e.target.name)}>CE</button>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
