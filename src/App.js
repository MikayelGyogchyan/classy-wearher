import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
    };

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    // this.setState({
    //   count: this.state.count - 1
    // });
    this.setState(curState => {
      return { count: curState.count - 1 }
    });
  }
  
  handleIncrement() {
    this.setState(curState => {
      return { count: curState.count + 1 }
    });
  }

  render() {
    // the "this" here will point to the current component instance
    const date = new Date('june 21 2027')
    date.setDate(date.getDate() + this.state.count)
    
    return (
      <div className="counter">
        <button onClick={this.handleDecrement}>-</button>
        <span>{date.toDateString()} [{this.state.count}]</span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default Counter;
