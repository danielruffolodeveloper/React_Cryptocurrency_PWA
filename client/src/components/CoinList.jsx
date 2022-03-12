import React, { useEffect, useState, useContext } from "react";
import coinGecko from "../api/coinGecko";
import { WatchListContext } from "../context/WatchListContext";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 0.5,
        m: 0.5,
        ...sx,
      }}
      {...other}
    />
  );
}

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
          // ids: watchList.join(","),
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: true,
          price_change_percentage: "1h%2C24h%2C7d"

        }
      })
      setCoins(response.data);
      setIsLoading(false);
    }

    if (watchList.length > 0) {
      fetchData();
    } else setCoins([]);
  }, []);

  console.table(coins);


  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <List>
          {coins.map(coin => (
            <ListItem>
              <ListItemAvatar>
                <Avatar src={coin.image} />
              </ListItemAvatar>
              <ListItemText primary={
                <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                  {coin.name}
                </Typography>
              } secondary={
                <>
                  <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                    {coin.market_cap_rank}
                  </Typography>
                  <Typography variant="h7" sx={{ ml: 1, fontWeight: "bold" }} >
                    {(coin.symbol).toUpperCase()}
                  </Typography>
                  <Typography variant="h7" sx={{ ml: 1, fontWeight: "bold" }}>
                    {coin.price_change_percentage_24h > 0 ? (
                      <span style={{ color: 'green' }}>
                        {coin.price_change_percentage_24h.toFixed(2)} %
                      </span>
                    ) : (
                      <span style={{ color: 'red' }}>
                        {coin.price_change_percentage_24h.toFixed(2)} %
                      </span>
                    )}

                  </Typography>
                </>
              } />
              <ListItemText sx={{textAlign:"center", width:"100px"}} primary={
                <>
                  <div style={{ textAlign:"center", alignContent:"center", alignItems:"center"}}>
                    <Sparklines data={coin.sparkline_in_7d.price} limit={50} width={90} height={30} margin={5}>
                      <SparklinesLine color="blue" />
                      <SparklinesSpots />
                    </Sparklines>
                  </div>
                </>
              } secondary="" />

              <ListItemText sx={{ textAlign: "Right" }} primary={
                <>
                  {/* show current price with correct commas to 3 decimal places */}
                  <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                    {(coin.current_price).toLocaleString('en-AU', { style: 'currency', currency: 'AUD'})}
                  </Typography>
                </>
              } secondary={
                <>
                  <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                    {coin.market_cap.toLocaleString('en-AU',{ style: 'currency', currency: 'AUD'})}     
                  </Typography>
                </>
              } />

            </ListItem>
          ))}
        </List>
      )
      }

    </>
  )

};
export default CoinList


