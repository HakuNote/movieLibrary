import { useState, useEffect } from 'react'
import Button from './Button'
import styles from './App.module.css'

const Hello = () => {
  const byFn = () => {
    console.log("bye :(")
  }
  const hiFn = () => {
    console.log("created :)")
    return byFn
  }
  useEffect(hiFn, [])

  return <h3>Hello</h3>
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing((prev) => !prev)




  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App
