import React from "react";
import QuoteApi from "../Api/QuoteApi";

const Nav = () => {
  return (
    <div className="row w-100">
      <div className="col-8">
        <h3 className="Quotopia">𝓠uot𝓞pia</h3>
      </div>
      <QuoteApi />
    </div>
  );
};
export default Nav;
