import React from "react";

export default class Counter extends React.Component {

  state = {
    count: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.increment,
        };
      });
    }, this.props.interval);
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
      </>
    );
  }
}
