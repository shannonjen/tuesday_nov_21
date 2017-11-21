import React from 'react'

class Timer extends React.Component {

  state = { secondsElapsed: 0 }

  tick = () => {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

export default Timer





// React instantiates the Timer class
// It sets the initial state (via a class property) to { secondsElapsed: 0 }
// Then React calls componentDidMount, which sets up an interval
// Every second, it calls the Timer's tick method (which was created via a class property)
// tick calls setState
// setState calls render
// React compares the React element created by Render with what's in the DOM
// If there are any changes, it updates the DOM
