import React, { createContext, useState, useEffect } from "react";
export const WatchListContext = createContext();


export const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState(["bitcoin","ripple","link","neo"])

    return (
        <WatchListContext.Provider value={{ watchList }}>
      {props.children}
    </WatchListContext.Provider>
    )
}
