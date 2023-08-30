import React from'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5
    }; 
  }

  render() { // the "this" here will point to the current component instance
    return (
      <div className="counter">
        <button>Counter: {this.props.count}</button>
        <span>{this.state.count}</span> 
        <button>Counter: {this.props.count}</button>
      </div>
    );
  }
}

export default Counter;
