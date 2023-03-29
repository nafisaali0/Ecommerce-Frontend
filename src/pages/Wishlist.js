import React from "react";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
import WishCart from "../component/WishCart";
const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrum title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <WishCart/>
            <WishCart/>
            <WishCart/>
            <WishCart/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
