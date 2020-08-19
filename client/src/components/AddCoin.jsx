
import React, { useState, useContext, useEffect } from "react";
import coinGecko from "../api/coinGecko";

import { WatchListContext } from "../context/WatchListContext";

const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { addCoin } = useContext(WatchListContext);
  const [coins, setavailableCoins] = useState([]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      const response = await coinGecko.get("coins/list")
      setavailableCoins(response.data);
      // setIsLoading(false);

      }

  fetchData();
    const results = coins.filter(coin =>
      coin.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleClick = (coin) => {
    addCoin(coin.id);
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
            <a key={el.id}
              onClick={() => handleClick(el)}
              href="#"
              className="dropdown-item"
            >
              {el.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default AddCoin;