import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [ coins, setCoins ] = useState([]);
  
  const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    axios.get(apiUrl).then(res => {
      setCoins(res.data);
    }).catch(error => alert("Error"));
  }, []);
  
  return (
    <div className="App">
      <div className="coin-search">
        <h1 className="coint-text">Search a Currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" />
        </form>
      </div>
    </div>
  );
}

export default App;
