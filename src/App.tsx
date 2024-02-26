import React, { useState } from 'react';

let commandOutputs:string[] = [
  "Welcomes to bashzzz"
]

function App() {
  const [cmd, setCmd] = useState("")

  const [displayCmd, setDisplayCmd] = useState()

  const user:string = "user"
  let directory:string = "~"

  return (
    <div className="portfolio">

    <div className="terminal">
        {displayCmd}
    </div>

    <div className="InputField">
      <p>[{user}@evans-portfolio {directory}]$</p>
      <input onChange={e => setCmd(e.target.value)}></input>

      <button onClick={() => {
        commandOutputs.push(cmd)
        
        setDisplayCmd(commandOutputs.map(command => <p>{command}</p>))
      }}>Exec</button>
    </div>

   </div>
  )
}

export default App
