import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Echo from './Echo'


class App extends Component {
  render() {
    return (
      <div>
        <Echo original="Hello"/>
      </div>
    );
  }
}

export default App;

// Under the hood
// When you render <Echo original="Hello" /> here's what happens:
//
// The constructor is called, and passed in the object {original: "Hello"}
// This Component's state is set to {greeting: "Hello"}
// The event handler named inputWasChanged is bound to the Component, so it has access to this.setState
// The render method is called...
// Which then creates a new EchoInput, passing it two things:
// The word "Hello" (as a prop named text)
// A reference to the event handler function, this.inputWasChanged
// The EchoInput function returns the <div> React Element, and react renders it all to the page
// When you change the text of the input to say "Goodbye":
//
// EchoInput's handler function is called (which is, in fact, the inputWasChanged function in the parent)
// inputWasChanged calls setState, which causes Echo to re-render
// Echo calls render...
// Which creates a new EchoInput, and passes it two things:
// The word "Goodbye" (as a prop named text)
// A reference to the event handler function, this.inputWasChanged
// The EchoInput function returns the <div> React Element, and react renders it all to the page
