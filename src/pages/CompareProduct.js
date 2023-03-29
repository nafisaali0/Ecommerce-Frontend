import React from "react";
import BreadCrum from "../component/BreadCrum";
import Meta from "../component/Meta";
import CompareCard from "../component/CompareCard";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Product"} />
      <BreadCrum title="Compare Product" />
      <div className="compare-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <CompareCard />
            <CompareCard />
            <CompareCard />
            <CompareCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
