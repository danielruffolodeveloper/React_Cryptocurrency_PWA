import React, { createContext, useState, useEffect } from "react";
export const WatchListContext = createContext();


export const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState([  "bitcoin",
    "ethereum",
    "ripple",
    "neo",
    "chainlink",
    "stellar",
  "monero",
  "iota",
  "usd-coin"])



    const addCoin = (coin) => {
      if (watchList.indexOf(coin) === -1) {
        setWatchList([...watchList, coin]);
      }
    };

    const deleteCoin = (coin) => {
        setWatchList(
          watchList.filter((el) => {
            return el !== coin;
          })
        );
      };


    return (
        <WatchListContext.Provider value={{ watchList, deleteCoin, addCoin }}>
      {props.children}
    </WatchListContext.Provider>
    )
}
