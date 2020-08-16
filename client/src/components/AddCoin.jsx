
import React, { useState, useContext, useEffect } from "react";
import { WatchListContext } from "../context/WatchListContext";

const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

    const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = availableCoins.filter(coin =>
      coin.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);


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
    "chainlink"
  ];

  

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };


  

  return (
    <div className="dropdown m-2">
      {/* <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} /> */}
      <input 
        value={searchTerm}
        type="text" 
        placeholder="Search"
        onClick={() => setIsActive(!isActive)}
        className="form-control"
        onChange={handleChange}
      >
        
      </input>

      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {searchResults.map((el) => {
          return (
            <a key={el}
              onClick={() => handleClick(el)}
              href="#"
              className="dropdown-item"
            >
              {el}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;