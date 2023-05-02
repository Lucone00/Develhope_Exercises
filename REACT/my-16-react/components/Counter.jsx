import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.increment,
        };
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <h1>Counter: {this.state.count}</h1>
      </>
    );
  }
}
