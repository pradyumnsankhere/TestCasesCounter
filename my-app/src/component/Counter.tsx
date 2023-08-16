import React, { Component } from "react";

interface CounterClassProps {
  count: number;
}

class Counter extends Component<{}, CounterClassProps> {
  constructor(props: CounterClassProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  restHandle = () => {
    this.setState({ count: 0 });
  };
 
   
  render() {
    return (
      <div>
        <p data-testid="counter-value">Count: {this.state.count}</p>
        <button onClick={this.increment} data-testid="Increment">
          Increment
        </button>
        <button onClick={this.decrement} data-testid="Decrement">
          Decrement
        </button>
        <button onClick={this.restHandle} data-testid="Reset">
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
