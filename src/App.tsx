import React, { useState } from 'react';
import { readCommand } from './commandHandler/commandReader';

let commandOutputs:any[] = [
  // Default displayed command output
  <>
    <h1>Welcome to React OS</h1>
    <h3>Version: 0.1.3</h3>
    <p>Type help for a list of commands or help [command]</p>
  </>
]

function App() {
  // Stores the current typed command
  const [cmd, setCmd] = useState("")

  // Stores the html display output
  const [displayCmd, setDisplayCmd] = useState(commandOutputs.map(command => <p>{command}</p>))

  // Users
  const user:string = "user";
  let directory:string = "~"
  
  // Called when command is ran
  const commandRun = () => {
    // Add the typed prompt to the output
    commandOutputs.push(<p className='prompt'>[{user}@machine {directory}]$ {cmd}</p>);

    // The readCommand(cmd) returns the output of the command
    commandOutputs.push(readCommand(cmd))
    
    // Refresh the terminal
    setDisplayCmd(commandOutputs.map(command => <p>{command}</p>))
  }

  return (
    <div className="portfolio">

     <div className="terminal">{displayCmd}</div>
     
      <div className="InputField">

       <p className='prompt'>[{user}@machine {directory}]$</p>
       <input placeholder='□' onChange={e => setCmd(e.target.value)}></input>

       <button onClick={commandRun}>Run</button>
      </div>
    </div>
  )
}

export default App
