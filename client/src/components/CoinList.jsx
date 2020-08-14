import React, { useEffect, useState, useContext } from "react";
import coinGecko from "../api/coinGecko";
import { WatchListContext } from "../context/WatchListContext";

const CoinList = () => {

    const [coins, setCoins] = useState([]);
    const { watchList } = useContext(WatchListContext);


    useEffect(() => {
        const fetchData = async () => {
            const response = await coinGecko.get("coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: "bitcoin,ripple"
                }
            })

            console.log(response.data)
        }
        fetchData()
    },[])

    return (
        <div>
            
        </div>
    )
}

export default CoinList
