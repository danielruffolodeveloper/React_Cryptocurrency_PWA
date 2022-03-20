import React, { useEffect} from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import Stack from '@mui/material/Stack';
import ListItemButton from '@mui/material/ListItemButton';
import { useDispatch, useSelector } from 'react-redux'
import { getCoins,getCoin} from '../features/coinSlice'
import { BrowserRouter, Route, useHistory } from "react-router-dom";


const CoinList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const coins = useSelector(state => state.coin.coins)
  const isLoading = useSelector(state => state.coin.isLoading)

  
  useEffect(() => {
      dispatch(getCoins())
  }, [dispatch]);

  const onItemClick = (coin) => {
    history.push(`/coin/${coin.id}`);
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <List>
          {coins.map(coin => (
            <ListItem key={coin.id} onClick={() => onItemClick(coin)} sx={{ margin: 0, padding: 0 }}>

              <ListItemButton sx={{ margin: 0, padding: 0 }}>
                <img src={coin.image} alt={coin.name} width={30} style={{ margin: 10 }} />
                <ListItemText primary={
                  <>

                    <Stack direction="row" spacing={0.5}>
                      <div>
                        <Typography variant="h7" sx={{ fontWeight: "bold", fontSize: "0.8rem" }}>
                          {coin.name}
                        </Typography>

                      </div>

                    </Stack>
                    <Stack direction="row" spacing={0.5}>
                      <div>
                        <Typography variant="h7" sx={{ fontWeight: "bold", fontSize: "0.6rem" }}>
                          {coin.market_cap_rank}
                        </Typography>

                      </div>
                      <div>
                        <Typography variant="h7" sx={{ fontWeight: "bold", fontSize: "0.6rem" }} >
                          {(coin.symbol).toUpperCase()}
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h7" sx={{ fontWeight: "bold", fontSize: "0.6rem" }}>
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
                      </div>

                    </Stack>
                  </>
                }
                />
              </ListItemButton>
              <ListItemText sx={{ textAlign: "center", width: "100px" }} primary={
                <>
                  <div style={{ textAlign: "center", alignContent: "center", alignItems: "center" }}>
                    <Sparklines data={coin.sparkline_in_7d.price} limit={50} width={90} height={30} margin={5}>
                      <SparklinesLine color="blue" />
                      <SparklinesSpots />
                    </Sparklines>
                  </div>
                </>
              } secondary="" />

              <ListItemText sx={{ textAlign: "Right" }} primary={
                <>
                  <Typography variant="h7" sx={{ fontWeight: "bold", fontSize: "0.6rem" }}>
                    {(coin.current_price).toLocaleString('en-AU', { style: 'currency', currency: 'AUD' })}
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


