import React from 'react'

const EchoInput = ({ text, handler }) => (
  <div className="container">
    <p>
      <input
        value={ text }
        onChange={ handler }
        />
    </p>
    { text }
  </div>
)

export default EchoInput
