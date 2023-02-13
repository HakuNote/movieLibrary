import { useState } from 'react'


function App() {



  const MinutesToHours = () => {
    const [amount, setAmount] = useState(0)
    const [inverted, setInverted] = useState(false)
  
    const onChange = (event) => {
      setAmount(event.target.value)
    }
    const reset = () => {
      setAmount(0)
    }
    const onInvert = () => {
      setInverted(current => !current)
      reset()
    }

    return (
      <div>
        <div>
          <label htmlFor="minutes">Minutes: </label>
          <input
            value={inverted ? amount * 60 : amount}
            id="minutes"
            placeholder="Minutes"
            type="number"
            onChange={onChange}
            disabled={inverted}
          />
        </div>

        <div>
          <label htmlFor="hours">Hours: </label>
          <input
            value={inverted ? amount : Math.round(amount / 60)}
            id="hours"
            placeholder="Hours"
            type="number"
            onChange={onChange}
            disabled={!inverted}
          />
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onInvert}>{inverted ? "Turn Back":"Invert"}</button>
      </div>
    )
    
  }

  const KmToMiles = () => {
    

    const [amount, setAmount] = useState(0)
    const [inverted, setInverted] = useState(false)

    const onChange = (event) => {
      setAmount(event.target.value)
    }
    const reset = () => {
      setAmount(0)
    }
    const onInvert = () => {
      setInverted(current => !current)
      reset()
    }

    return (
      <div>
        <div>
          <label htmlFor="KM">KM: </label>
          <input
            value={inverted ? amount * 0.621 : amount}
            id="KM"
            placeholder="KM"
            type="number"
            onChange={onChange}
            disabled={inverted}
          />
        </div>

        <div>
          <label htmlFor="Mile">Mile: </label>
          <input
            value={inverted ? amount : amount * 1.61}
            id="Mile"
            placeholder="Mile"
            type="number"
            onChange={onChange}
            disabled={!inverted}
          />
        </div>
        <button onClick={reset}>Reset</button>
        <button onClick={onInvert}>{inverted ? "Turn Back" : "Invert"}</button>
      </div>
    )
    
  }

  const Container = () => {
    const [index, setIndex] = useState("x")
    const onSelect = (event) => {
      setIndex(event.target.value)
    }
    return (
      <div>
        <h1>Super Converter</h1>
        {/* <MinutesToHours /> */}
        <select value={index} onChange={onSelect}>
          <option value="x">Plese Select Option</option>
          <option value="0">Minutes & Hours</option>
          <option value="1">Km & Miles</option>
        </select>
        {index === "x" ? <h3>Nothing</h3> : null}
        {index === "0" ? <MinutesToHours /> : null}
        {index === "1" ? <KmToMiles /> : null}


      </div>
    )
    
  }
  

  return (
    <div>
      <Container />
    </div>
  )
}

export default App
