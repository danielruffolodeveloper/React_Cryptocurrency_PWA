import React, { useEffect, useState, useContext } from "react";
import coinGecko from "../api/coinGecko";
import { WatchListContext } from "../context/WatchListContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

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

  const renderCoinList = () => {
    console.log(coins)
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <List dense={true} sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {coins.map((coin) => (
          <>
            <ListItem alignItems="flex-center"
              secondaryAction={
                <ListItemText
                  primary={

                    <Box sx={{ display: 'flex', alignItems: 'left', textAlign:'right' }}>
                      <Box sx={{ fontSize: '0.875rem' }}>
                        <div>
                          {coin.current_price.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' })}

                        </div>
                        <div>
                          {coin.market_cap > 1000000000000 ?
                            (coin.market_cap / 1000000000000).toFixed(2) + "T" :
                            coin.market_cap > 1000000 ?
                              (coin.market_cap / 1000000).toFixed(2) + "M" :
                              coin.market_cap.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' })
                          }
                        </div>
                      </Box>
                    </Box>
                  } />
              }>

              <ListItemAvatar>
                <Avatar alt={coin.name} src={coin.image} />
              </ListItemAvatar>
              <ListItemText
                primary={coin.name}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    );
  };
  return <div>{renderCoinList()}</div>;
};
export default CoinList
