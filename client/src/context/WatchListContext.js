import React, { createContext, useState } from "react";
export const WatchListContext = createContext();


export const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState([  
                                                "bitcoin",
                                                "ethereum",
                                                "ripple",
                                                "tether",
                                                "chainlink",
                                                "bitcoin-cash",
                                                "cardano",
                                                "litecoin",
                                                "bitcoin-cash-sv",
                                                "binancecoin",
                                                "eos",
                                                "crypto-com-chain",
                                                "tezos",
                                                "stellar",
                                                "tron",
                                                "monero",
                                                "okb",
                                                "cosmos",
                                                "usd-coin",
                                                "leo-token",
                                              ])



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
