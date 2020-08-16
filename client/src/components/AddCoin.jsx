
import React, { useEffect, useState, useContext } from "react";
import coinGecko from "../api/coinGecko";
import { WatchListContext } from "../context/WatchListContext";

const AddCoin = () => {
  const [coins, setCoins] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const { addCoin } = useContext(WatchListContext);
  const availableCoins = [
    "bitcoin",
    "ethereum",
    "ripple",
    "tether",
    "bitcoin-cash",
    "litecoin",
    "eos",
    "okb",
    "tezos",
    "cardano",
  ];


  useEffect(() => {
    const fetchData = async () => {
        // setIsLoading(true);

        const response = await coinGecko.get("coins/list", {
            params: {
                vs_currency: "aud"
                
            }
        })

        console.log(response.data);
        setCoins(response.data)
        // setIsLoading(false);

    }
    fetchData();
       }, []);



  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  return (
    <div className="dropdown m-2">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
        Add Coin
      </button>
      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {coins.map((coin) => {
          return (
            <a
              onClick={() => handleClick(coin.id)}
              href="#"
              className="dropdown-item"
            >
              {coin.id}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;