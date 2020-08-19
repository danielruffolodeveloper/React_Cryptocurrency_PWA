import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin, deleteCoin }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-2 coin justify-content-between align-items-center text-dark   ">
    <Link to={`/coins/${coin.id}`} className="text-decoration-none">




      <div className="card align-items-center text-center">
        <div className="row" style={{width:100 + "%"}}>
        <div className="col-3 nopadding ">
        <img className="coinlist-image  " src={coin.image} alt="" />
      </div>
      <div className="col-9 nopadding ">
        <p>{coin.name}</p>
        <p>{coin.current_price}</p>
        <p
        className={coin.price_change_percentage_24h < 0 ? "text-danger mr-2" : "text-success mr-2"}>
        {" "}
        
        {coin.price_change_percentage_24h < 0 ? (<i className="fas fa-sort-down align-middle mr-1"></i>) 
          : ( <i className="fas fa-sort-up align-middle mr-1"></i>)}{coin.price_change_percentage_24h}
      </p>

      </div>

    
        </div>
    
      {/* <span className="text-decoration-none">{new Date(coin.last_updated).toLocaleString()}</span> */}

      
      </div>

</Link>
    </div>

  );
};

export default Coin;