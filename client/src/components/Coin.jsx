import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin, deleteCoin }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2 coin justify-content-between align-items-center text-dark ">
    <Link to={`/`} className="text-decoration-none">

      <div className="card align-items-center">
      <img className="coinlist-image" src={coin.image} alt="" />
      <span className="text-decoration-none">{coin.name}</span>
      <span className="text-decoration-none">{coin.current_price}</span>
      <span
        className={coin.price_change_percentage_24h < 0 ? "text-danger mr-2" : "text-success mr-2"}>
        {" "}
        
        {coin.price_change_percentage_24h < 0 ? (<i className="fas fa-sort-down align-middle mr-1"></i>) 
          : ( <i className="fas fa-sort-up align-middle mr-1"></i>)}{coin.price_change_percentage_24h}
      </span>
      <span className="text-decoration-none">{new Date(coin.last_updated).toLocaleString()}</span>

      
      </div>

{/* 
  <img className="coinlist-image" src={coin.image} alt="" />
  <span className="text-decoration-none">{coin.name}</span>
  <span className="text-decoration-none">{coin.current_price}</span>
  <span
    className={coin.price_change_percentage_24h < 0 ? "text-danger mr-2" : "text-success mr-2"}>
    {" "}
    
    {coin.price_change_percentage_24h < 0 ? (<i className="fas fa-sort-down align-middle mr-1"></i>) 
      : ( <i className="fas fa-sort-up align-middle mr-1"></i>)}{coin.price_change_percentage_24h}
  </span>

  <i
    onClick={(e) => {
      e.preventDefault();
      deleteCoin(coin.id);
    }}
    className="delete-icon far fa-times-circle text-danger"
  ></i> */}

</Link>
    </div>

  );
};

export default Coin;