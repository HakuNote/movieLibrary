import { useState, useEffect } from 'react'
import Button from './Button'
import styles from './App.module.css'

// function App() {
//   const [loading, setLoading] = useState(true)
//   const [coins, setCoins] = useState([])
//   const [price, setPrice] = useState(0)
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json)
//         setLoading(false)
//       })
//   }, [])

//   const onChange = (event) => {
//     setPrice(event.target.value)
//   }
//   const LoadIng = () => {
//     return (
//       <strong>Loading...</strong>
//     )
//   }

//   const LoadCompleted = () => {
//     return (
//       <div>
//         <select onChange={onChange}>
//           <option>Select Coin!</option>
//           {coins.map((coin, index) => 
//             <option
//               key={coin.id}
//               value={coin.quotes.USD.price}>
              
//               {coin.name}
//             </option>
//           )}
//         </select>

//         <br /><br />
//         <strong>Current Coin price: {price}</strong>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <h1>The Coins!</h1>
//       {loading ? <LoadIng /> : <LoadCompleted />}
      
//     </div>
//   )
// }

// export default App

  const LoadCompleted = () => {
    return (
      <div>
        <select onChange={onChange}>
          <option>Select Coin!</option>
          {coins.map((coin, index) => 
            <option
              key={coin.id}
              value={coin.quotes.USD.price}>
              
              {coin.name}
            </option>
          )}
        </select>

        <br /><br />
        <strong>Current Coin price: {price}</strong>
      </div>
    )
  }

const CalcPrice = (price) => {
  if (price > 10) {
    return Math.round(price)
  } else {
    return price
  }

}

function App() {
  const [coins,setCoins] = useState([]); 
  const [price, setPrice] = useState(0)

  const onChange = (event) => {
    console.log(event.target.value);
    setPrice(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
      });
  }, []);
  
  return (
    <div>
      <select onChange={onChange}>
        <option>Select Coin!</option>
        {coins.map((coin, index) => (
          <option key={coin.id} value={coin.quotes.USD.price}>
            {coin.name}
          </option>
        ))}
      </select>

      <br /><br />
      {`Current Price: ${CalcPrice(price)}$`}
    </div>
  );
}
export default App;


