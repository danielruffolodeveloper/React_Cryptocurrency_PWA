import React,{useEffect} from 'react'
import {useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getCoin} from '../features/coinSlice'




const CoinDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();


  // if id is defined, load coin
  useEffect(() => {
    if (id) {
      dispatch(getCoin(id));
    }
  }, [dispatch, id]);



  return (
    <div>CoinDetailPage</div>
  )
}

export default CoinDetailPage