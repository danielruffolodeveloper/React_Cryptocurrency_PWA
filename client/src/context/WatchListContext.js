import React, { createContext, useState, useEffect } from "react";
export const WatchListContext = createContext();


export const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState(["bitcoin","ripple","link","neo"])


    const deleteCoin = (coin) => {
        setWatchList(
          watchList.filter((el) => {
            return el !== coin;
          })
        );
      };


    return (
        <WatchListContext.Provider value={{ watchList, deleteCoin }}>
      {props.children}
    </WatchListContext.Provider>
    )
}
