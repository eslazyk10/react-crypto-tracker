import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import axios from "axios";
import './App.css';

function App() {
  const [ coins, setCoins ] = useState([]);
  const [ search, setSearch ] = useState("");
  
  const apiUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  useEffect(() => {
    axios.get(apiUrl).then(res => {
      setCoins(res.data);
    }).catch(error => alert("Error"));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <div className="App">
      <div className="coin-search">
        <h1 className="coint-text">Search a Currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={ handleChange }/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={ coin.id }
            name={ coin.name }
            image={ coin.image }
            symbol={ coin.symbol }
            price={coin.current_price}
            marketcap={ coin.market_cap }
            priceChange={ coin.price_change_percentage_24h }
            volume={coin.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
