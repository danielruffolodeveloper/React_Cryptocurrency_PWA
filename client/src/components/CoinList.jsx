import React, { useEffect, useState, useContext } from "react";
import coinGecko from "../api/coinGecko";
import { WatchListContext } from "../context/WatchListContext";
import Coin from "./Coin";

const CoinList = () => {

    const [coins, setCoins] = useState([]);
    const { watchList, deleteCoin } = useContext(WatchListContext);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const response = await coinGecko.get("coins/markets", {
                params: {
                    vs_currency: "aud",
                    ids: watchList.join(",")
                }
            })

            setCoins(response.data);
            setIsLoading(false);

        }
        if (watchList.length > 0) {
            fetchData();
          } else setCoins([]);
        }, [watchList]);

    

    const renderCoins = () => {
        if (isLoading) {
          return <div>Loading...</div>;
        }
    
        return (
          // <ul className="coinlist list-group mt-2">
        
          // </ul>

          <div className="row">
            {coins.map((coin) => {
                return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />;
            })}
          </div>
        );
      };
    
      return <div>{renderCoins()}</div>;
    };




export default CoinList
