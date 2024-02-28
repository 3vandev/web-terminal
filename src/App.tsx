import React, { useState } from 'react';
import { readCommand } from './commandHandler/commandReader';

let commandOutputs:string[] = [
  ""
]

function App() {
  const [cmd, setCmd] = useState("")

  const [displayCmd, setDisplayCmd] = useState(commandOutputs.map(command => <p>{command}</p>))

  const user:string = "user"
  let directory:string = "~"
  
  const commandRun = () => {
    commandOutputs.push(readCommand(cmd));
    
    setDisplayCmd(commandOutputs.map(command => <p>{command}</p>))
  }

  return (
    <div className="portfolio">

    <div className="terminal">
        {displayCmd}
    </div>

    <div className="InputField">
      <p className='prompt'>[{user}@evans-portfolio {directory}]$</p>
      <input placeholder='□' onChange={e => setCmd(e.target.value)}></input>

      <button onClick={commandRun} onKeyDown={e => {
        if(e.key != "Enter") return;
        commandRun
      }}>Run</button>
    </div>

   </div>
  )
}

export default App
