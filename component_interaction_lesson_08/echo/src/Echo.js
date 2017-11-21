import React from 'react'
import EchoInput from './EchoInput'





class Echo extends React.Component {

  constructor(props) {
    super(props)
    this.state = { greeting: props.original }
  }

  inputWasChanged = (e) => {
    this.setState({greeting: e.target.value})
  }

  render() {
    return <EchoInput text={ this.state.greeting } handler={ this.inputWasChanged } />
  }

}


// class Echo extends React.Component {
//
//   constructor(props) {
//     super(props)
//     this.state = { greeting: props.original }
//   }
//
//   inputWasChanged = (e) => {
//     this.setState({greeting: e.target.value})
//   }
//
//   render() {
//     return (
//       <div className="container">
//         <p>
//           <input
//             value={ this.state.greeting }
//             onChange={ this.inputWasChanged }
//             />
//         </p>
//         { this.state.greeting }
//       </div>
//     )
//   }
//
// }


export default Echo
