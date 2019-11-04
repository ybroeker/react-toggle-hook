# react-toggle-hook

## Usage

```
import React from 'react'
import {useToggle} from "@ybroeker/react-toggle-hook";

const App = () => {
  const [state, enable, disable, toggle] = useToggle()

  return (
    <div className="App">

      <span>Current state: {state ? 'true' : 'false'}</span>

      <button onClick={enable}>Enable</button>
      <button onClick={disable}>Disable</button>
      <button onClick={toggle}>Toggle</button>

      <input type="checkbox" checked={state} onChange={toggle}/>
    </div>
  )
}

```
